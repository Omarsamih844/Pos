<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class PrixModeVente extends Pivot
{
    use HasFactory;
    // Specify the name of the table
    protected $table = 'prix_mode_ventes';

    // Define the primary key
    protected $primaryKey = 'id_prix_mode_vente';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'id_produit',
        'id_mode_vente',
        'prix_vente',
        'prix_mode_vente_est_actif'
    ];

    public function produit(){
        return $this->belongsTo(Produit::class, 'id_produit');
    }

    public function modeVente(){
        return $this->belongsTo(ModeVente::class, 'id_mode_vente');
    }


}
