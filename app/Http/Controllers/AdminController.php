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
      ->where("is_delete", 0)
      ->get();

    return Inertia::render("Dashboard", [
      "posts" => $posts,
      "status" => session("status"),
    ]);
  }


}
