<template>
   <transition name="fade">
       <div class="detail" v-show="visible" @click="showControl">
          <div class="head" v-show="control" @click.stop="stop">
                     <span class="backBtn" @click.stop="hide">
                        <img src="../assets/back.png" alt="">
                     </span>
                     {{detailData.comic_title}} {{currut}}/{{detailData.comic_content.length}} 
          </div>                      
    	    <swiper :options="swiperOption" ref="mySwiper">
    		    <swiper-slide v-for="(slide, index) in detailData.comic_content" :key="index">
    		    	 <div class="inner">            
                  <div class="mask" v-show="!day"></div>
                  <div class="page" :style="{backgroundImage:'url(' + slide + ')'}"></div>
    		    	 </div>
    		    </swiper-slide>
    		    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    		 </swiper>
    	    <!-- Optional controls -->
    	    <div class="swiper-pagination"  slot="pagination"></div>
    	  <!--   <div class="swiper-button-prev" slot="button-prev"></div>
    	    <div class="swiper-button-next" slot="button-next"></div> -->
    	   <!--  <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    	    </swiper>
          <div class="bottom" v-show="control" @click.stop="stop">
                <span @click.stop="direction" class="derictionBt">
                   <img src="../assets/deriction.png"  v-if="direc">
                   <img src="../assets/deriction_y.png"  v-if="!direc">
                </span> 
                <span @click.stop="Cday" class="day">
                    <img src="../assets/day.png"  v-show="!day">
                    <img src="../assets/mday.png"  v-show="day">
                </span>   
          </div>
          <div class="title_c" v-show="!control">{{detailData.comic_title}} {{currut}}/{{detailData.comic_content.length}}</div>           
      </div>
  </transition> 
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';	
  export default {
    name: 'Detail',
    props:{
       detailData:{
         type:Object,
         default:{}          
       }
    },
    data() {
      var _this = this;
      return {
        currut:1,
        direc:true,
        visible:false,
        day:true,
        off:true,
        control:true,
        swiperOption:{
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
         speed:180,
         on:{
          slideChange: function () {
             _this.currut = this.activeIndex +1;
            // _this.currut = this.activeIndex;
          }
        },
          cancelable:false
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },

    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object',this.swiper)
       // console.log(this.$refs.mySwiper)
      // this.swiper.slideTo(3, 1000, false)
      // console.log(this.detailData);
    },
    methods:{
      direction(){
          this.direc = !this.direc;
          this.swiper.changeDirection();  
      },
      Cday(){
         this.day = !this.day;
      },
      show(){
            this.visible = true;
      },
      hide(){
        this.visible = false;
        this.$emit('off',true)
      },
      showControl(){
         this.control = !this.control;
      },
      stop(){
         return false;
      }
    },
    components: {
	    swiper,
	    swiperSlide
    }
  }
</script>
<style lang="less" scoped>
    .detail, .swiper-container, .swiper-wrapper .swiper-slide  { width: 100%; height: 100%;}
    .swiper-slide .inner { width: 100%;height: 100%; }
    .detail {
    	  position: fixed;
        left:0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        width: 100%;
        height: 100%;
        z-index: 9999;
       .head{
         height: 63px;
         width: 100%;
         line-height: 63px;
         position: absolute;
         top:0;
         left:0;
         font-size: 15px;
         // padding-left: 57px;
         // padding-top: 24px;
         background-color: rgba(0,0,0,0.7);
         padding-left:17px;
         color:#fff;
         z-index: 9999;
         .backBtn {
            // height: 24px;
            // width: 24px;
            // position: absolute;
            // display: block;
            // left:20px;
            // top:20px;
            position: relative;
            top:-2px;
            margin-right:13px;
            img {
               height: 24px;
               width: 24px;
               vertical-align: middle;
               // width: 100%;
               // height: 100%;
            }
         }
      }  
      .bottom {
         height: 65px;
         width: 100%;
         position: absolute;
         left:0;
         right: 0;
         bottom: 0;
          background-color:rgba(0,0,0,0.7);
         z-index: 9999;
         .derictionBt {
            display: block;
            height: 30px;
            width: 30px;
            img {
               width: 100%;
               height: 100%;
            }
            position: absolute;
            top:17px;
            left: 170px;
         }
         .day{
            position: absolute;
            width: 28px;
            height: 28px;
            display: block;
            right: 25px;
            top:19px;
            img {
               width: 100%;
               height: 100%;
            }
         }

      }  
     .title_c {
            font-size: 15px;
            color:#eee;
            padding: 7px 12px;
            background-color: rgba(0,0,0,0.3);
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 99;
         }          
    }

  .inner {
      position: relative;
      .mask {
          background-color: rgba(0,0,0,0.6);
          width: 100%;
          height: 100%;
          position: absolute;
          left:0;
          right: 0;
          bottom: 0;
          z-index: 999999;
      }       
      .page{
         background-size: contain;
         position: absolute;
         width: 100%;
         height: 100%;
         left:0;
         right: 0;
         bottom: 0;
         background-repeat: no-repeat;
         background-position: center; 
        
      }
      .mask{}

      .title_c {
         float: right;
      }
  }
    

  

  .fade-enter-active, .fade-leave-active {
     transition: .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
     transform:translateX(100%);
  }
</style>

