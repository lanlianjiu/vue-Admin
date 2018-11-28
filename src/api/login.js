import http from '@/utils/http'

export function login(username, password) {
    const data = {
        username,
        password
    }
    return http({
        url: '/api/admin/user/login',
        method: 'post',
        data
    })
}

export function logout() {
    return http({
        url: '/api/admin/user/loginout',
        method: 'post'
    })
}

export function getUserInfo(username) {
    return http({
        url: 'api/admin/menu/user-info',
        method: 'get'
    })
}
