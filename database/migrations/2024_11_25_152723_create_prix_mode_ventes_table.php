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
        Schema::create('prix_mode_ventes', function (Blueprint $table) {
            $table->id('id_prix_mode_vente');

            $table->unsignedBigInteger('id_produit')->nullable();
            $table->foreign('id_produit')->references('id_produit')->on('produits')->onDelete('set null')->onUpdate('cascade');

            $table->unsignedBigInteger('id_mode_vente')->nullable();
            $table->foreign('id_mode_vente')->references('id_mode_vente')->on('mode_ventes')->onDelete('set null')->onUpdate('cascade');

            $table->decimal('prix_vente', 12, 2)->nullable();
            $table->boolean('prix_mode_vente_est_actif')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prix_mode_ventes');
    }
};
