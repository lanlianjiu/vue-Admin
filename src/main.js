import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/css/icon.css';
import "babel-polyfill";
import store from "./store";
import scroll from 'vue-seamless-scroll';
import nprogress from 'nprogress'
import 'nprogress/nprogress.css';
import {
    getToken
} from '@/utils/auth';
import * as tools from '@/utils/tools';
Vue.use(ElementUI, {
    size: 'small'
});
Vue.use(scroll);


// const whiteList = ['/login'];


// router.beforeEach(async (to, from, next) => {
//     nprogress.start()
//     if (getToken()) {
//         // 如果登录过后访问登录页面则跳回主页
//         if (to.path === '/login') {
//             next({
//                 path: '/'
//             })
//             nprogress.done()
//         } else {
//             try {
//                 //await store.dispatch('getMenu')
//                 // await store.dispatch("getMenu").then(data => {
//                 //     initMenu(router, data);
//                 // });
//                 next({ ...to,
//                     replace: true
//                 })
//             } catch (error) {
//                 await store.dispatch('felogout')
//                 tools.notify({
//                     type: 'error',
//                     message: 'Verification failed, please login again'
//                 })
//                 next({
//                     path: '/'
//                 })
//             }
//         }
//     } else {
//         if (whiteList.indexOf(to.path) !== -1) {
//             next()
//         } else {
//             next('/login')
//             nprogress.done() // 如果当前页是 login 则路由不会触发 after 钩子函数，需要手动处理
//         }
//     }
// })

// router.afterEach(() => {
//     nprogress.done()
// })

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
