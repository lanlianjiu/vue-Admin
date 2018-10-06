import http from '@/utils/http'

export function getDashboard() {
    const data = {}
    return http({
        url: '/mk/dashboard',
        method: 'get',
        data
    })
}
