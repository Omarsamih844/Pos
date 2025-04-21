<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imprimante extends Model
{
    use HasFactory;

    // Specify the name of the table
    protected $table = 'imprimantes';

    // Define the primary key
    protected $primaryKey = 'id_imprimante';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'nom_imprimante'
    ];

    public function categories(){
        return $this->belongsToMany(Categorie::class, 'categorie_imprimantes', 'id_imprimante', 'id_categorie')
                    ->using(CategorieImprimante::class) // Utilisation du modèle pivot
                    ->withPivot(
                        [
                            'id_categorie_imprimante',
                            'id_categorie',
                            'id_imprimante',
                            'type_imprimante'
                        ]
                    );
    }

    public function categoriesImprimantes(){
        return $this->hasMany(CategorieImprimante::class, 'id_imprimante');
    }

}
