<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Models\Post;
use App\Models\Category;
use App\Models\User;

use Inertia\Inertia;

class HomeController extends Controller
{
  public function beranda()
  {
    $carousel = Post::latest()
      ->with("category")
      ->where("at_carousel", 1)
      ->where("is_delete", 0)
      ->get();

    $posts = Post::latest()
      ->with("category")
      ->where("is_delete", 0)
      ->take(5)
      ->get();

    $categories = Category::all();

    return Inertia::render("Home", [
      "laravelVersion" => Application::VERSION,
      "phpVersion" => PHP_VERSION,
      "carousel" => $carousel,
      "posts" => $posts,
      "categories" => $categories,
    ]);
  }

  public function profil()
  {
    return Inertia::render("Profil", []);
  }
  public function cabang()
  {
    $categories = Category::all();

    return Inertia::render("CabangKegiatan", [
      "categories" => $categories,
    ]);
  }
  public function artikel()
  {
    $posts = Post::latest()
      ->with("category")
      ->where("is_delete", 0)->paginate(9)
      ;

    return Inertia::render("Artikel", [
      "posts" => $posts,
    ]);
  }
}
