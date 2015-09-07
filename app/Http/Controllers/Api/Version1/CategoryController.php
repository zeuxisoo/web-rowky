<?php
namespace App\Http\Controllers\Api\Version1;

use App\Http\Controllers\Api\ApiController;
use App\Repositories\Version1\CategoryRepository;
use App\Transformers\Version1\CategoryTransformer;

class CategoryController extends ApiController {

    protected $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository) {
        $this->categoryRepository = $categoryRepository;
    }

    public function all() {
        $catgories = $this->categoryRepository->all();

        return $this->response->collection($catgories, new CategoryTransformer);
    }



}
