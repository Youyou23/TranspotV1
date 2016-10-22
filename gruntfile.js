module.exports = function(grunt) {

  grunt.initConfig ({

    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/style.scss'
        },
      },
    },

    compass: {                  // Task
        dist: {                   // Target
          options: {              // Target options
            sassDir: 'sass',
            cssDir: 'css',
            environment: 'production'
          },
        },
        dev: {                    // Another target
          options: {
            sassDir: 'sass',
            cssDir: 'css',
            config: 'config/config.rb'
          },
        },
    },


    watch: {
        sass: {
            files: ['sass/**/*.scss'],
            tasks: ['compass:dev'],
            options: {
                livereload: true, // needed to run LiveReload
            },
        },

        concat: {
          files: ['css/style.css', 'css/css.css'],
          tasks: "concat"
 }

    },

    concat: {
        options: {
          separator: '',
        },
        dist: {
          src: ['css/style.css', 'css/css.css'],
          dest: 'public/stylesheets/style.css',
        },
      },



    server: {
    port: grunt.option('port') || 8080
  }

});
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['watch','server','concat']);
};
