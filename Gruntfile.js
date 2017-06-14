module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    sass: {
      /**
       * Read all '.scss' files in the src/assets/ directory and put the
       * resulting '.css' files into build/assets/
       */
  		dist: {
  			files: [{
  				expand: true,
  				cwd: 'src/assets/',
  				src: ['*.scss'],
  				dest: 'build/assets',
  				ext: '.css'
  			}]
  		}
  	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
};