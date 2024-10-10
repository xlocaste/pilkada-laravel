<?php

namespace App\Http\Controllers\Api\Partai;

use App\Http\Controllers\Controller;
use App\Models\Partai;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function __invoke()
    {
        $partai = Partai::select([
            'id',
            'nama',
            'image',
        ])->paginated(10);

        return Inertia::render('Partai/List', [
            'partai' => $partai
        ]);
    }
}
