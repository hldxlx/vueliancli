<template>
  <div>
    <h1>Center</h1>
  </div>
</template>

<script>


export default {
  data(){
    return {

    }
  },
  name: 'center',
  beforeRouteEnter(to,from,next){//局部 守卫
    if(false){
      next()
    }else{
      next("/login")
    }
  }
}
</script>
