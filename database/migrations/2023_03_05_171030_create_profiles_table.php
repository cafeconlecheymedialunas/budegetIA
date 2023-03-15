<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id");
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'); 
            $table->enum("area",["Tech","QA","Design","ux"]);
            $table->enum("role", ["Developer","Tech Lead","Project Manager","Designer","UX Designer","QA Specialist"]);
            $table->string("seniority");
            $table->unsignedInteger("error_estimations");
            $table->string("phone");
            $table->string("address_street");
            $table->string("address_number");
            $table->string("address_city");
            $table->string("address_state");
            $table->string("address_country");
            $table->string("address_postcode");
            $table->string('image')->default('user.png');
           
            $table->timestamps();
           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
