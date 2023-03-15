<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    protected $fillable =  [
        'role',
        'area',
        "seniority",
        "error_estimations",
        "phone",
        "address_street",
        "address_number",
        "address_city",
        'name',
        "address_state",
        "address_country",
        "address_postcode",
        "image"
    ];

    public function user(){
        return $this->belongsTo("App\Models\User");
    }
}
