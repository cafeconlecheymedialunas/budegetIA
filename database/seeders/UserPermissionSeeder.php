<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
$role = Role::create(['name' => 'Administrator']);
class UserPermissionSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

    	$admin = Role::create(["name" => "Admin"]);
		$manager = Role::create(["name" => "Manager"]);
		$expert = Role::create(["name" => "Expert"]);
      

	    Permission::create(['name' => 'view_teams'])->syncRoles($admin,$manager,$expert);
		Permission::create(['name' => 'create_teams'])->syncRoles([$admin,$manager]);
	    Permission::create(['name' => 'destroy_teams'])->syncRoles([$admin,$manager]);
		Permission::create(['name' => 'update_teams'])->syncRoles([$admin,$manager]);

		Permission::create(['name' => 'view_costs'])->syncRoles([$admin]);
		Permission::create(['name' => 'create_costs'])->syncRoles([$admin]);
		Permission::create(['name' => 'destroy_costs'])->syncRoles([$admin]);
		Permission::create(['name' => 'update_costs'])->syncRoles([$admin]);

		Permission::create(['name' => 'view_clients'])->syncRoles([$admin,$manager,$expert]);
		Permission::create(['name' => 'create_clients'])->syncRoles([$admin,$manager]);
		Permission::create(['name' => 'destroy_clients'])->syncRoles([$admin,$manager]);
		Permission::create(['name' => 'update_clients'])->syncRoles([$admin,$manager]);

		Permission::create(['name' => 'view_projects'])->syncRoles([$admin,$manager,$expert]);
		Permission::create(['name' => 'create_projects'])->syncRoles([$admin,$manager]);
		Permission::create(['name' => 'destroy_projects'])->syncRoles([$admin,$manager]);
		Permission::create(['name' => 'update_projects'])->syncRoles([$admin,$manager]);

		Permission::create(['name' => 'view_tasks']->syncRoles([$admin,$manager,$expert]));
		Permission::create(['name' => 'create_tasks'])->syncRoles([$admin,$manager,$expert]);
		Permission::create(['name' => 'destroy_tasks'])->syncRoles([$admin,$manager,$expert]);
		Permission::create(['name' => 'update_tasks'])->syncRoles([$admin,$manager,$expert]);

		Permission::create(['name' => 'view_estimations'])->syncRoles([$admin,$manager,$expert]);
		Permission::create(['name' => 'create_estimations'])->syncRoles([$admin,$manager,$expert]);
		Permission::create(['name' => 'destroy_estimations'])->syncRoles([$admin,$manager,$expert]);
		Permission::create(['name' => 'update_estimations'])->syncRoles([$admin,$manager,$expert]);

		Permission::create(['name' => 'view_comments'])->syncRoles([$admin,$manager,$expert]);
		Permission::create(['name' => 'create_comments'])->syncRoles([$admin,$manager,$expert]);
		Permission::create(['name' => 'destroy_comments'])->syncRoles([$admin,$manager,$expert]);
		Permission::create(['name' => 'update_comments'])->syncRoles([$admin,$manager,$expert]);

		Permission::create(['name' => 'view_budgets'])->syncRoles([$admin,$manager,$expert]);
		Permission::create(['name' => 'create_budgets'])->syncRoles([$admin,$manager]);
		Permission::create(['name' => 'destroy_budgets'])->syncRoles([$admin,$manager]);
		Permission::create(['name' => 'update_budgets'])->syncRoles([$admin,$manager]);

		$admin = Role::create(["name" => "Admin"]);
		$manager = Role::create(["name" => "Manager"]);
		$admin = Role::create(["name" => "Expert"]);

        $user_admin = User::create([
            'name' => 'demo',
            'email' => 'demo@demo.net',
            'password' => "123456demo"
        ]);
       
        $user_admin->assignRole('Admin');


        $user_expert = User::create([
            'name' => 'demo',
            'email' => 'demo@demo.net',
            'password' => "123456demo"
        ]);
       
        $user_expert->assignRole('Expert');

        $user_manager = User::create([
            'name' => 'demo',
            'email' => 'demo@demo.net',
            'password' => "123456demo"
        ]);
       
        $user_manager->assignRole('Manager');
		]);
		
	}
}
