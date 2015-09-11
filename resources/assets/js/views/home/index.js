module.exports = {
    template: require('./template.html'),

    data: function() {
        return {
            informs    : [],
            pagination : {}
        }
    },

    compiled: function() {
        this.$api.inform.all({
            page: 1
        }, function(response) {
            var informs    = response.data,
                pagination = response.meta.pagination;

            this.informs = informs;
            this.pagination = pagination;
        });
    },

    computed: {
        hasPreviousPage: function() {
            return this.pagination.current_page - 1 > 0;
        },

        hasNextPage: function() {
            return this.pagination.current_page + 1 <= this.pagination.total_pages;
        },
    },

    methods: {
        onChangeCategory: function(value) {
            console.log(value);
        },

        switchPage: function(action) {
            var page_no = 0;

            switch(action) {
                case 'previous':
                    page_no = this.pagination.current_page - 1;
                    break;
                case 'next':
                    page_no = this.pagination.current_page + 1;
                    break;
            }

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

    components: {
        'select-categories': require('../../components/select-categories')
    }
}
