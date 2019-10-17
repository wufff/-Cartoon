<template>
   <div class="list">
      <cube-scroll
      ref="scroll"
      :data="datalist" 
      :options="options"
      @pulling-up="onPullingUp">
     <div class="wrap clearfix">        
             <div class="item" v-for="(item,index) in datalist">
                 <div class="imgWrap" v-bind:style="{backgroundImage:'url(' + item.img + ')'}" @click="goDtail(item.id)">
                   
                 </div>
                 <div class="info">
                     <div class="title">{{item.title}}</div>
                    <div class="title_min">{{item.title_min}}</div>                
                 </div>
             </div>             
          </div>      
    </cube-scroll>
  </div> 
</template>
<script>

     export default {
        name: 'list',
            data() {
              return {
                options:{
                   pullUpLoad: {
                      threshold: 100,
                      txt: {
                        more: '加载更多',
                        noMore: '没有更多的比赛啦'
                      }
                    }
                },
                datalist:[
                {
                  id:1,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                },
                { 
                  id:2,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                },  
                { 
                  id:3,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                }, 
                { 
                  id:4,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                },
                {
                  id:5,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                },  
                {
                  id:6,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                },
                {
                  id:1,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                },
                { 
                  id:2,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                },  
                { 
                  id:3,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                }, 
                { 
                  id:4,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                },
                {
                  id:5,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                },  
                {
                  id:6,
                  title:"七龙珠之 魔人布欧",
                  title_min:"这里是CIA要标题",
                  img:"https://c-ssl.duitang.com/uploads/item/201812/12/20181212175508_Nn2cP.thumb.700_0.jpeg",
                }                                                                    
               ]
              }
            },
            computed: {
             
            },
            mounted() {
               
            },
            methods:{
               goDtail(id){
                  this.$emit('func',id)
               },
               onPullingUp(){
                 console.log("上拉加载更多")
               }
            },
            components: {
             
            }        
     } 
</script>
<style lang="less" scoped>
   .list {
     height: 100%;
     padding-top: 123px;
     .item {
        margin: 0 2px;
        float: left;
        width: 118px;
        height: 197px;
        margin-bottom: 10px;
     }
   }
  .wrap{
    width: 366px;
    margin: 0 auto;
    .imgWrap {
       height: 152px;
       background: pink;
       width: 100%;
       background-size: cover;
       background-repeat: no-repeat;

    }
    .info {
       padding: 0 5px;
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
    .title_min {
       font-size: 12px;
       color:#919191;
       text-align: left;
       overflow: hidden;
       text-overflow:ellipsis;
       white-space: nowrap;
    }
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
</style>

