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
      <div class="content-wrapper">
        <ul>
          <li class="item">
            <!-- v-for="item in groupHistory" -->
            <div class="who-say i-say">
              <div class="say-time">
                2049-10-25 15:59
              </div>
              <img src="http://cangdu.org/files/images/19.jpg">
              <div class="say-triangle">
                <svg class="icon-triangle-left" aria-hidden="true">
                  <use xlink:href="#icon-triangle-left"></use>
                </svg>
              </div>
              <div class="say-text">
                hahah中国hahhahahaha
              </div>
            </div>
          </li>
          <li class="item">
            <!-- v-for="item in groupHistory" -->
            <div class="who-say">
              <div class="say-time">
                2049-10-25 15:59
              </div>
              <img src="http://cangdu.org/files/images/19.jpg" width="45px" height="45px">
              <div class="say-triangle">
                <svg class="icon-triangle-left" aria-hidden="true">
                  <use xlink:href="#icon-triangle-left"></use>
                </svg>
              </div>
              <div class="say-text">
                hahah中国hahahahahahhahahahahahhahahahahahahahahaha
              </div>
            </div>
          </li>
          <li class="item">
            <!-- v-for="item in groupHistory" -->
            <div class="who-say">
              <div class="say-time">
                2049-10-25 15:59
              </div>
              <img src="http://cangdu.org/files/images/19.jpg" width="45px" height="45px">
              <div class="say-triangle">
                <svg class="icon-triangle-left" aria-hidden="true">
                  <use xlink:href="#icon-triangle-left"></use>
                </svg>
              </div>
              <div class="say-text">
                hahah中国hahaha
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer">
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable'

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
    height: 50px
    background: $color-theme
    .back
      position: absolute
      left: 0
      top: 0
      .icon-fanhui
        display: block
        border-right: 1px solid #222
        margin: 10px 0px
        padding: 5px 20px
        width: 20px
        height: 20px
    .chat-name
      position: absolute
      left: 80px
      height: 20px
      line-height: 20px
      margin: 15px 0
      font-size: $font-size-large
      color: $color-title-text
    .group
      position: absolute
      right: 0
      top: 0
      .icon-Group
        padding: 10px 15px
        width: 30px
        height: 30px
  .content-wrapper
    position: absolute
    top: 50px
    bottom: 40px
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
          margin: 5px
          font-size: $font-size-small
        img
          display: block
          width: 40px
          height: 40px 
          margin: 10px
          margin-top: 20px
        .say-triangle
          position: absolute
          left: 52px
          top: 30px
          z-index: 1
          .icon-triangle-left
            width: 20px
            height: 20px
        .say-text
          max-width: 60%
          margin: 20px 0 8px 5px
          word-break: break-all
          background: #fff
          color: #000
          font-size: $font-size-medium
          line-height: 18px
          padding: 10px 8px
          border: 1px solid #d9d9d9
          border-radius: 8px
      .i-say
        display: flex
        flex-direction: row-reverse
        .say-time
          padding-right: 70px

</style>