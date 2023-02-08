<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition()
  {
    $faker = Faker::create("ja_JP");
    return [
      "name" => $faker->kanaName,
      "r" => mt_rand(0, 255),
      "g" => mt_rand(0, 255),
      "b" => mt_rand(0, 255),
      "a" => mt_rand(0, 100) / 300,
      "image" => "https://picsum.photos/" . strval(mt_rand(1000, 2000)),
    ];
  }
}
