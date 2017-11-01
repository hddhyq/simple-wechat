<template>
  <transition name="slide">
    <div class="group-chat">
      <div class="header">
        <div class="back" @click="back">
          <svg class="icon-fanhui" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </div>
        <div class="chat-name">
          我们的群聊
        </div>
        <div class="group">
          <svg class="icon-Group" aria-hidden="true">
            <use xlink:href="#icon-Group"></use>
          </svg>
        </div>
      </div>
      <div class="content-wrapper" ref="chatwrapper">
        <ul>
          <li :key="item.createTime" ref="chatLine" class="item" v-for="item in chatHistory">
            <!-- v-for="item in groupHistory" -->
            <div class="who-say" :class="{ isay : item.name === nickname }">
              <div class="say-time">
                {{item.createTime | formatDate}}
              </div>
              <img width="40" height="40" v-lazy="itemImg(item)">
              <div class="say-triangle">
                <svg class="icon-triangle"  aria-hidden="true">
                  <use :xlink:href="item.name === nickname ? '#icon-triangle-right' : '#icon-triangle-left'"></use>
                </svg>
              </div>
              <div class="say-text">
                {{item.content}}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div class="icon-talk">
          <svg class="icon-yuyin" aria-hidden="true">
            <use xlink:href="#icon-yuyin"></use>
          </svg>
        </div>
        <div class="input-wrapper">
          <input type="text" class="text-input" 
                 v-model="message" maxlength="1000"
                 @keyup.enter="enterMessage" @input="whatInput">
        </div>
        <div class="send-wrapper">
          <div class="icon-smile">
            <svg class="icon-biaoqing1" aria-hidden="true">
              <use xlink:href="#icon-biaoqing1"></use>
            </svg>
          </div>
          <div class="icon-more">
            <svg class="icon-gengduo" aria-hidden="true" v-show="!light">
              <use xlink:href="#icon-gengduo"></use>
            </svg>
            <div class="send" v-show="light" @click="sendMessage">
              <span>发送</span>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import io from 'socket.io-client'
  import BScroll from 'better-scroll'
  import {getChat} from 'api/index'
  import {formatDate} from 'common/js/formatDate'
  import {mapGetters} from 'vuex'
  import {imgURL} from 'api/config'

  export default {
    data() {
      return {
        light: false,
        message: '',
        socket: null,
        imgUrl: imgURL,
        chatHistory: []
      }
    },
    computed: {
      ...mapGetters([
        'nickname',
        'avatar'
      ])
    },
    created() {
      this.socket = io.connect('http://192.168.1.107:3000')
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
      getChat().then((data) => {
        if (data.code === 200) {
          this.chatHistory = data.msg
        }
      })
      this.socket.on('boradChat', (data) => {
        this.chatHistory.push(data)
      }) // 获取socket聊天记录
    },
    methods: {
      back() {
        this.$router.back()
      },
      enterMessage() {
        if (this.light) {
          this.sendMessage()
        }
      },
      whatInput() {
        if (this.message === '') {
          this.light = false
        } else {
          this.light = true
        }
      },
      sendMessage() {
        let msgData = {
          name: this.nickname,
          content: this.message,
          avatar: this.avatar,
          createTime: Date.parse(new Date())
        }
        this.socket.emit('chat', msgData)
        this.light = false
        this.message = ''
      },
      refresh() {
        this.scroll.refresh()
        this.scrollEnd()
      },
      scrollEnd() {
        if (this.chatHistory.length > 0) {
          let el = this.$refs.chatLine[this.chatHistory.length - 1]
          this.scroll.scrollToElement(el, 100)
        }
      },
      itemImg(item) {
        let url = this.imgUrl + item.avatar
        return url
      },
      _initScroll() {
        this.scroll = new BScroll(this.$refs.chatwrapper, {
          probeType: 1,
          click: true
        })
      }
    },
    beforeDestroy() {
    },
    filters: {
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    watch: {
      chatHistory() {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    }
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.group-chat
  position: fixed
  top: 0
  bottom: 0
  width: 100%
  z-index: 100
  background: $color-theme-w
  &.slide-enter-active, &.slide-leave-active
    transition: all 0.3s
  &.slide-enter, &.slide-leave-to
    transform: translate3d(100%, 0, 0)
  .header
    position: relative
    height: 45px
    background: $color-theme
    .back
      position: absolute
      left: 0
      top: 0
      .icon-fanhui
        display: block
        border-right: 1px solid #222
        margin: 7px 0px
        padding: 5px 20px
        width: 20px
        height: 20px
    .chat-name
      position: absolute
      left: 80px
      height: 18px
      margin: 15px 0
      font-size: $font-size-large
      color: $color-title-text
    .group
      position: absolute
      right: 0
      top: 0
      .icon-Group
        padding: 7px 15px
        width: 30px
        height: 30px
  .content-wrapper
    position: absolute
    z-index: -1
    top: 45px
    bottom: 45px
    width: 100%
    background-color: $color-highlight-background
    .item
      position: relative
      .who-say
        display: flex
        flex-wrap: nowrap
        flex-direction: row
        justify-content: flex-start
        align-items: top
        .say-time
          position: absolute
          top: 0
          padding-left: 70px
          width: 100px
          margin-bottom: 5px
          font-size: $font-size-small
        img
          display: block
          margin: 15px 0px 5px 10px
        .say-triangle
          position: relative
          left: px
          top: 25px
          z-index: 1
          .icon-triangle
            width: 20px
            height: 20px
        .say-text
          max-width: 65%
          margin: 15px -7px 5px -7px
          word-break: break-all
          background: #fff
          color: #000
          font-size: $font-size-medium-x
          line-height: 18px
          padding: 10px 8px
          border: 1px solid #d9d9d9
          border-radius: 8px
      .isay
        display: flex
        flex-direction: row-reverse
        img
          display: block
          margin: 15px 10px 5px 0px
        .say-time
          padding-right: 60px
        .say-triangle
          .icon-triangle-right-copy
            width: 20px
            height: 20px
        .say-text
          background: $color-green
  .footer
    position: fixed
    z-index: 2
    display: flex
    justify-content: space-between
    bottom: 0
    height: 45px
    width: 100%
    border-1px-top($color-line)
    background: #fff
    .icon-talk
      flex: 0 0 35px
      margin: 5px
      .icon-yuyin
        width: 35px
        height: 35px
    .input-wrapper
      flex: 1
      margin-top: 8px
      .text-input
        display: block
        width: 100%
        height: 30px
        line-height: 30px
        outline: none
        border-bottom: 1px solid $color-line
        font-size: $font-size-medium-x
        &:focus
          border-bottom: 1px solid $color-green
    .send-wrapper
      flex: 0 0 105px
      position: relative
      .icon-smile
        margin: 5px
        .icon-biaoqing1
          width: 35px
          height: 35px
      .icon-more
        position: absolute
        right: 0
        top: 0
        margin: 5px
        .icon-gengduo
          margin-right: 10px
          width: 35px
          height: 35px
        .send
          width: 50px
          margin-top: 2.5px
          height: 30px
          line-height: 30px
          border-radius: 5px
          text-align: center
          font-size: $font-size-large
          background: $color-green-background
          color: $color-text-w
</style>