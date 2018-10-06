import {
    getMsg
}
from '@/api/example/getMsgtabs'
import * as types from '../../mutaion'

const getMsgtabs = {
    state: {

    },
    mutations: {

    },
    actions: {
        getMsgtabs({
            commit
        }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await getMsg()
                    resolve(response)
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}

export default getMsgtabs
