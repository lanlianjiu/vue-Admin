import {
    router
} from '@/router';
import store from '@/store';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import {
    getToken
} from '@/utils/auth';
import * as tools from '@/utils/tools';
import http from '@/utils/http'

const hasPermission = (roles, permissionRoles) => {
    if (roles.indexOf('admin') !== -1) return true
    if (!permissionRoles) return true
    return roles.some(role => permissionRoles.indexOf(role) !== -1)
}
console.log(4555555555555555555555555555555555)
const asyncRouterMap = [{
        path: '/home',
        component: resolve => require(['../views/home.vue'], resolve),
        meta: {
            title: '系统首页'
        }
    }, {
        path: '/ruleManage',
        component: resolve => require(['../views/UM/ruleManage.vue'], resolve),
        meta: {
            title: '规则列表'
        }
    }, {
        path: '/createRule',
        component: resolve => require(['../views/UM/createRule.vue'], resolve),
        meta: {
            title: ''
        }
    },
    {
        path: '/icon',
        component: resolve => require(['../views/example/Icon.vue'], resolve),
        meta: {
            title: '自定义图标'
        }
    },
    {
        path: '/baseTable',
        component: resolve => require(['../views/example/BaseTable.vue'], resolve),
        meta: {
            title: '基础表格'
        }
    },
    {
        path: '/tabs',
        component: resolve => require(['../views/example/Tabs.vue'], resolve),
        meta: {
            title: 'tab选项卡'
        }
    },
    {
        path: '/form',
        component: resolve => require(['../views/example/BaseForm.vue'], resolve),
        meta: {
            title: '基本表单'
        }
    },
    {
        // 富文本编辑器组件
        path: '/editor',
        component: resolve => require(['../views/example/VueEditor.vue'], resolve),
        meta: {
            title: '富文本编辑器'
        }
    },
    {
        // markdown组件
        path: '/markdown',
        component: resolve => require(['../views/example/Markdown.vue'], resolve),
        meta: {
            title: 'markdown编辑器'
        }
    },
    {
        // 图片上传组件
        path: '/upload',
        component: resolve => require(['../views/example/Upload.vue'], resolve),
        meta: {
            title: '文件上传'
        }
    },
    {
        // vue-schart组件
        path: '/baseCharts',
        component: resolve => require(['../views/example/BaseCharts.vue'], resolve),
        meta: {
            title: 'schart图表'
        }
    },
    {
        // 拖拽列表组件
        path: '/dragList',
        component: resolve => require(['../views/example/DragList.vue'], resolve),
        meta: {
            title: '拖拽列表'
        }
    },
    {
        // 权限页面
        path: '/permission',
        component: resolve => require(['../views/example/Permission.vue'], resolve),
        meta: {
            title: '权限测试',
            roles: ["admin"]
        }
    }
];
console.log(555)
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    nprogress.start()
    if (getToken()) {
        // 如果登录过后访问登录页面则跳回主页
        if (to.path === '/login') {
            next({
                path: '/'
            })
            nprogress.done()
        } else {
            // 请求用户信息，通过 roles 动态获取路由
            if (store.getters.roles.length === 0) {
                try {

                    // 根据 roles 权限生成路由表
                    //  http({
                    //          url: 'api/admin/menu/assigned-menu',
                    //          method: 'get',
                    //          data
                    //      }).then(function (res) {

                    //              function fiter(res) {

                    //                  if (res) {
                    //                      for (let i = 0; i < res.length; i++) {
                    //                          //console.log(res[i])
                    //                          if (res[i].items) {

                    //                              fiter(res[i].items)
                    //                          }
                    //                      }
                    //                  }

                    //              }
                    //              fiter(res);


                    // 动态新生成的路由表
                    router.addRoutes(asyncRouterMap)
                    next({ ...to,
                        replace: true
                    })
                } catch (error) {
                    await store.dispatch('felogout')
                    tools.notify({
                        type: 'error',
                        message: 'Verification failed, please login again'
                    })
                    next({
                        path: '/'
                    })
                }
            } else {
                // 如有 roles 则通过与路由 meta 的 roles 判断是否有访问该路由的权限
                if (hasPermission(store.getters.roles, to.meta.roles)) {
                    next()
                } else {
                    next({
                        path: '/401',
                        replace: true,
                        query: {
                            noGoBack: true
                        }
                    })
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
            nprogress.done() // 如果当前页是 login 则路由不会触发 after 钩子函数，需要手动处理
        }
    }
})

router.afterEach(() => {
    nprogress.done()
})
