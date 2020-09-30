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
            commit()
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