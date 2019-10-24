<template>
  <div>
    <h1>Detail</h1>
    <h1 ref="lunbo">滚动的距离 轮播的高度</h1>
    <div v-if="filmInfo" v-for="item in items">
      <img :src="filmInfo.poster" class="poster"/>
      {{filmInfo.name}}
    </div>

  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'detail',
  data(){
    return {
      filmInfo:null,
      items:[1,2,3,4,5]
    }
  },
  mounted(){
    //获取动态路由的参数
    console.log(this.$route.params.binsomid,'===666');

    //ajax请求
    axios({
      url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.binsomid}&k=3431057`,
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"154277371928424093566579"}',
        'X-Host': 'mall.film-ticket.film.info'

      }
    }).then(res=>{
      this.filmInfo = res.data.data.film;
    })

    window.onscroll = this.handle;
  },
  methods:{
    handle(){
      if(document.documentElement.scrollTop > this.$refs.lunbo.offsetHeight){
        console.log('fixed');
      }else{
        console.log('unfixed');
      }
    }
  }

}
</script>
<style type="text/css" scoped>
  .poster{
    width: 100%;
  }
</style>
