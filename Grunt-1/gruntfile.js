module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        log: {
            foo: [1,2,3],
            bar: 'Hello world!',
            baz: false,
        },
        
        notify_hooks: {
            options: {
                enable: true,
                max_jshint_notifications: 5
            },
            uncss: {
                options: {
                    title: 'Did this work',
                    message: 'An error somewhere...'
                }
            }
        },
        
        imagemin: {
            jpg: {
                options: {
                    progressive: true 
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.jpg'],
                    dest: 'dest/'
                }]
            },
            dynamic: {
                options: {
                    progressive: true 
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.(png,jpg,JPG,gif)'],
                    dest: 'dest/'
                }]
            }
        },
        
        uncss: {
            dist: {
                files: {
                    'css/style.css': ['index.html'] 
                }
            }
        },
        
        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        },
        
        less: {
            development: {
                options: {
                    paths: ['less/']
                },
                files: {
                    'css/style.css': 'less/source.less'
                }
            }
        },
        
        sass: {
            dist: {
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            }
        },
        
        concat: {
            options: {
                seperator: ";",
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */ \n',
            },
            dist: {
                src: ['js/index1.js', 'js/index2.js'],
                dest: 'js/<%= pkg.name %>-v<%= pkg.version %>.js',
            }
        },
        
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext:'.min.css'
                }],
            }
        },
        
        uglify: {
            options: {
                manage: false,
                preserveComments: 'all'
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js/',
                    src: ['**/*.js', '!*.min.js'],
                    dest: 'js/',
                    ext:'.min.js'
                }],
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    //grunt.registerTask('notify:uncss');
    //grunt.task.run('notify_hooks');
    
    //grunt.registerTask('default', ['uncss', 'concat:dist', 'uglify']);
    
    //run-> grunt log
    grunt.registerMultiTask('log', 'Log stuff.', function(){
        grunt.log.writeln(this.target + ':' + this.data);
    });
    
    //run-> grunt foo:a1:a2
    grunt.registerTask('foo', 'Simple task!', function(arg1, arg2){
        if ( arguments.length === 0 ) {
            grunt.log.writeln(this.name + ", no args");
        } else {
            grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
        }
    });
    
    //run-> grunt
    grunt.registerTask('default', 'My default task', function(){
        grunt.log.writeln('Currently running the default task.');
    });
    
    //run-> grunt foo_me
    grunt.registerTask('foo_me', 'My foo_me task!', function(){
        grunt.task.run('log:bar', 'log:baz');
    });
    
    //run-> grunt asyncfoo
    grunt.registerTask('asyncfoo', 'My async task.', function(){
        var done = this.async();
        grunt.log.writeln('Processing task...');
        
        // async stuff
        setTimeout(function(){
            grunt.log.writeln('All done!');
            done();
        }, 5000);
        
        grunt.log.error("This is an error message run before all done.");
    });
}; 