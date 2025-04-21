<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    use HasFactory;
    // Specify the name of the table
    protected $table = 'produits';

    // Define the primary key
    protected $primaryKey = 'id_produit';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'code_produit_automatique',
        'libelle_produit',
        'image_produit',
        'code_barre_produit',
        'produit_est_actif',
        'id_categorie'
    ];

    public function categorie(){
        return $this->belongsTo(Categorie::class, 'id_categorie');
    }

    public function prixModeVentes(){
        return $this->hasMany(PrixModeVente::class, 'id_produit');
    }

    public function modeVentes(){
        return $this->belongsToMany(ModeVente::class, 'prix_mode_ventes', 'id_produit', 'id_mode_vente')
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

    public function stocks()
    {
        return $this->hasMany(Stock::class, 'id_produit', 'id_produit');
    }

    public function commandes(){
        return $this->belongsToMany(Commande::class, 'commande_produits', 'id_produit', 'id_commande')
                    ->using(CommandeProduit::class) // Utilisation du modèle pivot
                    ->withPivot(
                        [
                            'id_commande_produit',
                            'id_commande',
                            'id_produit',
                            'quantite_produit_commande',
                            'prix_commande_produit',
                            'tva_commande_produit',
                            'total_ttc_commande_produit',
                            'date_commande_produit',
                            'heure_commande_produit',
                            'note_information_commande_produit'
                        ]
        );
    }

}
