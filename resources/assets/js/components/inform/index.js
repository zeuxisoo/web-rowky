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

            var data = {
                jobTitle    : this.inform.jobTitle,
                category    : this.inform.category,
                salaryMin   : this.inform.salaryMin,
                salaryMax   : this.inform.salaryMax,
                location    : this.inform.location,
                description : this.inform.description,
                howToApply  : this.inform.howToApply,
                companyName : this.inform.companyName,
                websiteURL  : this.inform.websiteURL,
                contactEmail: this.inform.contactEmail,
            }

            this.$api.inform.create(data, function(response) {
                console.log(response);
            }).error(function(reason) {
                console.log(reason);
            });
        }
    }
}
