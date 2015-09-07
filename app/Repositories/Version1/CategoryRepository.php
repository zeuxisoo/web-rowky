<?php
namespace App\Repositories\Version1;

use App\Repositories\BaseRepository;
use App\Models\Category;

class CategoryRepository extends BaseRepository {

    public function __construct(Category $category) {
        $this->category = $category;
    }

    public function all() {
        return $this->category->all();
    }

}
