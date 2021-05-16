<?php

use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

//  *******  Auth routes   ******* //
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::put('/user/change-password/{email}', [AuthController::class, 'changePassword']);
});
Route::group([], function () {
    Route::get('/email/verify/{id}', [UsersController::class, 'emailVerify'])->name('email_verification');
    Route::get('email/resend/{email}', [VerificationController::class, 'resend'])->name('verification.resend');
    Route::post('/send_reset_email', [AuthController::class, 'sendResetEmail']);
    Route::post('/reset-password', [AuthController::class, 'resetPassword']);
});


Route::group([
    'middleware' => ['api'],
], function () {

});
