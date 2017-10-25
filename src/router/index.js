import Vue from 'vue'
import Router from 'vue-router'
import Weixin from 'components/weixin/weixin'
import Addresslist from 'components/addresslist/addresslist'
import Find from 'components/find/find'
import Me from 'components/me/me'
import GroupChat from 'components/group-chat/group-chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/weixin'
    },
    {
      path: '/weixin',
      component: Weixin,
      children: [
        {
          path: 'groupchat',
          component: GroupChat
        }
      ]
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
    // {
    //   path: '/groupchat',
    //   component: GroupChat
    // }
  ]
})
