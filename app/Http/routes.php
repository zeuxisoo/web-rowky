<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

$api = app('Dingo\Api\Routing\Router');

//
Route::get('/', ['as' => 'home.index', 'uses' => 'HomeController@index']);

//
$api->version('v1', function($api) {
    $api->group(['namespace' => 'App\Http\Controllers\Api\Version1', 'prefix' => 'inform'], function ($api) {
        $api->post('create', ['as' => 'api.inform.create', 'uses' => 'InformController@create']);
    });

    $api->group(['namespace' => 'App\Http\Controllers\Api\Version1', 'prefix' => 'category'], function ($api) {
        $api->get('all', ['as' => 'api.category.all', 'uses' => 'CategoryController@all']);
    });
});
