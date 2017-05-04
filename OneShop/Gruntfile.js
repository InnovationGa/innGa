/**
 * Created by Administrator on 2017/3/14.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        sprite:{
            all: {
                src: ['public/images/*.png','!public/images/banner.png'],
                dest: 'public/images/spritesheet.png',
                destCss: 'public/css/sprites.css'
            }
        },
        imagemin:{
            release:{
                files:[{
                    expand:true,
                    src:['public/images/groupbuy/*.jpg','public/images/groupbuy/*.png','public/images/banner.png','public/images/bannerPhone.jpg']
}],
                options:{
                    optimizationLevel:3
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                expand: true,
                cwd: 'public/css',
                src: ['*.css', '!*.min.css'],
                dest: 'public/css',
                ext: '.min.css'
                }]
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'public/js/*.js']
        },
        concat:{
            js:{
                files:{
                    'build/js/bundle.js':['public/js/t1.js','public/js/bootstrap.js']
                }
            },
            css:{
                files:{
                    'build/css/final.min.css':['public/css/*.min.css']
                }
            }
        },
        uglify:{
            min:{
                files:{
                    'build/js/uglify.min.js':'build/js/bundle.js'
                }
            }
        },
        less: {
            main: {
                expand: true,
                src: ['public/css/*.less'],
                dest: '.',
                ext: '.css'
            }
        },
        watch:{
            less: {    //用于监听less文件,当改变时自动编译成css文件
                files: ['public/css/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            concat:{
                tasks:['concat:js'],
                files:['public/js/*.js']
            },
            uglify:{
                tasks:['uglify:min'],
                files:['build/js/bundle.js']
            }
        }
    });

    // Load in `grunt-spritesmith`
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['jshint']);
    grunt.registerTask('js','concat and uglify js assets',['concat:js','uglify:min']);
    grunt.registerTask('build','build a whole project',['sprite','less','cssmin','uglify','concat','imagemin']);
};