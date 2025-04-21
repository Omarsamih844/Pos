<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;
     // Specify the name of the table
     protected $table = 'categories';

     // Define the primary key
     protected $primaryKey = 'id_categorie';

     // Indicate if the primary key is auto-incrementing
     public $incrementing = true;

     // Specify the attributes that are mass assignable (fillable)
     protected $fillable = [
         'libelle_categorie',
         'abrege_classement_categorie',
         'exclure_categorie_chiffre_affaires',
         'image_categorie',
         'couleur_categorie',
         'categorie_est_activee',
         'id_mesure',
         'id_taxe',
         'sous_categories_associees_categories'
     ];

     public function produits(){
        return $this->hasMany(Produit::class, 'id_categorie');
     }

     public function mesure(){
         return $this->belongsTo(Mesure::class, 'id_mesure');
     }

     public function imprimantes(){
        return $this->belongsToMany(Imprimante::class, 'categorie_imprimantes', 'id_categorie', 'id_imprimante')
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
        return $this->hasMany(CategorieImprimante::class, 'id_categorie');
    }

    public function taxe(){
        return $this->belongsTo(Taxe::class, 'id_taxe');
    }

     // Define the children relationship (one-to-many)
     public function children()
     {
         return $this->hasMany(Categorie::class, 'sous_categories_associees_categories', 'id_categorie');
     }

     // Define the parent relationship (inverse many-to-one)
     public function parent()
     {
         return $this->belongsTo(Categorie::class, 'sous_categories_associees_categories', 'id_categorie');
     }
}
