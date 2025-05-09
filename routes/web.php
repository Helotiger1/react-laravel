<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('page/home', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/page/collections', function () {
    return Inertia::render('collections');
});

Route::get('/page/unsplashbox', function () {
    return Inertia::render('unsplashBox');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
