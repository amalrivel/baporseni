<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition()
  {
    return [
      "title" => $this->faker->sentence(mt_rand(2, 8)),
      "slug" => $this->faker->slug(),
      "excerpt" => $this->faker->paragraph(),
      "body" =>
        "<p>" .
        implode("</p><p>", $this->faker->paragraphs(mt_rand(5, 10))) .
        "</p>",
      // 'body' => collect($this->faker->paragraphs(mt_rand(5, 10)))
      //     ->map(fn ($p) => "<p>$p</p>")
      //     ->implode(''),
      // 'body' => '<script>alert("haha");</script>',
      "image" => "https://picsum.photos/" . strval(mt_rand(1000, 2000)),
      "is_delete" => $this->faker->boolean(),
      "at_carousel" => $this->faker->boolean(),
      "user_id" => mt_rand(1, 10),
      "category_id" => mt_rand(1, 20),
    ];
  }
}
