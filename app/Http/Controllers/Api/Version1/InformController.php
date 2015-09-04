<?php
namespace App\Http\Controllers\Api\Version1;

use App\Http\Controllers\Api\ApiController;
use App\Http\Requests\Api\Version1\InformRequest;
use App\Repositories\Version1\InformRepository;
use App\Transformers\Version1\InformTransformer;

class InformController extends ApiController {

    protected $informRepository;

    public function __construct(InformRepository $informRepository) {
        $this->informRepository = $informRepository;
    }

    public function create(InformRequest $request) {
        $input = $request->all();
        $inform = $this->informRepository->create($input);

        return $this->response->item($inform, new InformTransformer);
    }



}
