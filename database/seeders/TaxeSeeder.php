<?php

namespace Database\Seeders;

use App\Models\Taxe;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaxeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Taxe::insert([
            [
                'libelle_taxe' => 'TAUX NORMAL',
                'valeur_taxe' => 20,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX REDUIT',
                'valeur_taxe' => 10,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX REDUIT 2',
                'valeur_taxe' => 5.5,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX PARTICULIER',
                'valeur_taxe' => 2.1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX ZERO',
                'valeur_taxe' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX NORMAL -1',
                'valeur_taxe' => 20,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX REDUIT -1',
                'valeur_taxe' => 10,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX REDUIT 2 -1',
                'valeur_taxe' => 5.5,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX PARTICULIER -1',
                'valeur_taxe' => 2.1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX ZERO -1',
                'valeur_taxe' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX NORMAL -2',
                'valeur_taxe' => 20,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX REDUIT -2',
                'valeur_taxe' => 10,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX REDUIT 2 -2',
                'valeur_taxe' => 5.5,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX PARTICULIER -2',
                'valeur_taxe' => 2.1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'libelle_taxe' => 'TAUX ZERO -2',
                'valeur_taxe' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
        ]);
    }
}
