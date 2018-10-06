import {
    getUnreadyMsg
}
from '@/api/systemMsg'
import * as types from '../mutaion'

const systemMsg = {
    state: {

    },
    mutations: {

    },
    actions: {
        getUnreadyMsg({
            commit
        }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await getUnreadyMsg()
                    resolve(response)
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}

export default systemMsg
