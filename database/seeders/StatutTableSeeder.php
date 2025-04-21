<?php

namespace Database\Seeders;

use App\Models\StatutTable;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatutTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        StatutTable::insert([
            [
                'id_statut_table' => 1,
                'libelle_statut_table' => 'libre',
                'couleur_statut_table' => '#00FF00', // Green
            ],
            [
                'id_statut_table' => 2,
                'libelle_statut_table' => 'occupé',
                'couleur_statut_table' => '#FF0000', // Red
            ]
        ]);
    }
}
