module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
            categories: []
        }
    },

    compiled: function() {
        this.$api.category.all({}, function(response) {
            this.categories = response.data;
        });
    },

    ready: function() {
        $(document).foundation();
    }
}
