<?php
namespace App\Api\Version1\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Inform;

class InformTransformer extends TransformerAbstract {

    public function transform(Inform $inform) {
        return [
            'job_title'     => $inform->job_title,
            'category'      => $inform->category,
            'min_salary'    => $inform->min_salary,
            'max_salary'    => $inform->max_salary,
            'location'      => $inform->location,
            'description'   => $inform->description,
            'how_to_apply'  => $inform->how_to_apply,
            'company_name'  => $inform->company_name,
            'website_url'   => $inform->website_url,
            'contact_email' => $inform->contact_email,
        ];
    }

}
