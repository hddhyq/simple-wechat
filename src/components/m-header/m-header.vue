<template>
  <div class="m-header">
    <div class="text">
      微信
    </div>
    <div v-show="icon">
      <router-link tag="div" class="search" to="/search">
        <svg class="icon-sousuo" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </router-link>
      <div class="jia">
        <svg class="icon-jia" aria-hidden="true">
          <use xlink:href="#icon-jia"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    icon: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable'

.m-header
  position: relative
  height: 45px
  color: $color-text-w
  background-color: $color-theme
  align-content: top
  .text
    display: inline-block
    margin-top: 12px
    margin-left: 15px
    font-size: 20px
    color: $color-title-text
  .search
    position: absolute
    top: 0
    right: 70px
    .icon-sousuo
      padding: 12px
      width: 20px
      height: 20px
  .jia
    position: absolute
    top: 0
    right: 10px
    .icon-jia
      padding: 12px
      width: 20px
      height: 20px
</style>