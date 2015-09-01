<?php
namespace App\Http\Controllers\Api\Version1;

use App\Http\Controllers\Api\ApiController;
use App\Http\Requests\Api\Version1\InformRequest;

class InformController extends ApiController {

    public function create(InformRequest $request) {
        $input = $request->all();

        return $this->response->array([
            'message' => 'Inform created'
        ]);
    }



}
