import http from '@/utils/http'

export function baseFormdata() {
    const data = {}
    return http({
        url: '/mk/baseFrom',
        method: 'get',
        data
    })
}
