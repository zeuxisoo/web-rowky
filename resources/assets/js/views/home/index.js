module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
            informs: []
        }
    },

    compiled: function() {
        this.$api.inform.all({
            page: 1
        }, function(response) {
            var informs    = response.data,
                pagination = response.meta.pagination;

            this.informs = informs;
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
