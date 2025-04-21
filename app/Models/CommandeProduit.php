<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommandeProduit extends Model
{
    use HasFactory;

    // Specify the name of the table
    protected $table = 'commande_produits';

    // Define the primary key
    protected $primaryKey = 'id_commande_produit';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'id_commande',
        'id_produit',
        'quantite_produit_commande',
        'prix_commande_produit',
        'tva_commande_produit',
        'total_ttc_commande_produit',
        'date_commande_produit',
        'heure_commande_produit',
        'note_information_commande_produit'
    ];

    public function commande()
    {
        return $this->belongsTo(Commande::class, 'id_commande', 'id_commande');
    }

    public function produit()
    {
        return $this->belongsTo(Produit::class, 'id_produit', 'id_produit');
    }

}
