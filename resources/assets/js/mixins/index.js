module.exports = {
    methods: {
        setTitle: function(title) {
            if (title) {
                document.title = title + ' - ' + this.$settings.site.name;
            }else{
                document.title = this.$settings.site.name;
            }
        }
    }
}
