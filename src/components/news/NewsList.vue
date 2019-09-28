<!--
 * @Author: turingchang@outlook.com
 * @Date: 2019-09-27 13:44:51
 * @LastEditors: turingchang@outlook.com
 * @LastEditTime: 2019-09-27 16:08:48
 * @Description: 
 -->
<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newList" 
            :key="item.id">
                <router-link :to="'newsinfo/' + item.id">
                    <!-- <img class="mui-media-object mui-pull-left" src="http://img2.imgtn.bdimg.com/it/u=2153110698,3430135494&fm=26&gp=0.jpg"> -->
                     <img class="mui-media-object mui-pull-left" :src="item.image_url">
                    <div class="mui-media-body">
                        <!-- <h1>英俊</h1> -->
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <!-- <span>发表时间：2019-08-20 14：36：30</span> -->
                            <span>发表时间：{{item.add_time | dateFormat }}</span>
                            <!-- <span>点击：0次</span> -->
                            <span>点击：{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            newList:[]
        }
    },
    created(){
        this.getNewsList();
    },
    methods: {
        // getNewsList(){
        //     this.$http.get('api/getnewslist').then(result => {
        //         if(result.body.status==0){
        //             console.log("ok")
        //             // this.newList = result.body.message;
        //         }else{
        //             Toast('获取失败')
        //         }
        //     })
        // }
        async getNewsList(){
        let newList = await this.$api.json('getnewslist');
        this.newList = newList
      },
    },
}
</script>
<style lang="scss" scope>
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between; 
            }
        }
    }
</style>