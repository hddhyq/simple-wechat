import axios from 'axios'
import {URL} from './config'

export function getChat() {
  const url = URL + '/history'

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function login(name) {
  const url = URL + '/login'

  return axios.get(url, {
    params: {
      username: name
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}