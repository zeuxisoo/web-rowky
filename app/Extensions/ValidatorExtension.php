<?php
namespace App\Extensions;

use Illuminate\Validation\Validator;
use Illuminate\Support\Facades\Input;

class ValidatorExtension extends Validator {

    public function validateGreaterThan($attribute, $value, $parameters) {
        $other = Input::get($parameters[0]);

        return isset($other) === true && intval($value) > intval($other);
    }

}
