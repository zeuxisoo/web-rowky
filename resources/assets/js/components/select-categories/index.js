module.exports = {
    template: require('./template.html'),

    props: {
        defaultText: {
            type    : String,
            required: true
        },
        defaultValue : {
            type    : Number,
            required: false,
            default : 0
        },
        disabledValue: {
            type    : String,
            required: false
        },
        onChangeCallback: {
            type    : Function,
            required: false
        }
    },

    data: function() {
        return {
            category: 0,
            categories: []
        }
    },

    compiled: function() {
        this.$api.category.all({}, function(response) {
            this.categories = response.data;
            this.category   = this.defaultValue;
        });
    },

    methods: {
        onChange: function(e) {
            this.onChangeCallback(this.category);
        }
    }
};
