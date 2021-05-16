<?php
use App\Mail\TransactionsAcceptedMail;
use App\Models\Exoneration;
use App\Models\Facture;
use App\Models\Quitance;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;



Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');





