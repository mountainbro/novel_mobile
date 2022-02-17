<template>
  <div class="layout_container">
    <router-view />

    <!-- 底部tabbar -->
    <div class="tabbar">
      <router-link to="/">
        <i class="icon icon-shuchengmoren"></i>
        <p>书城</p>
      </router-link>
      <router-link to="/rank">
        <i class="icon icon-fenlei"></i>
        <p>排行榜</p>
      </router-link>
      <router-link to="/bookshelf">
        <i class="icon icon-shujia"></i>
        <p>书架</p>
      </router-link>
      <router-link to="my">
        <i class="icon icon-wode"></i>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style lang='less' scoped>
.layout_container {
  min-height: 100vh;
  background-color: var(--main-bg);
  .tabbar {
    position: fixed;
    background-color: var(--box-bg);
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px -10px 20px var(--shadow);

    a {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      color: var(--icon-color);
      &.router-link-exact-active{
        // opacity: .5;
        color: calc(var(--icon-color) * 1.2);
      }
      .icon {
        font-size: 20x;
      }
      p {
        font-size: 10px;
      }
    }
  }
}
</style>
