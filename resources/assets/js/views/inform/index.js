require('./style.scss');

module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
            error : false,
            inform: {
                jobTitle    : '',
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
                job_title     : this.inform.jobTitle,
                category      : this.$.informCategories.category,
                min_salary    : this.inform.salaryMin,
                max_salary    : this.inform.salaryMax,
                location      : this.inform.location,
                description   : this.inform.description,
                how_to_apply  : this.inform.howToApply,
                company_name  : this.inform.companyName,
                website_url   : this.inform.websiteURL,
                contact_email : this.inform.contactEmail,
            }

            this.$api.inform.create(data, function(response) {
                var inform = response.data;
                if (inform && inform.job_title) {
                    $("button[type=reset]").trigger('click');

                    this.$helpers.message.success('Inform Created');
                }
            }).error(this.shakeError);
        }
    },

    components: {
        'select-categories': require('../../components/select-categories')
    }
}
