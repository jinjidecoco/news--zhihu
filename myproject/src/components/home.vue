<template>
  <div class='home'>
     <sideBar></sideBar>
     <swiper></swiper>
     <newlist></newList>
  </div>
</template>

<script >
  import sideBar from './sideBar';
  import swiper from  './swiper';
  import newlist from './newLists';

  export default{
    name:'home',
    components:{
      sideBar,swiper,newlist
    }

  } 

</script>

<style lang='less' scoped>
  
</style>