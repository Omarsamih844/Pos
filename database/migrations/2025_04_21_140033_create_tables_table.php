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
        Schema::create('tables', function (Blueprint $table) {
            $table->id('id_table');
            $table->string('numero_table');
            $table->float('coordonnee_x', 2)->default(0.00);
            $table->float('coordonnee_y', 2)->default(0.00);
            $table->unsignedBigInteger('id_statut_table');
            $table->foreign('id_statut_table')->references('id_statut_table')->on('statut_tables');
            $table->unsignedBigInteger('id_etage');
            $table->foreign('id_etage')->references('id_etage')->on('etages');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tables');
    }
};
