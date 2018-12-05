import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/css/icon.css';
import "babel-polyfill";
import store from "./store";
import scroll from 'vue-seamless-scroll';

//import promission from './promission'; //这里进行路由后台获取的模拟
Vue.use(ElementUI, {
    size: 'small'
});
Vue.use(scroll);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
