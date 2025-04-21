<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    // Specify the name of the table
    protected $table = 'stocks';

    // Define the primary key
    protected $primaryKey = 'id_stock';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'id_produit',
        'quantite_entree_stock',
        'quantite_sortie_stock',
        'quantite_actuelle_stock',
        'quantite_minimum_stock',
    ];

    public function produit()
    {
        return $this->belongsTo(Produit::class, 'id_produit', 'id_produit');
    }
}
