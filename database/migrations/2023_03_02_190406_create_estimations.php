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
        Schema::create('estimations', function (Blueprint $table) {
            $table->id();
             $table->enum('difficult_category',['low','medium','hight'])->change();
            $table->enum('size',['small','medium','large'])->change();
            $table->enum('difficult',
            [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,144,233,377,610,987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229]
            )->change();
            $table->integer('pessimistic');
            $table->integer('optimistic');
            $table->integer('normal');
            $table->integer('expected');
           
            $table->unsignedBigInteger("task_id");
          
              $table->foreign('task_id')->references('id')->on('tasks')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estimations');
    }
};
