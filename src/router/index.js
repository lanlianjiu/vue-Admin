import Vue from 'vue';
import Router from 'vue-router';
import {
    asyncRouterMap
} from './asyncRouterMap';

Vue.use(Router);
export default new Router({
    routes: asyncRouterMap
})
