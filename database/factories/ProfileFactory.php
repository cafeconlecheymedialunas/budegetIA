<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'area' => fake()->name(),
            'role' =>  fake()->name(),
            'seniority' =>  fake()->string(),
            
            'error_estimations' =>  1,
            'phone' =>  fake()->string(),
            'address_street' =>  fake()->string(),
            'address_number' =>  fake()->string(),
            'address_city' =>  fake()->string(),
            'address_state' =>  fake()->string(),
            'address_postcode' =>  fake()->string(),
            'address_country' =>  fake()->string()
        ];
    }

 
}
