<?php
namespace App\Api\Version1\Repositories;

use App\Api\Version1\Bases\ApiRepository;
use App\Models\Inform;

class InformRepository extends ApiRepository {

    public function __construct(Inform $inform) {
        $this->inform = $inform;
    }

    public function create($input) {
        return (new $this->inform)->create($input);
    }

}
