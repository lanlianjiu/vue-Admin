import {
    constantRouterMap
} from '../../router'
import {
    asyncRouterMap
} from '../../router/asyncRouterMap'
import * as types from '../mutaion'
import http from '@/utils/http'

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        [types.SET_ROUTERS]: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
        }
    },
    actions: {
        generateRoutes({
            commit
        }, roles) {
            return new Promise(resolve => {
                     const data = {}
                     
                let routers = null
                // 如果 roles 角色中存在 admin 则直接返回所有路由, 否则进行路由过滤
                // roles.indexOf('admin') > -1 ?
                //     (routers = asyncRouterMap) :
                //     (routers = filterAsyncRouter(asyncRouterMap, roles));

                  http({
                        url: 'api/admin/menu/assigned-menu',
                        method: 'get',
                        data
                    }).then(function(res){
                        
                        function fiter(res){
                            
                            if(res){
                                for (let i = 0; i < res.length; i++) {
                                    //console.log(res[i])
                                    if (res[i].items) {
                                        
                                        fiter(res[i].items)
                                    }
                                }
                            }
                                
                        }
                        fiter(res);
                       
                       commit(types.SET_ROUTERS, asyncRouterMap)
                    })

                    

                
                resolve()
            })
        }
    }
}

export default permission
