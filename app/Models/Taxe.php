<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Taxe extends Model
{
    use HasFactory;

    // Specify the name of the table
    protected $table = 'taxes';

    // Define the primary key
    protected $primaryKey = 'id_taxe';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'libelle_taxe',
        'valeur_taxe'
    ];

    public function categories(){
        return $this->hasMany(Categorie::class, 'id_taxe');
    }
}
