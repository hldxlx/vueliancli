<template>
	<div>
    <!--<ul>-->
      <!--<li>-->
        <!--&lt;!&ndash;<a href="#/movie">movie</a>&ndash;&gt;-->
       <!---->
      <!--</li>-->
      <!--<li>-->
        <!--&lt;!&ndash;<a href="#/about">about</a>&ndash;&gt;-->
        <!---->
      <!--</li>-->
    <!--</ul>-->
    <nav>
        <ul>
          <router-link to="/movie" tag="li" activeClass="active">
            <i class="iconfont icon-all"></i>电影
          </router-link>
          <router-link to="/about" tag="li" activeClass="active">
            <i class="iconfont icon-all"></i>about
          </router-link>
          <router-link to="/center" tag="li" activeClass="active">center</router-link>
        </ul>
    </nav>
	</div>
</template>

<script type="text/javascript">
  import "@/assets/iconfont/iconfont.css"

  export default {
  data () {
    return {

    }

  }
  ,mounted(){
      class Box{
        constructor(){
          this.b = 11;
        }
        play(){

        }
        a=10;
      }
      // class Ball extends Box{
      // 	constructor(){
      // 		super();
      // 	}
      // }



      var bo = new Box();
      console.log(bo,'===666')
    }

}
</script>
<style lang="scss" scoped>
   .active{
     color:red;
   }
   nav{
     position: fixed;
     width: 100%;
     height: 50px;
     left:0px;
     bottom: 0px;
     background: white;
     color:black;
     line-height: 50px;
     z-index:10;
     ul{
       display: flex;
       li{
         flex:1;
         text-align: center;
       }
     }
   }
</style>
