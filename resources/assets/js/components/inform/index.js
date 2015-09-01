require('./style.scss');

module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
            error : false,
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
        shakeError: function(reason) {
            var errors = reason.errors;
            for(var key in errors) {
                this.$helpers.message.error(errors[key][0]);
                break;
            }

            this.error = true;
            setTimeout(function() {
              this.error = false;
            }.bind(this), 1000);
        },

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
                this.$helpers.message.success(response.message);
            }).error(this.shakeError);
        }
    }
}
