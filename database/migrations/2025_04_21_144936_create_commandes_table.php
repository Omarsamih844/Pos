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
        Schema::create('commandes', function (Blueprint $table) {
            $table->id('id_commande');
            $table->string('numero_commande')->unique();
            $table->decimal('montant_total_ttc', 12, 2)->default(0.00);
            $table->unsignedBigInteger('id_mode_vente');
            $table->foreign('id_mode_vente')->references('id_mode_vente')->on('mode_ventes');
            $table->unsignedBigInteger('id_statut_commande');
            $table->foreign('id_statut_commande')->references('id_statut_commande')->on('statut_commandes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};
