<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
  use HasFactory;
  protected $guarded = ["id", "timestamps"];

  public function category()
  {
    return $this->hasMany(Category::class);
  }
}
