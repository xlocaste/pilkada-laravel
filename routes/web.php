<?php

use App\Http\Controllers\Api\Partai\IndexController as PartaiIndexController;
use App\Http\Controllers\Api\Paslon\IndexController as PaslonIndexController;
use App\Http\Controllers\Api\Partai\StoreController as PartaiStoreController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('/partai')->name('partai.')->group(function () {
        Route::get('/', PartaiIndexController::class)->name('index');
        Route::get('/tambah', function () {
            return Inertia::render('Partai/Tambah');
        })->name('tambah');
        Route::post('/tambah', PartaiStoreController::class)->name('store');
    });

    Route::prefix('/paslon')->name('paslon.')->group(function () {
        Route::get('/', PaslonIndexController::class)->name('index');
    });
});

require __DIR__.'/auth.php';
