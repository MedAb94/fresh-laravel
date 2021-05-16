<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserType;
use App\Models\Vehicule;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class UsersController extends Controller
{
    public function emailVerify($id)
    {
        // dd(77);
        $user = User::find($id);
        if ($user) {
            $user->email_verified_at = Carbon::now();
            $user->save();
            return redirect('/connexion');
        }

        return response()->json(" l'utilisateur n'existe pas");


    }

    public function index()
    {
        return response()->json(User::with('roles')->latest()->get());
    }

    public function userById($id)
    {
        if (User::where('id', $id)->exists()) {
            $user = User::where('id', $id)->first();
            return response($user, 200);
        } else {
            return response()->json("l'utilisateur est introuvable", 404);
        }
    }

    public function store(Request $request)
    {

        $User = new User();

        $User->name = $request->get('name');
        $User->last_name = $request->get('last_name');
        $User->email = $request->get('email');
        $User->cds_id = $this->getId($request->get('cds_id'));
        $User->password = Hash::make($request->get('password'));
        $User->save();

        return response()->json(
            "user created successfully", 200);

    }

    public function getId($p)
    {
        return explode("-", $p)[0];
    }

    public function update(Request $request, $id)
    {

        $User = User::findOrFail($id);

        $User->name = is_null($request->get('name')) ? $User->name : $request->get('name');
        $User->last_name = is_null($request->get('last_name')) ? $User->name : $request->get('last_name');
        $User->email = is_null($request->get('email')) ? $User->email : $request->get('email');
        $User->cds_id = is_null($request->get('cds_id')) ? $User->cds_id : $request->get('cds_id');
        $User->password = is_null($request->get('password')) ? $User->password : Hash::make($request->get('password'));
        $User->save();

        return response()->json(
            "records updated successfully", 200);

    }


}
