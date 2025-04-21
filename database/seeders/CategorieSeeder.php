<?php

namespace Database\Seeders;

use App\Models\Categorie;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Categorie::insert([
            [
                'libelle_categorie' => 'Catégorie 1',
                'abrege_classement_categorie' => null,
                'exclure_categorie_chiffre_affaires' => false,
                'image_categorie' => 'categories/categorie1.jpg',
                'couleur_categorie' => '#00FF00',
                'categorie_est_activee' => true,
                'id_mesure' => null,
                'id_taxe' => 1,
                'sous_categories_associees_categories' => null,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_categorie' => 'Catégorie 2',
                'abrege_classement_categorie' => null,
                'exclure_categorie_chiffre_affaires' => false,
                'image_categorie' => 'categories/categorie2.jpg',
                'couleur_categorie' => '#FF0000',
                'categorie_est_activee' => true,
                'id_mesure' => null,
                'id_taxe' => 1,
                'sous_categories_associees_categories' => null,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_categorie' => 'Catégorie 3',
                'abrege_classement_categorie' => null,
                'exclure_categorie_chiffre_affaires' => false,
                'image_categorie' => 'categories/categorie3.jpg',
                'couleur_categorie' => '#0000FF',
                'categorie_est_activee' => false,
                'id_mesure' => null,
                'id_taxe' => 1,
                'sous_categories_associees_categories' => null,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]

        ]);
    }
}
