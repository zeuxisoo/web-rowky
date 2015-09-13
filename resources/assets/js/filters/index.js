module.exports = {
    categoriesOptions: function(categories, keyToExtract) {
        var newCategories = [];

        categories.forEach(function(category) {
            newCategories.push({
                text : category.name,
                value: category.id
            });
        });

        return newCategories;
    },

    marked: function(text) {
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
        });

        return marked(text);
    },

    email: function(text) {
        return text.replace(
            /((([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,}))/gi,
            '<a href="mailto:$1">$1</a>'
        );
    }
}
