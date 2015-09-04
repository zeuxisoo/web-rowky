<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inform extends Model {

    use SoftDeletes;

    protected $table = 'inform';

    protected $dates = ['deleted_at'];

    protected $fillable = ['job_title', 'category', 'min_salary', 'max_salary', 'location', 'description', 'how_to_apply', 'company_name', 'website_url', 'contact_email'];

}
