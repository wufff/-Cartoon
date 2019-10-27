<template>
  <div id="app">
        <div class="g-head">
           <span class="backBt">
              <img src="./assets/back.png" alt="">
           </span>
            休闲驿站
        </div>
        <div class="g-nav_wrap">
            <navscroll></navscroll>  
            <span class="navmore" @click="showNavDtail"><img src="./assets/more.png" alt=""></span>
            <div class="navmoreContent" v-show="navShow">
               <h4>漫画分类</h4>
               <span class="deleBtn" @click="hideNav">
                   <img src="./assets/dele.png" alt="">
                 </span>
               <div class="main">
                  <span v-for="(item,index) in navs" :key="index">{{item}}</span>
               </div>
            </div>
        </div>
       <list  @func="goDtail"></list>
      
        
         
  </div>
</template>
<script>
   import list from './components/list.vue'
   import navscroll from './components/navscroll.vue';
   import { getData } from '@/api';
   export default {
      name: 'app',
      data() {
        return {
          detailData:[1, 2, 3, 4, 5],
          current: '快车',
          navShow:false,
          navs: [
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
          ],
          showDtail: false,
        }
      },
      created(){
        console.log(getData);
      },      
      methods:{
         detail(){
           this.showDtail = true;
         },
         changeHandler(cur) {
            console.log(cur)
          },
          showNavDtail(){
             this.navShow = true;
          },
          hideNav(){
            this.navShow = false;
          },
          goDtail(id){
             this.detailcamp = this.detailcamp || this.$createDetail({
                 $props:{
                    detailData:"detailData"
                 }
             })
            this.detailcamp.show(); 
          }
      },
    
      components:{
         list,
         navscroll
      }
}
</script>
<style lang="less">

 .g-head {
    height: 63px;
    background: #08ce5b;
    position: fixed;
    left:0;
    right:0;
    top:0;
    padding-top: 22px;
    font-size: 20px;
    color:#fff;
    letter-spacing: 2px;
    font-weight: bold;
    text-align: center;
    .backBt { 
       position: absolute;
       left:15px;
       top:18px;
       width: 24px;
       height: 24px;
       img {
          width: 100%;
          height: 100%;
       }
    }
 }
.g-nav_wrap { 
   position: fixed;
   left:0;
   right: 0;
   top:63px;
   background-color: #fff;
   z-index: 999;
   .navmore {
      display: block;
      position: absolute;
      right: 0px;
      top:15px;
      background: #fff;
      z-index: 99;
      width: 32px;
      height: 28px;
      img {
         height: 100%;
         float: left;
      }
   }
   .navmoreContent {
      width: 100%;
      background-color: #fff;
      position: absolute;
      top:0;
      left:0;
      right: 0;
      z-index: 999;
      padding: 20px 14px 5px 14px;
      .deleBtn {
         display: block;
         height: 11px;
         width: 11px;
         position: absolute;
         right:0px;
         top:16px;
         img{
            width: 100%;
            height: 100%;
         }
      }     
      h4 {
          font-size: 18px;
          width: 80px; 
          letter-spacing: 2px;  
          margin-bottom: 24px;
      } 
      span {
         float: left;
         color:#919191; 
         font-size: 15px;
         margin-right: 20px;
         margin-bottom: 20px;
      }
   }
}

.cube-scroll-nav-bar-item {
   padding: 20px 8px;
}
.cube-scroll-nav-bar-item > span {
    font-size: 16px;
    color: #919191;
    display:block;
    height: 100%;
}



.content {
    padding-top: 63px;
}

.cube-scroll-nav-bar-item_active  > span{
    color: #08ce5b;
    font-size: 20px;
    position: relative;
    top:-4px;
}












</style>
