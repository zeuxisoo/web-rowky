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

Route::get('/', ['as' => 'home.index', 'uses' => 'HomeController@index']);

Route::post('api/inform/create', function() {
    // return response()->json([
    //     'message' => 'This is a test message'
    // ]);

    return response()->json([
        'message' => 'This is a test error reason'
    ])->setStatusCode(400);
});
