<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    // Specify the name of the table
    protected $table = 'roles';

    // Define the primary key
    protected $primaryKey = 'id_role';

    // Indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the attributes that are mass assignable (fillable)
    protected $fillable = [
        'designation_role'
    ];

    public function users(){
        return $this->hasMany(User::class, 'id_role', 'id_role');
    }
}
