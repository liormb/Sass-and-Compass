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
        watch: {
            js: {
                files: ['<%= uglify.build.files[0].src  %>'],
                tasks: ['uglify']
            },
            html: {
                files: ['*.html']
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

    // Default task(s)
    grunt.registerTask('default', ['watch']);
}