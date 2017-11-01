import * as types from './mutation-types'

const mutations = {
  [types.SET_NICKNAME](state, name) {
    state.nickname = name
    window.localStorage.setItem('name', name)
  },
  [types.SET_AVATAR](state, avatar) {
    state.avatar = avatar
    window.localStorage.setItem('avatar', avatar)
  }
}

export default mutations