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
    public function index()
    {
        $carousel = Post::latest()
            ->with("category")
            ->where("at_carousel", 1)

            ->get();

        $posts = Post::latest()
            ->with("category")

            ->take(5)
            ->get();

        $categories = Category::all();

        return Inertia::render("Index", [
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
            ->paginate(9);

        return Inertia::render("Artikel", [
            "posts" => $posts,
        ]);
    }

    public function kontak()
    {
        return Inertia::render("Kontak", []);
    }
}
