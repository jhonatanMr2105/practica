<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


// C U R S O S

        Route::get('cursos/editar/{curso}', 'CursoController@edit');
        Route::get('cursos/lista', 'CursoController@list');
        Route::get('cursos/crear', 'CursoController@create');
        Route::get('cursos', 'CursoController@index');
        // Route::get('cursos/show/{curso}', 'CursoController@show');
        Route::get('cursos/{curso}', 'CursoController@show'); //cambiamos curso por la variable (qs) que asignamos en show
        Route::post('cursos', 'CursoController@store');
        Route::patch('cursos/{curso}', 'CursoController@update');
        Route::delete('cursos/{curso}', 'CursoController@destroy');

        // NIVELES.

        Route::get('niveles/editar/{nivel}', 'NivelController@edit');
        Route::get('niveles/lista', 'NivelController@list');
        Route::get('niveles', 'NivelController@index1');
        Route::get('niveles/crear', 'NivelController@create');
        Route::get('niveles/{nivel}', 'NivelController@show');
        Route::post('niveles', 'NivelController@store');
        Route::patch('niveles/{nivel}', 'NivelController@update');
        Route::delete('niveles/{nivel}', 'NivelController@destroy');
