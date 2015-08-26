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

Object.defineProperties(Vue.prototype, {
    $helpers: {
        get: function() {
            return require('./helpers');
        }
    }
});


Router.start(Vue.extend(require('./components/layout')), '#app');
