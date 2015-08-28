var InformApi = function(app) {
    this.app = app;
};

InformApi.prototype.create = function(data, success) {
    return this.app.$http.post(this.app.apiUrl('/inform/create'), data, success);
}

module.exports = function(app) {
    return new InformApi(app);
};
