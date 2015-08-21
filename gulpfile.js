var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
        .sass([
            'app.scss'
        ], 'public/assets/css/bundle.css')
        .babel([
            'app.js'
        ], 'public/assets/js/bundle.js')
        .version([
            'public/assets/css/bundle.css',
            'public/assets/js/bundle.js',
        ]);
});
