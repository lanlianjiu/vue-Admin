import Vue from 'vue';
import Router from 'vue-router';
import {
    asyncRouterMap
} from './asyncRouterMap';
import store from "../store";
Vue.use(Router);

export const constantRouterMap = [];

//  const infoResponse = await store.dispatch('getUserInfo')
//  const {
//      roles
//  } = infoResponse.data
//  // 根据 roles 权限生成路由表
//  await store.dispatch('generateRoutes', roles)
console.log(store.getters.roles)
export default new Router({
    routes: asyncRouterMap
})
