<?php

namespace App\Http\Controllers\Api\Paslon;

use App\Http\Controllers\Controller;
use App\Models\Paslon;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function __invoke()
    {
        $daftarPaslon = Paslon::all();

        return Inertia::render('Paslon/List', [
            'paslon' => $daftarPaslon
        ]);
    }
}
