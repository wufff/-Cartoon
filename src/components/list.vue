<template>
   <div class="list">
     <!--  <cube-scroll
      ref="scroll"
      :data="datalist" 
      :options="options"
      @pulling-up="onPullingUp"> -->

 <cube-scroll
      ref="scroll"
      :data="datalist" 
      :options="options"
      @pulling-up="onPullingUp"
      >    
     <div class="wrap clearfix">        
             <div class="item" v-for="(item,index) in datalist">
                 <div class="imgWrap" v-bind:style="{backgroundImage:'url(' + item.comic_cover + ')'}" @click="goDtail(item.comic_id)">
                   
                 </div>
                 <div class="info">
                     <div class="title">{{item.comic_title}}</div>
                   <!--  <div class="title_min">{{item.title_min}}</div>       -->          
                 </div>
             </div>             
          </div>      
    </cube-scroll>
  </div> 
</template>
<script>
     export default {
        name: 'list',
           props:{
              datalist: {
               type:Array,
               default: []
              },

           },
           data() {
              return {
                options:{
                   click:true,
                   tap:true,
                   bounce:false,
                   pullUpLoad: {
                      threshold: 100,
                      txt: {
                        more: '加载更多',
                        noMore: '没有更多数据啦'
                      }
                    }
                },
                page:2
              }
            },
            computed: {
               
            },
            created(){
              
            },
            mounted() {
               
            },
            methods:{
               goDtail(id){
                  this.$emit('func',id)
               },
               onPullingUp(){
                  this.$emit('loadmore',this.page);
                  this.page ++;
               },
               finish(){
                 this.$refs.scroll.forceUpdate();
               },
               initPage(){
                 this.$refs.scroll.scrollTo(0,0,0);
                 this.page = 2;
               }
            },
            components: {
             
            }        
     } 
</script>
<style lang="less" scoped>

   .list {
     height: 100%;
     padding-top: 122px;
     .item {
        margin: 0 2px;
        float: left;
        width: 118px;
        height: 190px;
        margin-bottom: 5px;
        background: #fff;
     }
   }
  .wrap{
    width: 366px;
    margin: 0 auto;
    .imgWrap {
       height: 152px;
       width: 100%;
       background-size: cover;
       background-repeat: no-repeat;

    }
    .info {
       padding: 5px;
    }
    .title{
      font-size: 15px;
      color: #373641;
      line-height: 30px;
      text-align: left;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    // .title_min {
    //    font-size: 12px;
    //    color:#919191;
    //    text-align: left;
    //    overflow: hidden;
    //    text-overflow:ellipsis;
    //    white-space: nowrap;
    // }
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
 
</style>

