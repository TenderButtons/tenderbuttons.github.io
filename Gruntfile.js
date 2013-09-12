module.exports = function(grunt) {
  grunt.initConfig({
    imagemin: {
      dynamic: {                         
        files: [{
          expand: true,                  
          cwd: './resources/uncompressed/',   
          src: ['*.{png,jpg,gif}'],   
          dest: './resources/'                 
        }]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-imagemin');

}