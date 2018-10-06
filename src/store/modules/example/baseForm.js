import {
    baseFormdata
}
from '@/api/example/baseForm'
import * as types from '../../mutaion'

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
