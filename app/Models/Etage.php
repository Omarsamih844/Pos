<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etage extends Model
{
    use HasFactory;

    // Specify the name of the table
    protected $table = 'etages';

    // Define the primary key
    protected $primaryKey = 'id_etage';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'libelle_etage'
    ];

    public function tables()
    {
        return $this->hasMany(Table::class, 'id_etage', 'id_etage');
    }
}
