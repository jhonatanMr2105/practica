<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lengua extends Model
{
    protected $table = 'lenguas';

     public function cursos()
     {
         return $this->hasMany( Curso::class);
     }
}
