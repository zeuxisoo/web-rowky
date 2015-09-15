require('./style.scss');

module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
            inform: {
                id            : 0,
                job_title     : '',
                category      : 0,
                min_salary    : 0,
                max_salary    : 0,
                location      : '',
                description   : '',
                how_to_apply  : '',
                company_name  : '',
                website_url   : '',
                contact_email : ''
            }
        }
    },

    compiled: function() {
        this.$api.inform.show({
            id: this.$route.params.id
        }, function(response) {
            this.inform = response.data;
        });
    }
}
