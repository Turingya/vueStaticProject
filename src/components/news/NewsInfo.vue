<!--
 * @Author: turingchang@outlook.com
 * @Date: 2019-09-27 13:44:51
 * @LastEditors: turingchang@outlook.com
 * @LastEditTime: 2019-09-27 18:54:05
 * @Description: 
 -->
<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
            <span>点击次数：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            //将url地址中传递过来的id值挂载到data上，方便以后调用
            id:this.$route.params.id,
            newsinfo:{}//新闻对象
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        // getNewsInfo() {
        //     this.$http.get('api/getnew/' + this.id).then(result =>{
        //         if(result.body.status == 1){
        //            this.newsinfo = result.body.message[0]; 
        //         }else{
        //             Toast('获取失败')
        //         }    
        //     })
        // }
        async getNewsInfo(){
				let newsinfo = await this.$api.json('newsinfo');
				// let newsinfo = list
				// 根据id传值请求才会出现
				this.newsinfo = newsinfo[0];
			},
    },
    components:{
        'comment-box': comment
    }
}
</script>
<style lang="scss">
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 26px;
            text-align: center;
            margin: 15px 0;
            color: red
        }
        .subtitle{
            font-size: 13px;
            display: flex;
            justify-content: space-between;
            color: blue
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>