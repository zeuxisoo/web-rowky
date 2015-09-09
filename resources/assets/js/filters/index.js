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
    }
}
