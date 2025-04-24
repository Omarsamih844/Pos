<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PosController;
use App\Http\Controllers\TableController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Redirect root to login
Route::get('/', function () {
    return redirect()->route('login');
});

// After login, redirect to POS
Route::middleware(['auth', 'verified'])->group(function () {
    // Redirect dashboard to POS
    Route::get('/dashboard', function () {
        return redirect()->route('pos.index');
    })->name('dashboard');

    Route::get('/pos', [PosController::class, 'index'])->name('pos.index');
    Route::post('/pos/orders', [PosController::class, 'storeOrder'])->name('pos.orders.store');
    
    // Tables management routes
    Route::get('/tables', [TableController::class, 'index'])->name('tables.index');
    Route::patch('/tables/{table}/status', [TableController::class, 'updateStatus'])->name('tables.update.status');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});

require __DIR__.'/auth.php';
