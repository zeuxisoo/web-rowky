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
        name     : 'home',
        component: require('./views/home')
    },

    '/inform': {
        name     : 'inform.create',
        component: require('./views/inform/create')
    },

    '/c/:category': {
        name     : 'category.show',
        component: require('./views/category')
    },

    '/i/:id': {
        name     : 'inform.show',
        component: require('./views/inform/show')
    },

    '*': {
        name     : 'any',
        component: require('./views/not-found')
    }
});

// Resource
Vue.http.headers.common['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').prop('content');

// Plugin
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
    },
    $settings: {
        get: function() {
            return require('./settings');
        }
    }
});

// Filter
var filters = require('./filters');

for(var filter in filters) {
    Vue.filter(filter, filters[filter]);
}

Router.start(Vue.extend(require('./views/layout')), '#app');
