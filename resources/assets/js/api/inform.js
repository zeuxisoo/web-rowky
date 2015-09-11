var InformApi = function(app) {
    this.app = app;
};

InformApi.prototype.create = function(data, success) {
    return this.app.$http.post(
        this.app.$helpers.api.url('/inform/create'),
        data,
        success
    );
};

InformApi.prototype.all = function(data, success) {
    return this.app.$http.post(
        this.app.$helpers.api.url('/inform/all'),
        data,
        success
    );
};

module.exports = function(app) {
    return new InformApi(app);
};
