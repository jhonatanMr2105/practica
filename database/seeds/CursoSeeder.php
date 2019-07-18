<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cursos')->insert([
        'curso'=>'miskito',
        'descripcion'=>'aprende miskito'

        ]);

       DB::table('cursos')->insert([
        'curso'=>'zumo',
        'descripcion'=>'aprende zumo '

        ]);

        DB::table('cursos')->insert([
        'curso'=>'mayagna',
        'descripcion'=>'aprende mayagna '

        ]);
    }
}
