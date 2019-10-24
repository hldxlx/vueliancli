<template>
  <div class="home">
    <h1>home</h1>
    <div class="swiper-container kerwin">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide a</div>
        <div class="swiper-slide">Slide b</div>
        <div class="swiper-slide">Slide c</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <!--         <div class="swiper-scrollbar"></div>
       -->    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'

export default {
  name: 'home',
  mounted(){new Swiper ('.kerwin',{
    pagination: {
      el: '.swiper-pagination',
    },
    // direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })

  }

}
</script>
