var CategoryApi = function(app) {
    this.app = app;
};

CategoryApi.prototype.all = function(data, success) {
    return this.app.$http.get(
        this.app.$helpers.api.url('/category/all'),
        data,
        success
    );
}

module.exports = function(app) {
    return new CategoryApi(app);
};
