<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModeVente extends Model
{
    use HasFactory;
    // Specify the name of the table
    protected $table = 'mode_ventes';

    // Define the primary key
    protected $primaryKey = 'id_mode_vente';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'libelle_mode_vente'
    ];


    public function prixModeVentes(){
        return $this->hasMany(PrixModeVente::class, 'id_mode_vente');
    }

    public function produits(){
        return $this->belongsToMany(Produit::class, 'prix_mode_ventes', 'id_mode_vente', 'id_produit')
                    ->using(PrixModeVente::class) // Utilisation du modèle pivot
                    ->withPivot(
                        [
                            'id_prix_mode_vente',
                            'id_produit',
                            'id_mode_vente',
                            'prix_vente',
                            'prix_mode_vente_est_actif'
                        ]
        );
    }


}
