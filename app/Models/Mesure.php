<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mesure extends Model
{
    use HasFactory;

    // Specify the name of the table
    protected $table = 'mesures';

    // Define the primary key
    protected $primaryKey = 'id_mesure';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'libelle_mesure',
        'categorie_mesure',
        'valeur_mesure'
    ];

    public function categories(){
        return $this->hasMany(Categorie::class, 'id_mesure');
    }
}
