import http from '@/utils/http'

export function login(username, password) {
    const data = {
        username,
        password
    }
    return http({
        url: '/admin/login',
        method: 'post',
        data
    })
}

export function logout() {
    return http({
        url: '/mk/loginout',
        method: 'post'
    })
}

export function getUserInfo(username) {
    return http({
        url: 'mk/getUserInfo',
        method: 'get',
        params: {
            username
        }
    })
}
