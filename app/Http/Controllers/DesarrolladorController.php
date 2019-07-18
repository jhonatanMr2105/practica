<?php

namespace App\Http\Controllers;

use App\Desarrollador;
use Illuminate\Http\Request;

class DesarrolladorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $qs = Desarrollador::all();
      return $qs;
    }


    public function create()
    {
        return view('desarrolladores.creardesarrollador');
    }

    public function store(Request $request)
    {
        $desarrollador= new Desarrollador();
        $desarrollador->nombres =$request['nombres'];
        $desarrollador->apellidos =$request['apellidos'];
        $desarrollador->email =$request['email'];
        $desarrollador->telefono =$request['telefono'];
        $desarrollador->save();

        return redirect('desarrolladores/lista');
    }


    public function show(Desarrollador $desarrollador)
    {
         return $desarrollador;
    }

    public function edit(Desarrollador $desarrollador)
    {
        return view('desarrolladores.editardesarrollador',['desarrollador' => $desarrollador]);
    }


    public function update(Request $request, Desarrollador $desarrollador)
    {
        $desarrollador->nombres=$request['nombres'];
        $desarrollador->apellidos=$request['apellidos'];
        $desarrollador->email=$request['email'];
        $desarrollador->telefono=$request['telefono'];
        $desarrollador->save();

        return redirect('desarrolladores/lista');
    }


    public function destroy(Desarrollador $desarrollador)
     {
     $desarrollador->delete();
     return redirect('desarrollador/lista');
    }

    public function list()
    {
        $rs = $this->index();
        return view('desarrolladores.listadesarrollador',['rs'=> $rs]);
    }
}
