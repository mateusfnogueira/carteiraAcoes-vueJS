import stocksBD from '@/data/stocksBD'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stock = stocks
        }
    },
    actions: {
        buyStock({ commit }, order) {
            commit('buyStock', order)
        },
        initStocks({ commit }) {
            commit('setStocks', stocksBD)
        }
    },
    getter: {
        stocks(state) {
            return state.stocks
        }
    }
}