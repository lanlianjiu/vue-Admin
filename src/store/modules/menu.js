import {
    getMenu
}
from '@/api/menu'
import * as types from '../mutaion'

const menu = {
    state: {

    },
    mutations: {

    },
    actions: {
        getMenu({
            commit
        }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await getMenu()
                    resolve(response)
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}

export default menu
