<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        DB::table('roles')->delete();

        DB::table('permissions')->delete();

        // create permissions


        DB::table('permissions')->insert([
            ['name' => 'FullAccess', 'guard_name' => 'api'],
            ['name' => 'limited', 'guard_name' => 'api'],
        ]);

        // create roles and assign created permissions

        $roleAdmin = Role::create(['name' => 'admin']);
        Role::create(['name' => 'user']);
        $roleAdmin->givePermissionTo(Permission::all());


    }
}
