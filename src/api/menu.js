import http from '@/utils/http'

export function getMenu() {
    const data = {}
    return http({
        url: '/mk/menu',
        method: 'get',
        data
    })
}
