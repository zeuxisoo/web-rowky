<?php
namespace App\Http\Controllers\Api\Version1;

use App\Http\Controllers\Api\ApiController;

class InformController extends ApiController {

    public function create() {
        return $this->response->array([
            'message' => 'abc'
        ]);
    }

}
