<?php

namespace Database\Seeders;

use App\Models\StatutCommande;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatutCommandeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        StatutCommande::insert([
            [
                'id_statut_commande' => 1,
                'libelle_statut_commande' => 'En cours',
                'couleur_statut_commande' => '#FFA500',

            ],
            [
                'id_statut_commande' => 2,
                'libelle_statut_commande' => 'traitée',
                'couleur_statut_commande' => '#00FF00',

            ],
            [
                'id_statut_commande' => 3,
                'libelle_statut_commande' => 'Annulée',
                'couleur_statut_commande' => '#FF0000',

            ]
            ]);
    }
}
