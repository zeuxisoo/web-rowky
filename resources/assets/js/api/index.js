module.exports = function(app) {
    app.apiUrl = function(path) {
        return '/api/v1' + path;
    };

    return {
        inform: require('./inform.js')(app)
    }
}
