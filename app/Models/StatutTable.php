<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatutTable extends Model
{
    use HasFactory;

    // Specify the name of the table
    protected $table = 'statut_tables';

    // Define the primary key
    protected $primaryKey = 'id_table_statut';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'libelle_statut_table',
        'couleur_statut_table'
    ];

    public function tables()
    {
        return $this->hasMany(Table::class, 'id_statut_table', 'id_statut_table');
    }
}
