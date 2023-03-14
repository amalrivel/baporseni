<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
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

Route::get("/", [HomeController::class, "beranda"]);
Route::get("/profil", [HomeController::class, "profil"])->name("profil");
Route::get("/cabang", [HomeController::class, "cabang"])->name(
    "cabangKegiatan"
);
Route::get("/artikel", [HomeController::class, "artikel"])->name("artikel");

Route::get("/kontak", function () {
    return Inertia::render("Kontak", [
        "laravelVersion" => Application::VERSION,
        "phpVersion" => PHP_VERSION,
    ]);
})->name("kontak");

// Route::get("/dashboard", function () {
//   return Inertia::render("Dashboard");
// })
//   ->middleware(["auth", "verified"])
//   ->name("dashboard");

Route::get("/dashboard", [AdminController::class, "dashboard"])->name("dashboard");

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
