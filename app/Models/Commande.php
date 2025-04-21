<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;

    // Specify the name of the table
    protected $table = 'commandes';

    // Define the primary key
    protected $primaryKey = 'id_commande';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'numero_commande',
        'montant_total_ttc',
        'id_mode_vente',
        'id_statut_commande'
    ];

    public function modeVente()
    {
        return $this->belongsTo(ModeVente::class, 'id_mode_vente', 'id_mode_vente');
    }

    public function statutCommande()
    {
        return $this->belongsTo(StatutCommande::class, 'id_statut_commande', 'id_statut_commande');
    }

    public function produits()
    {
        return $this->belongsToMany(Produit::class, 'commande_produits', 'id_commande', 'id_produit')
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
