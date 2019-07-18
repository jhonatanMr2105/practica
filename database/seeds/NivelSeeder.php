<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class NivelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $curso1= DB::table('cursos')->select('id')->take(1)->get();

        DB::table('niveles')->insert([
'nivel'=> 'Principiante',
'descripcion'=> 'Principiante',
'curso_id'=> $curso1[0]->id
]);

DB::table('niveles')->insert([
'nivel'=> 'Basico',
'descripcion'=> 'Basico',
'curso_id'=> $curso1[0] ->id
]);

DB::table('niveles')->insert([
'nivel'=> 'Avanzado',
'descripcion'=> 'Avanzado',
'curso_id'=> $curso1[0] ->id
]);

$curso2= DB::table('cursos')->select('id')->take(2)->get();


DB::table('niveles')->insert([
'nivel'=> 'Principiante',
'descripcion'=> 'Principiante',
'curso_id'=> $curso2[1]->id
]);

DB::table('niveles')->insert([
'nivel'=> 'Basico',
'descripcion'=> 'Basico',
'curso_id'=> $curso2[1] ->id
]);

DB::table('niveles')->insert([
'nivel'=> 'Avanzado',
'descripcion'=> 'Avanzado',
'curso_id'=> $curso2[1] ->id
]);

$curso3= DB::table('cursos')->select('id')->take(3)->get();


DB::table('niveles')->insert([
'nivel'=> 'Principiante',
'descripcion'=> 'Principiante',
'curso_id'=> $curso3[2]->id
]);

DB::table('niveles')->insert([
'nivel'=> 'Basico',
'descripcion'=> 'Basico',
'curso_id'=> $curso3[2] ->id
]);

DB::table('niveles')->insert([
'nivel'=> 'Avanzado',
'descripcion'=> 'Avanzado',
'curso_id'=> $curso3[2] ->id
]);
    }
}
