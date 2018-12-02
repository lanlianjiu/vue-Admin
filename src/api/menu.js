import http from '@/utils/http'

export function getMenu() {
    const data = {}
    return http({
        url: 'api/admin/menu/assigned-menu',
        //url:'mk/menu',
        method: 'get',
        data
    })
}
