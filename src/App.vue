<template>
  <div id="app">
        <div class="g-head">
           <span class="backBt">
              <img src="./assets/back.png" alt="">
           </span>
            休闲驿站
        </div>
        <div class="g-nav_wrap">
            <navscroll :navData="navData"  @resList="getList"  ref="navscroll"></navscroll>  
            <span class="navmore" @click="showNavDtail"><img src="./assets/more.png" alt="" v-show="navData.data.length > 4"></span>
            <div class="navmoreContent" v-show="navShow">
               <h4>漫画分类</h4>
               <span class="deleBtn" @click="hideNav">
                   <img src="./assets/dele.png" alt="">
                 </span>
               <div class="main">
                  <span v-for="(item,index) in navData.data" 
                  :key="index" 
                  :class="{active:index == navData.current}" 
                  @click="choice(index,item.class_id)"
                  >{{item.class_name}}</span>
               </div>
            </div>
        </div>
        <list  @func="goDtail" :datalist="datalist" ref="list"></list>
  </div>
</template>
<script>
   import list from './components/list.vue'
   import navscroll from './components/navscroll.vue';
   import { getlist , getNav ,getDtail } from '@/api';
   export default {
      name: 'app',
      data() {
        return {
          navData:{
            data:[],
            current:0,
            currentId:0
          },
          datalist:[],
          current:0,   
          detailData:{},
          navShow:false,
          navs: [],
          Off:true,
          showDtail: false,
        }
      },
      created(){
          getNav().then((res)=>{
             this.navData.data = res.data;
             this.navData.data.unshift({class_name:"全部",class_id:0});
             this.navData.currentId = res.data[0].class_id;  
             this.getList();
          })
      },      
      methods:{
         detail(){
           this.showDtail = true;
         },
          showNavDtail(){
             this.navShow = true;
          },
          hideNav(){
            this.navShow = false;
          },
          datailOff(boon){
             this.Off = true;
          },
          goDtail(id){
             var _this = this;
            if(_this.Off){
              _this.Off = false;
             getDtail({id:id}).then((res)=>{
                _this.detailData = res.data;
                _this.detailcamp =  _this.$createDetail({
                     $props:{
                        detailData:_this.detailData,
                     },
                     $events:{
                        off:_this.datailOff
                     }
                  })
                 _this.detailcamp.show();         
             })
            } 
          },
          choice(index,class_id){
              this.$refs.navscroll.choice(index,class_id);
          },
          getList(){
               getlist({id:this.navData.currentId}).then((res)=>{
                  console.log(res.data)
                  this.datalist = res.data;
             })                 
          },
          getDtail(id){

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
     span.active {
       color:#08ce5b;
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
