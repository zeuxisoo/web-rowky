module.exports = {
    template: require('./template.html'),

    compiled: function() {
        this.$api.inform.all({
            page: 1
        }, function(response) {
            // TODO: Show in home page
            console.log(response);
        });
    },

    methods: {
        onChangeCategory: function(value) {
            console.log(value);
        }
    },

    components: {
        'select-categories': require('../../components/select-categories')
    }
}
