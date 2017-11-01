<template>
  <transition name="slide">
    <div class="login">
    <m-header :icon="icon"></m-header>
    <div class="user-wrapper">
      <div class="input-line">
        <span class="text">账号</span>
        <input type="text" class="input-area" 
               autofocus placeholder="请填写账号" v-model="name">
        <span class="clear" @click="clearName">
          <svg class="icon-cha" aria-hidden="true">
            <use xlink:href="#icon-cha"></use>
          </svg>
        </span>
      </div>
      <div class="input-line">
        <span class="text">密码</span>
        <input type="password" class="input-area" 
               placeholder="密码随便填" v-model="password">
        <span class="clear" @click="clearPassword">
          <svg class="icon-cha" aria-hidden="true">
            <use xlink:href="#icon-cha"></use>
          </svg>
        </span>
      </div>
      <div class="submit" @click="confirm">
        <button class="submit-botton">登 录</button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import { login } from 'api/index'
import { mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      icon: false,
      name: '',
      password: ''
    }
  },
  methods: {
    clearName() {
      this.name = ''
    },
    clearPassword() {
      this.password = ''
    },
    confirm() {
      if (this.name && this.password) {
        let me = this
        login(this.name).then((res) => {
          if (res.code === 200) {
            console.log(res.user.avatar)
            me.setAvatar(res.user.avatar)
            me.setNickName(res.user.name)
            me.name = ''
            me.password = ''
          }
        })
      } else {
        alert('请重新注册') // 后期添加弹窗组件
      }
    },
    ...mapMutations({
      setNickName: 'SET_NICKNAME',
      setAvatar: 'SET_AVATAR'
    })
  },
  computed: {
    ...mapGetters(['nickname', 'avatar'])
  },
  components: {
    MHeader
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable'

.login
  position: fixed
  z-index: 100
  top: 0
  bottom: 0
  width: 100%
  background: #fff
  .user-wrapper
    position: relative
    top: 20px
    width: 90%
    margin: 0 auto
    .input-line
      text-align: center
      margin: 15px
      .text
        position: absolute
        margin-top: 8px
        font-size: 18px
        color: #343434
      .input-area
        width: 60%
        padding: 0 8% 10px 30%
        height: 30px
        font-size: 20px
        outline: none
        border-bottom: 1px solid #d4d4d4
        &:focus
          border-bottom: 1px solid $color-green
        &::placeholder
          font-size: 16px
          color: #b2b2b2
      .clear
        position: absolute
        margin-top: 10px
        right: 5%
        .icon-cha
          width: 15px
          height: 15px
    .submit
      margin-top: 30px
      padding: 0 15px
      .submit-botton
        width: 100%
        height: 40px
        text-align: center
        text-decoration: none
        background: #1aad19
        color: #fff
        font-size: 20px
        border: 1px solid #179e16
        border-radius: 4px
        outline: none

.slide-enter-active, .slide-leave-active
  transition: all 0.5s
.slide-enter, .slide-leave-to
  transform: translate3d(0, -100%, 0)             
</style>