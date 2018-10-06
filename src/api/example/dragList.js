import http from '@/utils/http'

export function getdragList() {
    const data = {}
    return http({
        url: '/mk/getdragList',
        method: 'get',
        data
    })
}
