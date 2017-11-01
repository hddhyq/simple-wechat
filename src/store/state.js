import {getName, getAvatar} from 'common/js/cache'

const state = {
  nickname: getName(),
  avatar: getAvatar()
}

export default state