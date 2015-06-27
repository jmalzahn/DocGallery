module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      all: {
        options: { livereload: true },
        files: ['app/scripts/*.js', 'app/styles/*.css', 'app/index.html'],
        tasks: [],
      },
    },
  });


  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};