import http from '@/utils/http'

export function getData() {
    const data = {}
    return http({
        url: '/mk/basechart',
        method: 'get',
        data
    })
}
