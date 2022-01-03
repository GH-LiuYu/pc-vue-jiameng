import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default store
// 参考
// https://blog.csdn.net/qq_43158069/article/details/112529764
