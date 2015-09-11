module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
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

    computed: {
        previousPageNo: function() {
            var page_no = this.pagination.current_page - 1;

            if (page_no === 0) {
                page_no = 1;
            }

            return page_no;
        },

        nextPageNo: function() {
            var page_no = this.pagination.current_page + 1;

            if (page_no > this.pagination.total_pages) {
                page_no = this.pagination.total_pages;
            }

            return page_no;
        },

        hasPreviousPage: function() {
            return this.pagination.current_page - 1 > 0;
        },

        hasNextPage: function() {
            return this.pagination.current_page + 1 <= this.pagination.total_pages;
        }
    },

    methods: {
        onChangeCategory: function(value) {
            console.log(value);
        }
    },

    components: {
        'select-categories': require('../../components/select-categories')
    }
}
