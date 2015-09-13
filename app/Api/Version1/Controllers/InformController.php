<?php
namespace App\Api\Version1\Controllers;

use App\Api\Version1\Bases\ApiController;
use App\Api\Version1\Requests\InformRequest;
use App\Api\Version1\Repositories\InformRepository;
use App\Api\Version1\Transformers\InformTransformer;

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

    public function all() {
        $informs = $this->informRepository->all();

        return $this->response->paginator($informs, new InformTransformer);
    }

    public function show($id) {
        $inform = $this->informRepository->find($id);

        return $this->response->item($inform, new InformTransformer);
    }

}
