var elixir = require('laravel-elixir'),
    clean = require('laravel-elixir-clean')
    gulp = require('gulp');

elixir(function(mix) {
    // Clean
    mix.clean([
        'public/assets',
        'public/build',
    ]);

    // CSS
    mix
        .sass('app.scss', 'public/assets/css/app.css')
        .styles([
            'node_modules/materialize-css/bin/materialize.css',
            'public/assets/css/app.css'
        ], 'public/assets/css/bundle.css', './');

    // JS
    mix
        .browserify([
            'app.js'
        ], 'public/assets/js/app.js')
        .scripts([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/materialize-css/bin/materialize.js',
            'public/assets/js/app.js',
        ], 'public/assets/js/bundle.js', './');;

    // Version
    mix
        .version([
            'public/assets/css/bundle.css',
            'public/assets/js/bundle.js',
        ]);

    // Fonts
    mix.copy('node_modules/materialize-css/font', 'public/build/assets/font')
});
