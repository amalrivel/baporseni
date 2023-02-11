<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Category extends Model
{
  use HasFactory;
  protected $guarded = ["id", "timestamps"];

  public function user()
  {
    return $this->hasMany(User::class);
  }
  public function post()
  {
    return $this->hasMany(Post::class);
  }
  protected function color1(): Attribute
  {
    return Attribute::make(
      get: fn($value) => json_decode($value, true),
      set: fn($value) => json_encode($value)
    );
  }
  protected function color2(): Attribute
  {
    return Attribute::make(
      get: fn($value) => json_decode($value, true),
      set: fn($value) => json_encode($value)
    );
  }

  public function getRouteKeyName()
  {
    return "name";
  }
}
