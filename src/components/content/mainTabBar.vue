<template>
  <div id="maintabbar">
    <tab-bar>
      <tab-bar-item path='/home'>
        <!-- <div slot="active">活跃首页</div> -->
        <img slot="item-icon" src="@/assets/images/home-2-line.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <!-- <div slot="active">活跃分类</div> -->
        <img slot="item-icon" src="@/assets/images/icon.svg" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <!-- <div slot="active">活跃购物车</div> -->
        <img slot="item-icon" src="@/assets/images/gouwuche.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <!-- <div slot="active">活跃我的</div> -->
        <img slot="item-icon" src="@/assets/images/wode.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "maintabbar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>

</style>
