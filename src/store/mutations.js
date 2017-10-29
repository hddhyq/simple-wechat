import * as types from './mutation-types'

const mutations = {
  [types.SET_NICKNAME](state, nickname) {
    state.nickname = nickname
  }
}

export default mutations