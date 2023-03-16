<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    
    protected $fillable = [ 'name',"docs","requirements","references","archives","project_id"];

    public function team()
    {
        return $this->hasOne("App\Models\Team");
    }
}