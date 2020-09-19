<!--  -->
<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
   <home-swiper :banners="banners"></home-swiper>
   <home-recommend-view :recommends="recommends"></home-recommend-view>
   <feature-view></feature-view>
   <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
   <goods-list :goods="showGoods"></goods-list>
    <back-top @click.native="backClick()"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from "@/components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "@/network/home";


// import BScroll from 'better-scroll'

// import Swiper from '@/components/common/swiper/Swiper'
// import SwiperItem from '@/components/common/swiper/SwiperItem'
// import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "home",
  components: {
    BackTop,
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,

  },
  data() {
    //这里存放数据
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType:'pop',
    };
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  //监听属性 类似于data概念
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //事件监听的相关方法
    tabClick(index){
      // console.log(index);
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType ='new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backClick(){
      console.log('click')
    },
    //网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<!-- scoped 私有 作用域 -->
<style scoped>
.home {
  padding-top: 44px;
  /* height: 100vh; */
}

.home-nav {
  background-color: pink;
  color: white;
  font-weight: 600;
  font-size: 18px;
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  left: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #ffffff;
}
.content{
/* height: 300px; */
/* margin-top: 44px; */
/* overflow: hidden; */
overflow: hidden;
position: absolute;
top: 44px;
bottom: 49px;
}
</style>
