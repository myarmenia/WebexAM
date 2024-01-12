<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class CreateUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::where('email', 'info@webex.am')->first();

        if(!$user){
            $user = User::updateOrCreate([
            'name' => 'admin',
            'status' => 1,
            'avatar' => '',
            'phone' => '+37494444444',
            'email' => 'info@webex.am',
            'password' => bcrypt('123456')
            ]);

            $role = Role::updateOrCreate(['name' => 'admin']);

            $permissions = Permission::pluck('id', 'id')->all();

            $role->syncPermissions($permissions);

            $user->assignRole([$role->id]);
        } 
    }
}
