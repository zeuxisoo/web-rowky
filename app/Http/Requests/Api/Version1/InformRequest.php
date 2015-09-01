<?php
namespace App\Http\Requests\Api\Version1;

use Illuminate\Contracts\Validation\Validator;
use App\Http\Requests\Request;

class InformRequest extends Request {

    public function authorize() {
        return true;
    }

    public function rules() {
        return [
            'jobTitle'     => 'required',
            'category'     => 'required|integer|min:1|max:3',
            'salaryMin'    => 'required|integer|min:1',
            'salaryMax'    => 'required|integer|max:999999',
            'location'     => 'required',
            'description'  => 'required',
            'howToApply'   => 'required',
            'companyName'  => 'required',
            'websiteURL'   => 'required|url',
            'contactEmail' => 'required|email',
        ];
    }

    public function messages() {
        return [
            'category.required' => 'The category must be selected',
            'category.integer'  => 'The category must be selected',
            'category.min'      => 'The category must be selected',
            'category.max'      => 'The category must be selected'
        ];
    }

}
