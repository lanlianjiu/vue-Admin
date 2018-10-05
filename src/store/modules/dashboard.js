import {
    getDashboard
}
from '@/api/dashboard'
const dashboard = {
    state: {

    },
    mutations: {

    },
    actions: {
        getDashboard({
            commit
        }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await getDashboard()
                    resolve(response)
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}

export default dashboard
