<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use App\Models\Category;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $posts = Post::latest()
      ->with("user", "category")
      ->get();
    // $posts = Post::all();
    // dd($posts);

    return Inertia::render("Post/Index", [
      "posts" => $posts,
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    $user = Auth::user();
    if ($user->role_id === 2) {
      $category = Category::all();
    } else {
      $category = Category::where("id", "=", $user->category_id)->get();
    }
    return Inertia::render("Post/Create", [
      "category" => $category,
    ]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Http\Requests\StorePostRequest  $request
   * @return \Illuminate\Http\Response
   */
  public function store(StorePostRequest $request)
  {
    $request->validate([
      "title" => "required|string|max:255",
      // 'slug' => 'required|string|max:255',
      "content" => "required",
    ]);
    Post::create([
      "title" => $request->title,
      // 'slug' => Str::slug($request->slug),
      "content" => $request->content,
    ]);
    sleep(1);

    return redirect()
      ->route("dashboard.posts.index")
      ->with("message", "Post Created Successfully");
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Post  $post
   * @return \Illuminate\Http\Response
   */
  public function show(Post $post)
  {
    return Inertia::render("Post/Show", [
      "post" => $post,
      "category" => Category::where("id", "=", $post->category_id)->get(),
      "user" => User::where("id", "=", $post->user_id)->get(),
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Post  $post
   * @return \Illuminate\Http\Response
   */
  public function edit(Post $post)
  {
    return Inertia::render("Post/Edit", [
      "post" => $post,
      "category" => Category::all(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Http\Requests\UpdatePostRequest  $request
   * @param  \App\Models\Post  $post
   * @return \Illuminate\Http\Response
   */
  public function update(UpdatePostRequest $request, Post $post)
  {
    $request->validate([
      "title" => "required|string|max:255",
      // 'slug' => 'required|string|max:255',
      "content" => "required",
    ]);

    $post->title = $request->title;
    // $post->slug = Str::slug($request->slug);
    $post->content = $request->content;
    $post->save();
    sleep(1);

    return redirect()
      ->route("dashboard.posts.index")
      ->with("message", "Post Updated Successfully");
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Post  $post
   * @return \Illuminate\Http\Response
   */
  public function destroy(Post $post)
  {
    $post->delete();
    sleep(1);

    return redirect()
      ->route("dashboard.posts.index")
      ->with("message", "Post Delete Successfully");
  }
}
