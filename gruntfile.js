module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['gruntfile.js', 'src/js/*.js', '!src/js/*.min.js'],
      options: {
        'esversion': 6,
        globals: {
          jQuery: true
        }
      }
    },

    uglify: {
      dev: {
        options: {
          mangle: false,
          beautify: true
        },
        files: {
          'src/js/main.min.js': ['src/js/*.js', '!src/js/*.min.js']
        }
      },
      prod: {
        options: {
          mangle: true,
          beautify: false
        },
        files: {
          'src/js/main.min.js': ['src/js/*.js', '!src/js/*.min.js']
        }
      }
    },

    stylus: {
      dev: {
        options: {
          // minify
          compress: false,
          linenos: true
        },
        files: {
          'src/styles/css/styles.css' : 'src/styles/styl/styles.styl',
        }
      },
      prod: {
        options: {
          // minify
          compress: true,
          linenos: false
        },
        files: {
          'src/styles/css/styles.css' : 'src/styles/styl/styles.styl',
        }
      }
    },

    connect: {
      server: {
        options: {
          port: '9000',
          base: '.',
          hostname: 'localhost',
          protocol: 'http',
          livereload: true,
          open: true
        }
      }
    },

    watch: {
      styl: {
        files: ['src/**/*.styl'],
        tasks: ['stylus:dev', 'uglify'],
        sourceComments: 'normal',
        options: {
          sourceMap: true
        }
      },
      js: {
        files: ['<%= jshint.files %>', '!src/js/*.min.js'],
        tasks: ['jshint', 'uglify:dev'],
      },
      livereload: {
        files: ['src/styles/**/*.css'],
        options: {
          livereload: true,
          sourceMap: true,
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('compile', ['stylus:dev','jshint', 'uglify:dev']);
  grunt.registerTask('production', ['stylus:prod','jshint', 'uglify:prod']);

};
