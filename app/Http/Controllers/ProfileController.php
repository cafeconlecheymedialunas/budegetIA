<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Profile;
use App\Models\User;
class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(User $user): Response
    {
        $user = $user->load("profile");
   
        return Inertia::render('Profile/Edit', [
            'user' => $user->load("profile"),
            'status' => session('status'),
        ]);
    }

    public function show(User $user)
    {
        $user = $user->load("profile");
        return Inertia::render("ProfilePage",compact("user"));
    }


    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        
       
        $user = User::findOrFail($request->user_id);
        
        $user->name = $request->name;
        $user->email = $request->email;
         
      
       
         
       

        if ($request->user()->isDirty('email')) {
            $user->email_verified_at = null;
        }
       
   
       
   
    
       

      
      
        $user->profile()->updateOrCreate(
            ['user_id' => $request->user_id],
            $request->safe()->except(["name","email","image"])
        );
       
        $user->save();
        return Redirect::route('users')->with('message', 'State saved correctly!!!');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request,User $user): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

    

        $user->logout();
        $user->profile()->delete();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('users');
    }
}
