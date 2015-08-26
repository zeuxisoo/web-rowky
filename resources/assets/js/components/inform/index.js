require('./style.scss');

module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
            inform: {
                jobTitle    : '',
                category    : 0,
                salaryMin   : 0,
                salaryMax   : 0,
                location    : '',
                description : '',
                howToApply  : '',
                companyName : '',
                websiteURL  : '',
                contactEmail: '',
            }
        };
    },

    methods: {
        submit: function(e) {
            e.preventDefault();

            this.$helpers.message.success('Infom was created');
            this.$helpers.message.error('Got some errors');
        }
    }
}
