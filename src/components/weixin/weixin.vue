<template>
  <div>
    <br>
    <div>
    <router-link tag="div" to="/weixin/groupchat" class="enter-chat">点击进入群聊</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <br>
    <div v-show="!nickname">
    <input type="text" v-model="name" class="inputname" 
           placeholder="请输入昵称">
    <button @click="confirm">确定</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import {mapMutations, mapGetters} from 'vuex'

export default {
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapGetters([
      'nickname'
    ])
  },
  methods: {
    confirm() {
      this.setNickName(this.name)
      this.name = ''
      console.log(this.nickname)
    },
    ...mapMutations({
      setNickName: 'SET_NICKNAME'
    })
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.enter-chat
  font-size: 24px
</style>