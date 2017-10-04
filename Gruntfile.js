module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
                options: { sourcemap: 'none' },
				files: {
					'style.css' : 'cart.scss'
				}
			}
        },
        cssmin: { // minifying css task
            dist: {
              files: {
                'style.min.css': 'style.css'
              }
            }
          },
		watch: {
			css: {
				files: '*.scss',
				tasks: ['sass']
            },
            styles: {
                files: ['style.css'],
                tasks: ['cssmin']
              }
		}
	});
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}