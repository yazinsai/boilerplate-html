module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    src: 'src',
    dest: 'build',
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= src %>/<%= pkg.name %>.js',
        dest: '<%= dest %>/<%= pkg.name %>.min.js'
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
  				cwd: '<%= src %>/assets/',
  				src: ['*.scss'],
  				dest: '<%= dest %>/assets',
  				ext: '.css'
  			}]
  		}
  	},
  	htmlmin: {
  	  /**
  	   * Minifies the HTML output of the main index file that we're using
  	   */
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   
          '<%= dest %>/index.html': '<%= src %>/index.html'
        }
      }
  	},
  	
  	watch: {
      css: {
        files: '<%= src %>/**/*.scss',
        tasks: ['sass']
      },
      html: {
        files: ['<%= src %>/**/*.html', '<%= src %>/**/*.htm'],
        tasks: ['htmlmin']
      }
    }
  });

  // Load the plugins that we use
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'htmlmin']);
};