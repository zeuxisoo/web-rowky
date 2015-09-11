module.exports = {
    template: require('./template.html'),

    methods: {
        onChangeCategory: function(value) {
            console.log(value);
        }
    },

    components: {
        'select-categories': require('../../components/select-categories')
    }
}
