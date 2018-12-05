const getters = {

    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    /* user */
    roles: state => state.user.roles,
    userInfo: state => state.user
}
export default getters
