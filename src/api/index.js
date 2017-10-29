import axios from 'axios'
import {URL} from './config'

export function getChat() {
  const url = URL + '/history'

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}