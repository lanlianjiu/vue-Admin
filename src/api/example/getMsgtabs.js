import http from '@/utils/http'

export function getMsg() {
    const data = {}
    return http({
        url: '/mk/getMsg',
        method: 'get',
        data
    })
}
