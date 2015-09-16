<?php
namespace App\Api\Version1\Repositories;

use App\Api\Version1\Bases\ApiRepository;
use App\Models\Category;

class CategoryRepository extends ApiRepository {

    public function __construct(Category $category) {
        $this->category = $category;
    }

    public function all() {
        return $this->category->all();
    }

    public function firstBySlug($slug) {
        return $this->category->where('slug', $slug)->first();
    }

}
