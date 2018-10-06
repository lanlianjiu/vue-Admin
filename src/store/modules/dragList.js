import {
    getdragList
}
from '@/api/dragList'
import * as types from '../mutaion'

const dragList = {
    state: {

    },
    mutations: {

    },
    actions: {
        querydragList({
            commit
        }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await getdragList()
                    resolve(response)
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}

export default dragList
