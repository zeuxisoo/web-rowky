var Elixir = require('laravel-elixir')
    liveReload = require('laravel-elixir-livereload'),
    webpack = require('webpack'),
    WebpackNotifierPlugin = require('webpack-notifier'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    del = require('del'),
    Q = require('q')
    path = require('path');

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
    .watch(config.get('assets.js.folder') + '/**/*.js')
    .watch(config.get('assets.js.folder') + '/**/*.scss')
    .watch(config.get('assets.js.folder') + '/**/*.html');
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
            resolve: {
                root: [path.join(__dirname, "bower_components")]
            },
            plugins: [
                new ExtractTextPlugin('app.scope.css', {
                    disable: false
                }),
                new webpack.ResolverPlugin(
                    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
                ),
                new WebpackNotifierPlugin(),
            ],
        })
        .scripts([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/foundation/js/foundation.js',
            'bower_components/toastr/toastr.js',
            'public/assets/app.js',
        ], 'public/assets/bundle.js', './')
        .sass('app.scss', 'public/assets/app.global.css')
        .styles([
            'bower_components/foundation/css/normalize.css',
            'bower_components/foundation/css/foundation.css',
            'bower_components/toastr/toastr.css',
            'bower_components/animate.css/animate.css',
            'public/assets/app.global.css',
            'public/assets/app.scope.css'
        ], 'public/assets/bundle.css', './')
        .version([
            'public/assets/bundle.css',
            'public/assets/bundle.js',
        ])
        // .clean([
        //     'public/assets',
        // ])
        .livereload()
});
