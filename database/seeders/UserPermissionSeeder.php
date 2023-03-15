<?php

namespace Database\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

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
      

	    Permission::create(['name' => 'view_teams']);
		Permission::create(['name' => 'create_teams']);
	    Permission::create(['name' => 'destroy_teams']);
		Permission::create(['name' => 'update_teams']);

		Permission::create(['name' => 'view_costs']);
		Permission::create(['name' => 'create_costs']);
		Permission::create(['name' => 'destroy_costs']);
		Permission::create(['name' => 'update_costs']);

		Permission::create(['name' => 'view_clients']);
		Permission::create(['name' => 'create_clients']);
		Permission::create(['name' => 'destroy_clients']);
		Permission::create(['name' => 'update_clients']);

		Permission::create(['name' => 'view_projects']);
		Permission::create(['name' => 'create_projects']);
		Permission::create(['name' => 'destroy_projects']);
		Permission::create(['name' => 'update_projects']);

		Permission::create(['name' => 'view_tasks']);
		Permission::create(['name' => 'create_tasks']);
		Permission::create(['name' => 'destroy_tasks']);
		Permission::create(['name' => 'update_tasks']);

		Permission::create(['name' => 'view_estimations']);
		Permission::create(['name' => 'create_estimations']);
		Permission::create(['name' => 'destroy_estimations']);
		Permission::create(['name' => 'update_estimations']);

		Permission::create(['name' => 'view_comments']);
		Permission::create(['name' => 'create_comments']);
		Permission::create(['name' => 'destroy_comments']);
		Permission::create(['name' => 'update_comments']);

		Permission::create(['name' => 'view_budgets']);
		Permission::create(['name' => 'create_budgets']);
		Permission::create(['name' => 'destroy_budgets']);
		Permission::create(['name' => 'update_budgets']);


        $admin->syncPermissions(
            [
                'view_teams', 'create_teams','update_teams','destroy_teams',
                'view_comments', 'create_comments','update_comments','destroy_comments',
                'view_clients', 'create_clients','update_clients','destroy_clients',
                'view_projects', 'create_projects','update_projects','destroy_projects',
                'view_tasks', 'create_tasks','update_tasks','destroy_tasks',
                'view_costs', 'create_costs','update_costs','destroy_costs',
                'view_estimations', 'create_estimations','update_estimations','destroy_estimations',
                'view_budgets', 'create_budgets','update_budgets','destroy_budgets'
            ]
        );

        $manager->syncPermissions(
            [
                'view_teams', 'create_teams','update_teams','destroy_teams',
                'view_comments', 'create_comments','update_comments','destroy_comments',
                'view_clients', 'create_clients','update_clients','destroy_clients',
                'view_projects', 'create_projects','update_projects','destroy_projects',
                'view_tasks', 'create_tasks','update_tasks','destroy_tasks',
                'view_estimations', 'create_estimations','update_estimations','destroy_estimations',
                'view_budgets', 'create_budgets','update_budgets','destroy_budgets'
            ]
        );

        $expert->syncPermissions(
            [
                'view_teams',
                'view_comments', 'create_comments','update_comments','destroy_comments',
                'view_clients',
                'view_projects',
                'view_tasks', 'create_tasks','update_tasks','destroy_tasks',
                'view_estimations', 'create_estimations','update_estimations','destroy_estimations',
                'view_budgets', 'create_budgets','update_budgets','destroy_budgets'
            ]
        );
        
        User::factory(2)->create()->each(
            function($user){
                $user->assignRole("Admin");
            }
        );

        User::factory(2)->create()->each(
            function($user){
                $user->assignRole("Expert");
            }
        );
        
        User::factory(2)->create()->each(
            function($user){
        
                $user->assignRole("Manager");
            }
        );
        User::create(array(
            'name' => 'Mauro Gaitan',
            'password' => Hash::make('arselocura1234'),
            'email'    => 'maurodeveloper86@gmail.com'
        ));
    

		
	}
}
