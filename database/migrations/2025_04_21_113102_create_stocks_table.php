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
        Schema::create('stocks', function (Blueprint $table) {
            $table->id('id_stock');
            $table->unsignedBigInteger('id_produit');
            $table->foreign('id_produit')->references('id_produit')->on('produits');
            $table->float('quantite_entree_stock', 2)->default(0.00);
            $table-> float('quantite_sortie_stock', 2)->default(0.00);
            $table->float('quantite_actuelle_stock', 2)->default(0.00);
            $table->float('quantite_minimum_stock', 2)->default(0.00);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stocks');
    }
};
