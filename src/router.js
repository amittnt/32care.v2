
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

Vue.component( 'MyHeader', () => import('./modules/Home/MyHeader.vue'));
Vue.component( 'MyBanner', () => import('./modules/Home/MyBanner.vue'));
Vue.component( 'MyFooter', () => import('./modules/Home/MyFooter.vue'));
Vue.component( 'MyDentFind', () => import('./modules/Home/MyDentFind.vue'));


export default new Router({
    mode: 'history',
    base : "",
    scrollBehavior : function() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [
        {
          path: '/',
          name : "demo",
          component: () => import('./modules/Home/Home.vue'),
        },
        {
          path: '/home',
          name : "home",
          component: () => import('./modules/Home/Home.vue'),
        },
        {
          path: '/blog',
          name : "blog",
          component: () => import('./modules/Blog.vue'),
        }
    ]
});