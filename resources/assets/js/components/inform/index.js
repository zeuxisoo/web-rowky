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
            // TODO
            console.log('This is a test');
        }
    }
}
