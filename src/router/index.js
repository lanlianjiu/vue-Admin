import Vue from 'vue';
import Router from 'vue-router';
var constantRouterMap = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        meta: {
            title: '系统首页'
        },
        children: [
            {
                path: '/404',
                component: resolve => require(['../components/page/404.vue'], resolve),
                meta: {
                    title: '404'
                }
            },
            {
                path: '/403',
                component: resolve => require(['../components/page/403.vue'], resolve),
                meta: {
                    title: '403'
                }
            }
        ]
    },
    {
        path: '/login',
        component: resolve => require(['../views/Login.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/404'
    }
]

Vue.use(Router);

export default new Router({
    routes: constantRouterMap
})
