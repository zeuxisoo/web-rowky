<?php
namespace App\Api\Version1\Controllers;

use App\Api\Version1\Bases\ApiController;
use App\Api\Version1\Repositories\CategoryRepository;
use App\Api\Version1\Transformers\CategoryTransformer;

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
