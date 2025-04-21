<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class CategorieImprimante extends Pivot
{
    // Specify the name of the table
    protected $table = 'categorie_imprimantes';

    // Define the primary key
    protected $primaryKey = 'id_categorie_imprimante';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'id_categorie',
        'id_imprimante',
        'type_imprimante'
    ];

    public function categorie(){
       return $this->belongsTo(Categorie::class, 'id_categorie');
    }

    public function imprimante(){
        return $this->belongsTo(Imprimante::class, 'id_imprimante');
    }
}
