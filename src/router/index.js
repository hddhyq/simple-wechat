import Vue from 'vue'
import Router from 'vue-router'
import Weixin from 'components/weixin/weixin'
import Addresslist from 'components/addresslist/addresslist'
import Find from 'components/find/find'
import Me from 'components/me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Weixin
    },
    {
      path: '/weixin',
      component: Weixin
    },
    {
      path: '/addresslist',
      component: Addresslist
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
