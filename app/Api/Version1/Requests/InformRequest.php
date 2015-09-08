<?php
namespace App\Api\Version1\Requests;

use Illuminate\Contracts\Validation\Validator;
use App\Api\Version1\Bases\ApiRequest;

class InformRequest extends ApiRequest {

    public function authorize() {
        return true;
    }

    public function rules() {
        return [
            'job_title'     => 'required',
            'category'      => 'required|integer|min:1|max:3',
            'min_salary'    => 'required|integer|min:1',
            'max_salary'    => 'required|integer|greater_than:min_salary|max:999999',
            'location'      => 'required',
            'description'   => 'required',
            'how_to_apply'  => 'required',
            'company_name'  => 'required',
            'website_url'   => 'required|url',
            'contact_email' => 'required|email',
        ];
    }

    public function messages() {
        return [
            'category.required'       => 'The category must be selected',
            'category.integer'        => 'The category must be selected',
            'category.min'            => 'The category must be selected',
            'category.max'            => 'The category must be selected',
            'max_salary.greater_than' => 'The max salary must greater than min salary',
        ];
    }

}
