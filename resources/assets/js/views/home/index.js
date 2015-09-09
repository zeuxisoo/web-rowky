module.exports = {
    template: require('./template.html'),

    components: {
        'select-categories': require('../../components/select-categories')
    },

    methods: {
        onChangeCategory: function(value) {
            console.log(value);
        }
    }
}
