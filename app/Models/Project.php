<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    
    protected $fillable = [ 'name',"docs","requirements","references","archives","project_id"];

   
}
/*$table->string('docs');
$table->string('requirements');
$table->string('references');
$table->string('archives');

$table->unsignedBigInteger("project_id");

$table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade')*/