<template>
  <div id="nav">
    <router-link to="/"> 首页 </router-link> |
    <router-link to="/about"> 关于 </router-link>
  </div>

  <nut-tabbar @tab-switch="tabSwitch">
    <nut-tabbar-item tab-title="首页" href="" icon="home"></nut-tabbar-item>
    <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
    <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
    <nut-tabbar-item tab-title="购物车" href="https://m.jd.com" icon="cart"></nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" href="######" icon="my"></nut-tabbar-item>
  </nut-tabbar>

  <router-view />

</template>

<script>
export default {
  setup() {
    function tabSwitch(item, index) {
      console.log(index);
    }
    return {
      tabSwitch,
    };
  },
}
</script>


<style lang="scss">

</style>
