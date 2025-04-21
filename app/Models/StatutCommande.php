<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatutCommande extends Model
{
    use HasFactory;

    // Specify the name of the table
    protected $table = 'statut_commandes';

    // Define the primary key
    protected $primaryKey = 'id_statut_commande';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'libelle_statut_commande',
        'couleur_statut_commande'
    ];

    public function commandes()
    {
        return $this->hasMany(Commande::class, 'id_statut_commande', 'id_statut_commande');
    }

}
