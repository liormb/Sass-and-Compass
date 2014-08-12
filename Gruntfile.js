module.exports = function(grunt){

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: [
                    { src: ['_/components/js/*.js'], dest: '_/js/script.js' }
                ]
            }
        },
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
            html: {
                files: ['*.html']
            },
            sass: {
                files: ['_/components/sass/*.scss'],
                tasks: ['compass:dev']
            },
            js: {
                files: ['<%= uglify.build.files[0].src  %>'],
                tasks: ['uglify']
            },
            options: {
                livereload: true
            }
        }
    });

    // Load the plugin that provides the "uglify" task
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load the plugin that provides the "watch" task
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Load the plugin that provides the "compass" task
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task(s)
    grunt.registerTask('default', ['watch']);
}