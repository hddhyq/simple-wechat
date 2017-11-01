<template>
  <div class="weixin">
    <router-link tag="div" to="/weixin/groupchat" class="enter-chat">
      <img v-lazy="imgUrl" width="50" height="50">
      <div class="text-wrapper">
        <div class="title">我们的群聊</div>
        <div class="text">就是些简单的群聊啊</div>
      </div>
      <div class="time">{{time}}</div>
    </router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <login v-if="!nickname"></login> 
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import Login from 'components/login/login'
import {imgURL} from 'api/config'
import {formatDate} from 'common/js/formatDate'

export default {
  data() {
    return {
      name: '',
      imgUrl: imgURL + 'default.jpg',
      time: this.getTime()
    }
  },
  computed: {
    ...mapGetters(['nickname'])
  },
  methods: {
    getTime() {
      let date = new Date()
      return formatDate(date, 'hh:mm')
    }
  },
  components: {
    Login
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.weixin
  .enter-chat
    display: flex
    width: 100%
    background: #fff
    border-1px($color-line)
    img
      margin: 10px 20px
    .text-wrapper
      flex: 1
      .title
        height: 40px
        line-height: 40px
        font-size: 18px
        color: #343434
      .text
        height: 30px
    .time
      flex: 0 0 70px
      margin-top: 10px
</style>