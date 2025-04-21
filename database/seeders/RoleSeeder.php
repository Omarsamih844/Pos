<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::insert([
            [
                'id_role' => 1,
                'designation_role' => 'administrateur'
            ],
            [
                'id_role' => 2,
                'designation_role' => 'caissier'
            ],
            [
                'id_role' => 3,
                'designation_role' => 'serveur'
            ],
        ]);
    }
}
