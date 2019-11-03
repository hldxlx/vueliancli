<template>
  <div>
    <router-view></router-view>
    <!--<Tabbar v-show="computeShow"></Tabbar>-->

    <Tabbar v-show="isTab"></Tabbar>

  </div>
</template>

<script>
// 用import导入 , export default  导出
// module.exports=test;   require("")
import Vue from 'vue'
import axios from 'axios'
import Tabbar from '@/components/tabbar'
import bus from '@/bus'
import {mapState} from 'vuex'

import obj from '@/module/moduleA' //导入的第一种写法
import {bbState} from '@/module/moduleB' //导入的第二种写法

//console.log(obj,'22');
console.log(bbState,'==bbState');
export default {
  data () {
    return {
      title: '111111',
      isShow: true
    }
  },

  methods: {
    handleClick () {
      this.title = '22222222'
    }
  },
  //计算属性第一种写法
//  computed:{
//    computeShow(){
//      return this.$store.state.isTab
//    }
//  },
  //计算属性第2种写法  基本没人用 因为会覆盖computed
//  computed:mapState(["isTab"]),

  //第三种
  computed:{
    ...mapState(["isTab"])
  },
  components:{
    Tabbar
  },
  beforeMount(){
    bus.$on("kerwei",(data) =>{
      this.isShow = data;
    })
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
