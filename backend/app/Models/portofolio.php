<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class portofolio extends Model
{
    protected $fillable = [
        'nama_project',
        'deskripsi',
        'tech_stack',
        'type_project'
    ];
}
