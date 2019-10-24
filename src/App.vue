<template>
  <div>
    <router-view></router-view>
    <Tabbar></Tabbar>

  </div>
</template>

<script>
// 用import导入 , export default  导出
// module.exports=test;   require("")
import Vue from 'vue'
import axios from 'axios'
import Tabbar from '@/components/tabbar'

export default {
  data () {
    return {
      title: '111111',
      isShow: false
    }
  },

  methods: {
    handleClick () {
      this.title = '22222222'
    }
  },
  components:{
    Tabbar
  },
  mounted(){

    axios.get('/ajax/movieOnInfoList?token=').then(res =>{
      console.log(res);
    })

    axios.get('/json/test.json').then(res =>{
      console.log(res.data,66);
    })

  }
}
</script>

<style>

   *{
    margin: 0;
    padding: 0;
   }

   html,body{
    height: 100%;
   }
  .swiper-container{
    height: 300px;
  }
</style>
