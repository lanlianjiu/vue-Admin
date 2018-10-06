import {
    baseTabledata
}
from '@/api/example/baseTable'
import * as types from '../../mutaion'

const baseTable = {
    state: {

    },
    mutations: {

    },
    actions: {
        baseTabledata({
            commit
        }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await baseTabledata()
                    resolve(response)
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}

export default baseTable
