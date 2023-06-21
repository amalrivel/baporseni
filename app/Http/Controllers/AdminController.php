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

class AdminController extends Controller
{
  public function dashboard()
  {
    $posts = Post::latest()
      ->with("category")
      ->where("at_carousel", 1)
      ->get();

    return Inertia::render("Dashboard/Index", [
      "posts" => $posts,
      "status" => session("status"),
      "laravelVersion" => Application::VERSION,
      "phpVersion" => PHP_VERSION,
      "name" => config("app.name"),
      "version" => config("app.version"),
      "description" => config("app.description"),
      "url" => config("app.url"),
      "timezone" => config("app.timezone"),
      "locale" => config("app.locale"),
    ]);
  }
}
