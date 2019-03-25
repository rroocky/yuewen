<template>
  <div id="app">
    <keep-alive>
      <!-- 路由元信息需要被缓存的页面渲染在keepalive组件 -->
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <!-- 不需要缓存的页面渲染在这儿 -->
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
</style>
