module.exports = function(app) {
    return {
        inform: require('./inform.js')(app),
        category: require('./category.js')(app)
    }
}
