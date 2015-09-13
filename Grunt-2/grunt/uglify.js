module.exports = {
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