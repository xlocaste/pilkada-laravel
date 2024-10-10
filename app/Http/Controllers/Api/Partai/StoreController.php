<?php

namespace App\Http\Controllers\Api\Partai;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Partai\StoreRequest;
use App\Models\Partai;
use Inertia\Inertia;
use Inertia\Response;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request): Response
    {
        $partai = Partai::create(attributes:[
            'nama' => $request -> nama,
            'image' => $request -> image,
        ]);

        return Inertia::render('Partai/Tambah', [
            'partai' => $partai
        ]);
    }
}
