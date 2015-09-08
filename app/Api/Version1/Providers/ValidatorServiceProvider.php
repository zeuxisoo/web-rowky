<?php
namespace App\Api\Version1\Providers;

use Illuminate\Support\ServiceProvider;
use App\Api\Version1\Extensions\ValidatorExtension;

class ValidatorServiceProvider extends ServiceProvider {

    public function boot() {
        $this->app['validator']->resolver(function ($translator, $data, $rules, $messages) {
            return new ValidatorExtension($translator, $data, $rules, $messages);
        });
    }

    public function register() {
    }

}
