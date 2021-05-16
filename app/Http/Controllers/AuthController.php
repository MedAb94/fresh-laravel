<?php

namespace App\Http\Controllers;

use App\Mail\VerifyEmail;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


use Illuminate\Routing\Controller;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Mail;
use App\Models\User;

use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Spatie\Activitylog\ActivityLogger;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'resetPassword', 'sendResetEmail']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return JsonResponse
     */
    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {

            return response()->json($validator->errors(), 400);
        }

        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'incorrectLogin' => ['Email ou mot de passe incorrecte. Veuillez réessayer svp.'],
            ], 400);
            // throw ValidationException::withMessages();
        }
        if ($user && !Hash::check($request->password, $user->password)) {

            return response()->json([
                'incorrectLogin' => ['\'incorrect mot de passe.\''],
            ]);
        }
        if (empty($user->email_verified_at)) {
            return response()->json(['incorrectLogin' =>
                'veuillez vérifier votre courrier électronique pour un lien de vérification'
            ], 422);
        }

        // error creating toke
        if (!$token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // create token
        $tk = $this->createNewToken($token);
        $userInstance = new User();
        return response()->json([
            'token' => $tk->original['access_token'],
            'user' => $user, 'role' => $user->hasRole('admin') ? 'admin' : 'user']);
    }

    /**
     * Register a User.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'last_name' => 'required',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = new User();
        $user->name = $request->name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->profile_id = $request->profile_id;
        $user->password = Hash::make($request->password);
        $user->save();

        $user->assignRole('user');
        Mail::to($user->email)->send(new VerifyEmail($user));
        // $user->sendEmailVerificationNotification();

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 200);
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return JsonResponse
     */
    public function logout()
    {

        auth()->logout();

        return response()->json(['message' => 'User successfully signed out']);
    }

    /**
     * Refresh a token.
     *
     * @return JsonResponse
     */
    public function refresh()
    {
        return $this->createNewToken(auth('api')->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return JsonResponse
     */
    protected function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60000,
            'user' => auth()->user()
        ]);
    }

    public function changePassword(Request $request, $email)
    {

        if (User::where('email', $email)->exists()) {

            $user = User::firstWhere('email', $email);

            $user->password = is_null($request->get('password')) ? $user->password : bcrypt($request->get('password'));

            $user->save();

            return response()->json([
                "message" => "password updated successfully"
            ], 200);
        } else {
            return response()->json([
                "message" => "User not found"
            ], 404);
        }
    }

    public function sendResetEmail(Request $request)
    {

        $request->validate(['email' => 'required|email']);
        $status = Password::sendResetLink(
            $request->only('email')
        );

        return response()->json(__($status));
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->save();

                $user->setRememberToken(Str::random(60));

                event(new PasswordReset($user));
            }
        );

        return $status == Password::PASSWORD_RESET
            ? redirect('/connexion')
            : response()->json(__($status));
    }

    public function userProfile()
    {
        return response()->json([
            'user' => auth()->user(),
            'permissions' => auth()->user()->getAllPermissions(),
        ]);
    }
}
