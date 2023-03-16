<?php


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


use Inertia\Inertia;
//use App\Http\Controllers\UserController;
use App\Http\Controllers\ClientController;
//use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\ProjectController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    //Profile
    /*Route::get('/users', [UserController::class, 'index'])->name('users');
    Route::get('/profile/edit/{user}', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/profile/show/{user}', [ProfileController::class, 'show'])->name('profile.show');
    Route::patch('/profile/', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile/{user}', [ProfileController::class, 'destroy'])->name('profile.destroy');*/


    Route::resource("clients",ClientController::class)->names("clients");

    Route::resource("teams",TeamController::class)->names("teams");
    Route::resource("projects",ProjectController::class)->names("projects");
});

require __DIR__.'/auth.php';
