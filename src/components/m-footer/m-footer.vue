<template>
  <div class="m-footer">
    <router-link tag="div" class="footer-item" to="/weixin">
      <div class="icon-wrapper">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="isWeixin"></use>
        </svg>
      </div>
      <span class="text">微信</span>
    </router-link>
    <router-link tag="div" class="footer-item" to="/addresslist">
      <div class="icon-wrapper">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="isAddresslist"></use>
        </svg>
      </div>
      <span class="text">通讯录</span>
    </router-link>
    <router-link tag="div" class="footer-item" to="/find">
      <div class="icon-wrapper">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="isFind"></use>
        </svg>
      </div>
      <span class="text">发现</span>
    </router-link>
    <router-link tag="div" class="footer-item" to="/me">
      <div class="icon-wrapper">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="isMe"></use>
        </svg>
      </div>
      <span class="text">我</span>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  computed: {
    isWeixin() {
      return this.$route.path.indexOf('weixin') !== -1 ? '#icon-weixin1' : '#icon-weixin'
    },
    isAddresslist() {
      return this.$route.path.indexOf('addresslist') !== -1 ? '#icon-tongxunlu1' : '#icon-tongxunlu'
    },
    isFind() {
      return this.$route.path.indexOf('find') !== -1 ? '#icon-faxian' : '#icon-discovery-on'
    },
    isMe() {
      return this.$route.path.indexOf('me') !== -1 ? '#icon-wo1' : '#icon-wo'
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.m-footer
  display: flex
  position: fixed
  bottom: 0
  height: 50px
  text-align: center
  width: 100%
  border-1px-top($color-line)
  background-color: $color-theme-w
  .footer-item
    flex: 1
    font-size: $font-size-small
    .icon-wrapper
      margin: 3px auto
      width: 25px
      height: 25px
      .icon
        width: 25px
        height: 25px
    .text
      color: $color-text
    &.router-link-active
      .text
        color: $color-green
</style>