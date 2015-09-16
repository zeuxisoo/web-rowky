module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
            category  : {}
        }
    },

    compiled: function() {
        var category = this.$route.params.category;

        this.$api.category.show({
            slug: category
        }, function(response) {
            this.category = response.data;
        });
    }
}
