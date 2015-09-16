module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
            category  : {},
            informs   : [],
            pagination: {
                count: 0,
                current_page: 0,
                links: {
                    previous: "",
                    next    : ""
                },
                previous: "",
                per_page: 0,
                total: 0,
                total_pages: 0
            }
        }
    },

    route: {
        data: function(transition) {
            var page_no  = typeof this.$route.query.page === "undefined" ? 1 : this.$route.query.page;
            var category = this.$route.params.category;

            this.$api.category.show({
                slug: category
            }, function(response) {
                this.category = response.data;

                this.$api.inform.all({
                    page    : page_no,
                    category: this.category.id
                }, function(response) {
                    var informs    = response.data,
                        pagination = response.meta.pagination;

                    this.informs = informs;
                    this.pagination = pagination;
                });
            });
        }
    },

    computed: {
        hasInforms: function() {
            return this.informs.length > 0;
        }
    },

    components: {
        'pagination': require('../../components/pagination')
    }
}
