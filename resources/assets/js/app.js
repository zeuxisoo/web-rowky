var Vue = require('vue'),
    VueRouter = require('vue-router');

//
Vue.use(VueRouter);

var Router = new VueRouter({
    history: true,
    saveScrollPosition: true
});

Router.map({
    '/': {
        component: require('./components/home')
    },

    '/inform': {
        component: require('./components/inform')
    },

    '/c/:category': {
        component: require('./components/category')
    },

    '*': {
        component: require('./components/not-found')
    }
})

var App = Vue.extend(require('./components/layout'));

Router.start(App, '#app');
