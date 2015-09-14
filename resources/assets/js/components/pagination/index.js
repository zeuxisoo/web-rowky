module.exports = {
    template: require('./template.html'),

    props: {
        pagination: {
            type    : Object,
            required: true
        },
        keyName: {
            type    : String,
            required: false,
            default : "page"
        }
    },

    computed: {
        previousPageUrl: function() {
            var page_url = this.$route.path,
                page_no  = this.pagination.current_page - 1;

            if (page_no === 0) {
                page_no = 1;
            }

            return this.page_url(page_no);
        },

        nextPageUrl: function() {
            var page_url = this.$route.path,
                page_no = this.pagination.current_page + 1;

            if (page_no > this.pagination.total_pages) {
                page_no = this.pagination.total_pages;
            }

            return this.page_url(page_no);
        },

        hasPreviousPage: function() {
            return this.pagination.current_page - 1 > 0;
        },

        hasNextPage: function() {
            return this.pagination.current_page + 1 <= this.pagination.total_pages;
        }
    },

    methods: {
        script_uri: function() {
            var url = this.$route.path,
                question_mark_position = url.indexOf('?'),
                script_uri;

            if (question_mark_position !== -1) {
                script_uri = url.substring(0, question_mark_position);
            }else{
                script_uri = url;
            }

            return script_uri;
        },

        page_url: function(page_no) {
            // Simply Clone object without affect other place
            var query_strings = JSON.parse(JSON.stringify(this.$route.query));

            query_strings[this.keyName] = page_no;

            return this.script_uri() + '?' + this.$helpers.utils.make_query_strings(query_strings);
        }
    }
}
