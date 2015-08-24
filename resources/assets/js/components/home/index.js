require('./style.scss');

module.exports = {
    template: require('./template.html'),
    ready   : function() {
        $('select').material_select();
    }
}
