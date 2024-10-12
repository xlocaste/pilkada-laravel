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
        $path = null;

        if ($request->hasFile('image')) {

            $path = $request->file('image')->store('images/partai', 'public');
        }

        $partai = Partai::create(attributes:[
            'nama' => $request -> nama,
            'image' => $path
        ]);

        return Inertia::render('Partai/Tambah', [
            'partai' => $partai
        ]);
    }
}
