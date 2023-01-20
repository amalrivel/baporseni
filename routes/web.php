<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/", function () {
  return Inertia::render("Home", [
    "laravelVersion" => Application::VERSION,
    "phpVersion" => PHP_VERSION,
  ]);
});

Route::get("/profil", function () {
  return Inertia::render("Profil", [
    "laravelVersion" => Application::VERSION,
    "phpVersion" => PHP_VERSION,
  ]);
})->name("profil");

Route::get("/cabang", function () {
  return Inertia::render("CabangKegiatan", [
    "laravelVersion" => Application::VERSION,
    "phpVersion" => PHP_VERSION,
  ]);
})->name("cabangKegiatan");

Route::get("/artikel", function () {
  return Inertia::render("Artikel", [
    "laravelVersion" => Application::VERSION,
    "phpVersion" => PHP_VERSION,
  ]);
})->name("artikel");

Route::get("/kontak", function () {
  return Inertia::render("Kontak", [
    "laravelVersion" => Application::VERSION,
    "phpVersion" => PHP_VERSION,
  ]);
})->name("kontak");

Route::get("/dashboard", function () {
  return Inertia::render("Dashboard");
})
  ->middleware(["auth", "verified"])
  ->name("dashboard");

Route::resource("/dashboard/posts", PostController::class, [
  "as" => "dashboard",
])->middleware(["auth", "verified"]);

Route::middleware("auth")->group(function () {
  Route::get("/profile", [ProfileController::class, "edit"])->name(
    "profile.edit"
  );
  Route::patch("/profile", [ProfileController::class, "update"])->name(
    "profile.update"
  );
  Route::delete("/profile", [ProfileController::class, "destroy"])->name(
    "profile.destroy"
  );
});

require __DIR__ . "/auth.php";
