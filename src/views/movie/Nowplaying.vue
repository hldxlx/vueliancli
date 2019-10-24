<template>
  <div>
    <h1>nowplaying</h1>
    <ul>
      <li v-for="data in dataList" :key="data" @click="handle(data)">{{data}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        dataList:[4671,4672,4673]
      }
    },
    methods:{
      handle(id){
        //跳转路由 编程式导航-路径跳转
//        this.$router.push(`/detail/${id}`)


        //跳转路由 编程式导航-   也可以通过路由的名字来跳转
        this.$router.push({
          name:"detail",
          params:{
            binsomid:id
          }
        })
      }
    }
  }
</script>
