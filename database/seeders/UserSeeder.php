<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class

UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        $user = new User();
        $user->name = 'Admin';
        $user->last_name = 'Mr';
        $user->email = 'admin@gmail.com';
        $user->password = Hash::make('admin1234');
        $user->email_verified_at = Carbon::now();
        $user->type_id = 1;
        $user->avatar ="https://image.flaticon.com/icons/svg/21/21104.svg";
        $user->save();

        $user2 = new User();
        $user2->name = 'user';
        $user->last_name = 'Mr';
        $user2->email = 'user@gmail.com';
        $user2->password = Hash::make('user1234');
        $user2->email_verified_at = Carbon::now();
        $user2->type_id = 1;
        $user2->cds_id = 1;
        $user2->avatar ="https://image.flaticon.com/icons/svg/21/21104.svg";
        $user2->save();

        $admin = User::find($user->id);
        $admin->givePermissionTo('FullAccess');
        $admin->assignRole('admin');

        $userR = User::find($user2->id);
        $userR->givePermissionTo('limited');
        $userR->assignRole('user');

    }
}
