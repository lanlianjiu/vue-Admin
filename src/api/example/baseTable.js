import http from '@/utils/http'

export function baseTabledata(postdata) {
    const data = postdata
    return http({
        url: 'mk/table',
        method: 'post',
        data
    })
}
