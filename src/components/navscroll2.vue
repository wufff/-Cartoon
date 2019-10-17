<template>
  <div id="topNav" class="swiper-container">
  <div class="swiper-wrapper">
   <!--  <div class="swiper-slide active"><span>推荐</span></div>
    <div class="swiper-slide"><span>热点</span></div>
    <div class="swiper-slide"><span>深圳</span></div>
    <div class="swiper-slide"><span>视频</span></div>
    <div class="swiper-slide"><span>社会</span></div>
    <div class="swiper-slide"><span>娱乐</span></div>
    <div class="swiper-slide"><span>科技</span></div>
    <div class="swiper-slide"><span>问答</span></div>
    <div class="swiper-slide"><span>汽车</span></div>
    <div class="swiper-slide"><span>财经</span></div>
    <div class="swiper-slide"><span>军事</span></div>
    <div class="swiper-slide"><span>体育</span></div>
    <div class="swiper-slide"><span>段子</span></div>
    <div class="swiper-slide"><span>美女</span></div>
    <div class="swiper-slide"><span>国际</span></div>
    <div class="swiper-slide"><span>趣图</span></div>
    <div class="swiper-slide"><span>健康</span></div>
    <div class="swiper-slide"><span>特产</span></div>
    <div class="swiper-slide"><span>房产</span></div> -->
    <div class="swiper-slide" v-for="(slide,index) in swiperSlides" :key="index">
        <span>{{slide}}</span>
    </div>
  </div>
</div>

</template>
<script>
     import { swiper, swiperSlide } from 'vue-awesome-swiper';  
     export default {
        name: 'navscroll',
            data() {
            return {
            swiperOption: {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto',              
                cancelable:false
            },           
            swiperSlides: [
                  '快车',
                  '小巴',
                  '专车',
                  '顺风车',
                  '代驾',
                  '公交',
                  '自驾租车',
                  '豪华车',
                  '二手车',
                  '出租车'
                ]
             }           
            },
           computed: {
              swiper() {
                return this.$refs.mySwiper.swiper
              }
            },
            mounted() {
                // let swiperContainer = document.querySelector(".swiper-container");
                // let slides = document.querySelectorAll(".swiper-slide");
                // console.log(this.$refs.mySwiper);
                // var swiperWidth = this.swiper.container[0].clientWidth
                // var swiperWidth = this.swiper.container[0].clientWidth
                // var maxTranslate = this.swiper.maxTranslate();
                // var maxWidth = -maxTranslate + swiperWidth / 2;
                // console.log(swiperWidth);
                 let mySwiper = new Swiper('#topNav', {
                    freeMode: true,
                    freeModeMomentumRatio: 0.5,
                    slidesPerView: 'auto',              
                    cancelable:false
                  });
                  let swiperContainer = document.querySelector(".swiper-container");
                  let slides = document.querySelectorAll(".swiper-slide");
                  var swiperWidth = mySwiper.container[0].clientWidth;
                  console.log(mySwiper.container[0]);
                  var maxTranslate = mySwiper.maxTranslate();
                  var maxWidth = -maxTranslate + swiperWidth / 2
                  // $(".swiper-container").on('touchstart', function(e) {
                  //  e.preventDefault()
                  // })
                  swiperContainer.onclick = function (e){
                      e.preventDefault();
                  }
                  mySwiper.on('tap', function(swiper) {
                    console.log(swiper)
                    var slide = swiper.slides[swiper.clickedIndex];
                    var slideLeft = slide.offsetLeft;
                    var slideWidth = slide.clientWidth;
                    var slideCenter = slideLeft + slideWidth / 2
                    // 被点击slide的中心点
                    mySwiper.setWrapperTransition(300);
                    if (slideCenter < swiperWidth / 2) {
                      mySwiper.setWrapperTranslate(0)
                    } else if (slideCenter > maxWidth) {
                      mySwiper.setWrapperTranslate(maxTranslate)
                    } else {
                      var nowTlanslate = slideCenter - swiperWidth / 2
                      mySwiper.setWrapperTranslate(-nowTlanslate)
                    }
                    slides.forEach((slide)=>{
                          slide.classList.remove("active");
                    })
                    slides[swiper.clickedIndex].classList.add("active");
                  })
            },
            methods:{
             
            },
            components: {
             
            }        
     } 
</script>
<style lang="less" scoped>
 #topNav {
  width: 100%;
  overflow: hidden;
  font-size:15px;
}
#topNav .swiper-slide {
  letter-spacing:2px;
  width:90px;
  padding: 22px 12px;
  text-align:center;
  width:auto;
  box-sizing: border-box;
}
#topNav .swiper-slide span{
  display:block;
  color: #919191;
}

#topNav .active span{
  transform:scale(1.2);
  position: relative;
  top:-1PX;
  color:#08ce5b;  
}
</style>

