module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
      main: {
        options: ['>1% in US'],
        src: 'public/css/main.css'
      }
    },
    bower_concat: {
      main: {
        cssDest: 'public/lib/build.css'
      }
    },
    clean: ['public'],
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: [
              '_styles/**',
              'images/**',
              '!**/*.scss',
            ],
            dest: 'public/',
            filter: 'isFile'
          }
        ]
      }
    },
    sass: {
        dev: {
        options: {
          sourceMap: true,
          sourceMapEmbed: true
        },
        files: {
          'public/css/main.css': 'src/_styles/sass/main.scss'
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: true
        },

        files: [
          'public/css/main.css'
        ]
      },
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer']
      }
    }
  });

grunt.registerTask('default', []);
grunt.registerTask('build-dev', [
  'bower_concat',
  'clean',
  'copy',
  'sass:dev',
  'watch'
  ]);
};