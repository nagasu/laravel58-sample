const mix = require('laravel-mix')
const webpackConfig = require('./webpack.config')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
.sass('resources/sass/app.scss', 'public/css')
.extract([
    'axios',
    'lodash',
    'bootstrap',
    'jquery'
])

mix.options({
    polyfills: [
        'Promise'
    ]
})

if (mix.inProduction()) {
    mix.version()
} else {
    mix.sourceMaps()
    mix.browserSync({
        proxy: process.env.APP_URL
    })
}

mix.disableNotifications()

