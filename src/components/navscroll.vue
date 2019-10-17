<template>
  <div id="topNav">
   <!--  <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide,index) in swiperSlides" :key="index">
          <span>{{slide}}</span>
      </div>
    </div> -->

  <swiper :options="swiperOption" ref="mySwiperNav">
            <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
                  <span>{{slide}}</span>
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>   

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
              swiperNav() {
                return this.$refs.mySwiperNav.swiper
              }
            },
            mounted() {
                var swiperWidth = this.swiperNav.el.clientWidth
                var maxTranslate = this.swiperNav.maxTranslate();
                var maxWidth = -maxTranslate + swiperWidth / 2;
                let swiperContainer = this.swiperNav.el;
                let slides = this.swiperNav.el.querySelectorAll(".swiper-slide")
                swiperContainer.onclick = function (e){e.preventDefault()}
                var _this = this;                
                this.swiperNav.on('tap', function(swiper) {
                     var slide = slides[_this.swiperNav.clickedIndex]; 
                     var slideLeft = slide.offsetLeft;
                     var slideWidth = slide.clientWidth;
                     var slideCenter = slideLeft + slideWidth / 2;
                     _this.swiperNav.setTransition(300);
                    if (slideCenter < swiperWidth / 2) {
                        _this.swiperNav.setTranslate(0);
                    }else if (slideCenter > maxWidth) {
                       _this.swiperNav.setTranslate(maxTranslate);
                    } else {
                        var nowTlanslate = slideCenter - swiperWidth / 2;
                        _this.swiperNav.setTranslate(-nowTlanslate);
                    }
                    slides.forEach((slide)=>{
                          slide.classList.remove("active");
                    })     
                    slides[_this.swiperNav.clickedIndex].classList.add("active");                
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

