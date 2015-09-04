<?php
namespace App\Repositories\Version1;

use App\Repositories\BaseRepository;
use App\Models\Inform;

class InformRepository extends BaseRepository {

    public function __construct(Inform $inform) {
        $this->inform = $inform;
    }

    public function create($input) {
        return (new $this->inform)->create($input);
    }

}
