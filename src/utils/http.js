import axios from 'axios'
import {
    getToken
} from '@/utils/auth'
import * as tools from './tools'
import Cookies from 'js-cookie'
const http = axios.create({
    baseURL: '',
    timeout: 30000
})

// 请求前 拦截器
http.interceptors.request.use(
    config => {
        console.log(Cookies.get('access-token'))
        if (Cookies.get('access-token')) {

            config.headers['Authorization'] = "Basic "+Cookies.get('access-token');
        }else{

            config.headers['Authorization'] = "Basic og==";
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应 拦截器
http.interceptors.response.use(
    response => {
        const res = response.data

        if (res.error) {
            tools.notify({
                type: 'error',
                message: res.error.message
            })
            if (res.code === '') {
                // 接口自定义错误代码
                // 移除登陆token 显示接口错误消息
            }
            return Promise.reject(res)
        }
        return Promise.resolve(res)
    },
    error => {

        tools.notify({
            type: 'error',
            message: error.message,
            duration: 5000
        })
        return Promise.reject(error)
    }
)

export default http
