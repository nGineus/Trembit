module.exports = function(grunt) {
    grunt.initConfig({

        concat: {
            options: {
                separator: '\n;\n',
            },
            dist: {
                src: ['dist/js/*.js'],
                dest: 'js/script.js'
            }
        },

        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'css/master.css': 'dist/sass/master.scss' // 'destination': 'source'
                }
            }
        },

        concat_css: {
            options: {
                // Task-specific options go here.
            },
            all: {
                src: ['css/reset.css', 'dist/sass/style.css'],
                dest: 'css/master.css'
            }
        },

        uglify: {
            dist: {
                src: ['js/script.js'],
                dest: 'js/script.min.js'
            }
        },

        watch: {
            scripts: {
                files: ['dist/js/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                },
            },
            scss: {
                files: ['dist/sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-jshint');

    // grunt.registerTask('hint', ['jshint']);

    grunt.registerTask('default', ['concat', 'sass', 'concat_css']);

    grunt.registerTask('final', ['concat', 'sass', 'concat_css', 'uglify']);

    console.log('All done');
};