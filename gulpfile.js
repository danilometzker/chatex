var elixir = require('laravel-elixir');

elixir(function(mix) {
  mix
    .sass('./web/assets/sass/chatex.scss', './web/public/assets/css/chatex.min.css')

    .babel('./web/assets/js/**/**.js', './web/public/assets/js/chatex.min.js')

    // Jquery
    .copy('./node_modules/jquery/dist/jquery.min.js', './web/public/assets/vendors/jquery')

    // Bootstrap
    .copy('./node_modules/bootstrap/dist/css/bootstrap.min.css', './web/public/assets/vendors/bootstrap/css/')
    .copy('./node_modules/bootstrap/dist/js/bootstrap.min.js', './web/public/assets/vendors/bootstrap/js/')

    // FontAwesome
    .copy('./node_modules/font-awesome/css/font-awesome.min.css', './web/public/assets/vendors/font-awesome/css/')
    .copy('./node_modules/font-awesome/fonts', './web/public/assets/vendors/font-awesome/fonts/')

    // Vue
    .copy('./node_modules/vue/dist/vue.min.js', './web/public/assets/vendors/vue/js')

    .browserSync({
      serveStatic: ['web'],
      notify: false,
      files: [
        './web/index.html',
        './web/public/assets/css/**/*.css',
        './web/public/assets/js/**/*.js'
      ]
    });
});