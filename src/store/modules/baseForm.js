import {
    baseFormdata
}
from '@/api/baseForm'
import * as types from '../mutaion'

const baseForm = {
    state: {

    },
    mutations: {

    },
    actions: {
        baseFormdata({
            commit
        }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await baseFormdata()
                    resolve(response)
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}

export default baseForm
