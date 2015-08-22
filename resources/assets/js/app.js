var Vue = require('vue'),
    VueRouter = require('vue-router');

//
var DummyComponent = Vue.extend({
    template: '<p>This is Test! {{ $route.params.category }}</p>'
});

//
Vue.use(VueRouter);

var Router = new VueRouter({
    history: true,
    saveScrollPosition: true
});

Router.map({
    '/': {
        component: DummyComponent
    },

    '/inform': {
        component: DummyComponent
    },

    '/c/:category': {
        component: DummyComponent
    }
})

var App = Vue.extend({
    template: require('./template/index.html'),
    ready   : function() {
        $(".button-collapse").sideNav();
    }
});

Router.start(App, '#app');
