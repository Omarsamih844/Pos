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
        Schema::create('commande_produits', function (Blueprint $table) {
            $table->id('id_commande_produit');
            $table->unsignedBigInteger('id_commande');
            $table->foreign('id_commande')->references('id_commande')->on('commandes');
            $table->unsignedBigInteger('id_produit');
            $table->foreign('id_produit')->references('id_produit')->on('produits');
            $table->float('quantite_produit_commande', 2)->default(0.00);
            $table->decimal('prix_commande_produit', 12, 2)->default(0.00);
            $table->decimal('tva_commande_produit', 12, 2)->default(0.00);
            $table->decimal('total_ttc_commande_produit', 12, 2)->default(0.00);
            $table->date('date_commande_produit');
            $table->time('heure_commande_produit');
            $table->longText('note_information_commande_produit')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commande_produits');
    }
};
