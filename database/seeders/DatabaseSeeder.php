<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            TaxeSeeder::class,
            CategorieSeeder::class,
            ImprimanteSeeder::class,
            CategorieImprimanteSeeder::class,
            ModeVenteSeeder::class,
            ProduitSeeder::class,
            PrixModeVenteSeeder::class,
            StatutTableSeeder::class,
            StatutCommandeSeeder::class,
        ]);
    }
}
