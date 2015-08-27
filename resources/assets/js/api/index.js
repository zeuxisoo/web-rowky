module.exports = function(app) {
    return {
        inform: require('./inform.js')(app)
    }
}
