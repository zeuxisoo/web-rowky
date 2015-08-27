var Vue = require('vue'),
    VueRouter = require('vue-router'),
    VueResource = require('vue-resource');

// Plugin
Vue.use(VueRouter);
Vue.use(VueResource);

// Router
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
});

// Resource
Vue.http.headers.common['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').prop('content');

//
Object.defineProperties(Vue.prototype, {
    $helpers: {
        get: function() {
            return require('./helpers');
        }
    },
    $api: {
        get: function() {
            return require('./api')(this);
        }
    }
});


Router.start(Vue.extend(require('./components/layout')), '#app');
