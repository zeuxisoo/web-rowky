<?php
namespace App\Transformers\Version1;

use League\Fractal\TransformerAbstract;
use App\Models\Category;

class CategoryTransformer extends TransformerAbstract {

    public function transform(Category $category) {
        return [
            'id'   => $category->id,
            'name' => $category->name,
            'slug' => $category->slug,
        ];
    }

}
