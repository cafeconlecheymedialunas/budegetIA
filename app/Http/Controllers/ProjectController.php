<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Models\Project;

use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
 
    public function index()
    {
        return Inertia::render("Project/ProjectList",["data" => Project::all("id","name","docs","requirements","references","archives","team_id")]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Project/ProjectCreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        Project::create(
            $request->validated()
        );
      
        return Redirect::route('projects.index');
       
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
        $project = Project::findOrFail($id);
        return Inertia::render("Project/ProjectUpdate",["project" => $project]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreProjectRequest $request, Project $project)
    {
        $project->update($request->validated());

        return Redirect::route('projects.index');
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return Redirect::route('projects.index');
    }
}
