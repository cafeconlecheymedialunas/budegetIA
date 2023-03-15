<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\User;


class Usercontroller extends Controller
{
  
    public function index()
    {
        return Inertia::render("Users",[
      
            "users" => User::with("profile")->get()
        ]);
    }

    
    public function create()
    {
        //
    }

  
    public function store(Request $request)
    {
        //
    }

   
    public function show(User $user)
    {
        $user = $user->load("profile");
        return Inertia::render("ProfilePage",compact("user"));
    }

    
    public function edit(string $id)
    {
        //
    }

   
    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
