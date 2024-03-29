<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'description'];

    public function comments()
    {
        return $this->morphMany('App\Models\Comment', 'commentable');
    }

    public function projects()
    {
        return $this->hasMany('App\Models\Project');
    }
}
