<?php

namespace App\Http\Controllers;

use App\Curso;
use Illuminate\Http\Request;
use App\Niveles;
class CursoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $qs = Curso::with([
            'niveles',

        ])->get();
         return $qs;         //js estructura relacionada en la base de datos en un servidor  que este conetado a una base de datos

    }

    public function create()
    {
      return view('cursos.crearcurso');
    }

    public function store(Request $request)
    {
        $curso=new Curso();
        $curso->curso=$request['curso'];
        $curso->descripcion=$request['descripcion'];

        $curso->save();
        return redirect("cursos/lista");
    }


    public function show(Curso $curso) //rempazamos la variable $curso por $qs, o simplemente cambia  A $qs por la variable $curso que tiene por defecto el show
    {
        $curso->load([

            'niveles',
        ]);
        return $curso;
    }



    public function edit(Curso $curso)
    {
        return view('cursos.editarcurso', ['curso'=>$curso] );
    }


    public function update(Request $request, Curso $curso)
    {
      $curso->curso = $request['curso'];
        $curso->descripcion = $request['descripcion'];
        $curso->save();

        return redirect('cursos/lista');
    }


    public function destroy(Curso $curso)
    {
        $curso->delete();
        return redirect('cursos/lista');
    }

    public function list()
    {
        $rs = $this->index();
        return view('cursos.listacurso', ['rs' => $rs]);
    }
}
