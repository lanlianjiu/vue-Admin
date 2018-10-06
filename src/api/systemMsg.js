import http from '@/utils/http'

export function getUnreadyMsg() {
    const data = {}
    return http({
        url: '/mk/getUnready',
        method: 'get',
        data
    })
}
