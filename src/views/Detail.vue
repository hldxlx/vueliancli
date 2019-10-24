<template>
  <div>
    <!--<h1>Detail</h1>-->
    <!--<h1 ref="lunbo">滚动的距离 轮播的高度</h1>-->
    <!--<div v-if="filmInfo" v-for="item in items">-->
      <!--<img :src="filmInfo.poster" class="poster"/>-->
      <!--{{filmInfo.name}}-->
    <!--</div>-->

    <div class="cinemaCont" :style="{height:cinemaHeight}">
      <ul v-if="titles">
        <li v-for="t in titles">
          {{t.name}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

import axios from 'axios'
import BetterScroll from 'better-scroll'
import bus from '@/bus'
export default {
  name: 'detail',
  data(){
    return {
      filmInfo:null,
      items:[1,2,3,4,5],
      titles:[],
      cinemaHeight:'0px'
    }
  },
  mounted(){
    bus.$emit("kerwei",false);

    this.cinemaHeight = document.documentElement.clientHeight-50+'px';
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

    //ajax请求
    axios({
      url:`https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=5222814`,
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15718321861443109012000"}',
        'X-Host': 'mall.film-ticket.cinema.list'

      }
    }).then(res=>{
      this.titles = res.data.data.cinemas;
      this.$nextTick(() =>{
        var myscroll = new BetterScroll(".cinemaCont",{
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          },
          ////配置上拉加载
          pullUpLoad: {
            threshold: 50
          }
        });
        myscroll.on("pullingDown",()=>{
          console.log("下拉刷新了...")

          setTimeout(() => {
            this.datalist.unshift({"name":"新的数据-下拉刷新"})
            myscroll.finishPullDown();// 结束了
          }, 2000)
        })

        myscroll.on("pullingUp",()=>{
          console.log("到底了...")

          setTimeout(() => {
            this.titles.push({"name":"新的数据-上拉加载"})
             myscroll.finishPullUp();// 结束了
          }, 2000)
        })
      })
    })

    window.onscroll = this.handle;
  },
  beforeDestroy(){
    bus.$emit("kerwei",true);
  },
  methods:{
    handle(){
      if(document.documentElement.scrollTop > this.$refs.lunbo.offsetHeight){
        console.log('fixed');
      }else{
        console.log('unfixed');
      }
    },
    destroyed(){
      window.onscroll = null;
    }
  }

}
</script>
<style type="text/css" scoped>
  .poster{
    width: 100%;
  }
  li{
    height: 50px;
  }
  .cinemaCont{
    overflow: hidden;
    position: relative;/*修正滚动条位置*/
  }
</style>
