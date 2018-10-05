import {
    getData
}
from '@/api/basechart'
import * as types from '../mutaion'

const basechart = {
    state: {

    },
    mutations: {

    },
    actions: {
        getData({
            commit
        }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await getData()
                    resolve(response)
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}

export default basechart
