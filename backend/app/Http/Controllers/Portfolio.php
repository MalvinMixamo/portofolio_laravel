<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\portofolio;

class Portfolio extends Controller
{
    public function all(){
        $project_all = portofolio::paginate(5);

        return response()->json([
            'message' => "data berhasil diambil",
            'project' => $project_all
        ]);
    }
    public function create(Request $request){
        $fields = $request->validate([
            'nama_project'=>'required|string',
            'deskripsi' => 'required|string',
            'tech_stack'=>'required|string',
            'type_project'=>'required|string'
        ]);
        $porto = portofolio::create([
            'nama_project' => $fields['nama_project'],
            'deskripsi' => $fields['deskripsi'],
            'tech_stack' => $fields['tech_stack'],
            'type_project' => $fields['type_project']
        ]);
        return response()->json([
            'message' => "Berhasil membuat porto!",
            "data" => $porto
        ]);
    }

    public function update(Request $request, $id){
        $porto = portofolio::findOrFail($id);
        $fields = $request->validate([
            'nama_project'=>'required|string',
            'deskripsi' => 'required|string',
            'tech_stack'=>'required|string',
            'type_project'=>'required|string'
        ]);

        $porto->update($fields);

        return response()->json([
        'message' => 'Portofolio berhasil diperbarui',
        'data'    => $porto
    ], 200);
    }
    public function delete(portofolio $porto){
        $porto->delete();

        return response()->json([
            'message'=> 'berhasil hapus'
        ]);
    }
}
