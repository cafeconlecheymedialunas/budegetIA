<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeamRequest;
use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("Team/TeamList",["data" => Team::all("id","name","description")]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Team/TeamCreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeamRequest $request)
    {
        Team::create(
            $request->validated()
        );

        return Redirect::route('teams.index');
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $team = Team::findOrFail($id);
        return Inertia::render("Team/TeamUpdate",["team" => $team]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreTeamRequest $request, Team $team)
    {
        $team->update($request->validated());

        return Redirect::route('teams.index');
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        $team->delete();

        return Redirect::route('teams.index');
    }
}
