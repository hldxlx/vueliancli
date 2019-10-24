<template>
  <div class="movie">
    <h1>电影movie</h1>
    <Movieheader></Movieheader>
    <router-view></router-view>
  </div>
</template>
<script>
  import Movieheader from '@/views/movie/Movieheader'
  export default {
    data () {
      return {

      }
    },
    components:{
      Movieheader
    }
  }
</script>
