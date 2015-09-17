module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
            categories : [],
            informs    : [],
            pagination : {
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
            var page_no = typeof this.$route.query.page === "undefined" ? 1 : this.$route.query.page;

            this.$api.inform.all({
                page: page_no
            }, function(response) {
                var informs    = response.data,
                    pagination = response.meta.pagination;

                this.informs = informs;
                this.pagination = pagination;
            });
        }
    },

    compiled: function() {
        this.$api.category.all({}, function(response) {
            this.categories = response.data;
        });
    },

    computed: {
        hasInforms: function() {
            return this.informs.length > 0;
        }
    },

    methods: {
        onChangeCategory: function(value) {
            this.$route.router.go('/c/' + value);
        }
    },

    components: {
        'pagination': require('../../components/pagination')
    }
}
