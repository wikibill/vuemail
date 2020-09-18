<!--  -->
<template>
  <div class="category">
    <h2>category</h2>
    <div class="wrapper">
      <ul class="content">
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
        <li>list4</li>
        <li>list5</li>
        <li>list6</li>
        <li>list7</li>
        <li>list8</li>
        <li>list9</li>
        <li>list10</li>
        <li>list11</li>
        <li>list12</li>
        <li>list13</li>
        <li>list14</li>
        <li>list15</li>
        <li>list16</li>
        <li>list17</li>
        <li>list18</li>
        <li>list19</li>
        <li>list20</li>
        <li>list21</li>
        <li>list22</li>
        <li>list23</li>
        <li>list24</li>
        <li>list25</li>
        <li>list26</li>
        <li>list27</li>
        <li>list28</li>
        <li>list29</li>
        <li>list30</li>
        <li>list31</li>
        <li>list32</li>
        <li>list33</li>
        <li>list34</li>
        <li>list35</li>
        <li>list36</li>
        <li>list37</li>
        <li>list38</li>
        <li>list39</li>
        <li>list40</li>
        <li>list41</li>
        <li>list42</li>
        <li>list43</li>
        <li>list44</li>
        <li>list45</li>
        <li>list46</li>
        <li>list47</li>
        <li>list48</li>
        <li>list49</li>
        <li>list50</li>
        <li>list51</li>
        <li>list52</li>
        <li>list53</li>
        <li>list54</li>
        <li>list55</li>
        <li>list56</li>
        <li>list57</li>
        <li>list58</li>
        <li>list59</li>
        <li>list60</li>
        <li>list61</li>
        <li>list62</li>
        <li>list63</li>
        <li>list64</li>
        <li>list65</li>
        <li>list66</li>
        <li>list67</li>
        <li>list68</li>
        <li>list69</li>
        <li>list70</li>
        <li>list71</li>
        <li>list72</li>
        <li>list73</li>
        <li>list74</li>
        <li>list75</li>
        <li>list76</li>
        <li>list77</li>
        <li>list78</li>
        <li>list79</li>
        <li>list80</li>
        <li>list81</li>
        <li>list82</li>
        <li>list83</li>
        <li>list84</li>
        <li>list85</li>
        <li>list86</li>
        <li>list87</li>
        <li>list88</li>
        <li>list89</li>
        <li>list90</li>
        <li>list91</li>
        <li>list92</li>
        <li>list93</li>
        <li>list94</li>
        <li>list95</li>
        <li>list96</li>
        <li>list97</li>
        <li>list98</li>
        <li>list99</li>
        <li>list100</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "category",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      scroll:null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //probe侦测
    //0,1都是不侦测位置
    //2 不侦测惯性滚动
    //3 所有滚动都侦测
    this.scroll = new BScroll('.wrapper',{
      probeType:3,
      click:true,
      pullUpLoad:true
    })
    // console.log(document.querySelector('.wrapper'));
    this.scroll.on('scroll',(position)=>{
      console.log(position);
    })
    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载更多')
    })
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style>
.wrapper {
  height: 150px;
  background-color: pink;
  /* overflow-y: scroll; */
}
</style>
