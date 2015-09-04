<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInformTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inform', function (Blueprint $table) {
            $table->increments('id');
            $table->string('job_title', 80);
            $table->tinyInteger('category');
            $table->mediumInteger('min_salary');
            $table->mediumInteger('max_salary');
            $table->text('location');
            $table->text('description');
            $table->text('how_to_apply');
            $table->string('company_name', 120);
            $table->string('website_url', 120);
            $table->string('contact_email', 180);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('inform');
    }
}
