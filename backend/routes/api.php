<?php

use App\Http\Controllers\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/project', [Portfolio::class, 'all']);
Route::put('/project/{id}', [Portfolio::class, 'update']);
Route::delete('/project/{porto}', [Portfolio::class, 'delete']);
Route::post('/project', [Portfolio::class, 'create']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
