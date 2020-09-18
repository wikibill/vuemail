<template>
   <!-- ref/children -->
    <!-- ref如果是绑定在组件中的,那么通过this.$refs.refname获取到的是一个组件对象 -->
    <!-- ref如果是绑定在普通元素中,那么通过this.$refs.refname获取到的是一个元素对象 -->
  <div class="wrapper" ref=''>
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    name:'Scroll',
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
    this.scroll = new BScroll('.wrapper',{
      
    })
    }
  }
</script>

<style>
</style>
