module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
            filter: {
                category: 0
            },
            categories: []
        }
    },

    compiled: function() {
        this.$api.category.all({}, function(response) {
            this.categories = response.data;
        });
    }
};
