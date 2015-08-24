var Elixir = require('laravel-elixir'),
    webpack = require('webpack'),
    WebpackNotifierPlugin = require('webpack-notifier'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    del = require('del'),
    Q = require('q');

var Task = Elixir.Task;

Elixir.extend('clean', function(options) {
    new Task('clean', function() {
        return del(options);
    });
});

Elixir.extend('webpack', function(options) {
    new Task('webpack', function() {
        var deferred = Q.defer();

        gulp.task('webpack', function(callback) {
            webpack(options, function(err, stats) {
                if (err) {
                    deferred.reject(callback());

                    throw new gutil.PluginError("webpack", err);
                }else{
                    gutil.log("[Webpack]", stats.toString({
                        colors: gutil.colors.supportsColor,
                        // hash: false,
                        // timings: false,
                        // chunks: false,
                        // chunkModules: false,
                        // modules: false,
                        // children: true,
                        // version: true,
                        // cached: false,
                        // cachedAssets: false,
                        // reasons: false,
                        // source: false,
                        // errorDetails: false
                    }));

                    deferred.resolve(callback());
                }
            })
        });

        return deferred.promise;
    })
    .watch(config.get('assets.js.folder') + '/**/*.js');
});


Elixir(function(mix) {
    mix
        .clean([
            'public/assets',
            'public/build',
        ])
        .webpack({
            entry: [
                './resources/assets/js/app.js',
            ],
            output: {
                path      : __dirname + '/public/assets',
                publicPath: '/build/',
                filename  : "app.js",
            },
            devtool: "#source-map",
            module: {
                loaders: [{
                    test  : /\.scss$/,
                    loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
                }, {
                    test  : /\.html$/,
                    loader: "html"
                }]
            },
            plugins: [
                new ExtractTextPlugin('app.scope.css', {
                    disable: false
                }),
                new WebpackNotifierPlugin(),
            ]
        })
        .scripts([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/materialize-css/bin/materialize.js',
            'public/assets/app.js',
        ], 'public/assets/bundle.js', './')
        .sass('app.scss', 'public/assets/app.global.css')
        .styles([
            'node_modules/materialize-css/bin/materialize.css',
            'public/assets/app.global.css',
            'public/assets/app.scope.css'
        ], 'public/assets/bundle.css', './')
        .version([
            'public/assets/bundle.css',
            'public/assets/bundle.js',
        ])
        .copy(
            'node_modules/materialize-css/font',
            'public/build/font'
        )
        // .clean([
        //     'public/assets',
        // ]);
});
