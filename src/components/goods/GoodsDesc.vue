<!--
 * @Author: turingchang@outlook.com
 * @Date: 2019-09-27 13:44:51
 * @LastEditors: turingchang@outlook.com
 * @LastEditTime: 2019-09-27 18:33:40
 * @Description: 
 -->
<template>
  <div class="goodsdesc-container">
    <h3>{{ info.title }}</h3>
    <hr>

    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {} // 图文数据
    };
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    // getGoodsDesc() {
    //   this.$http
    //     .get("api/goods/getdesc/" + this.$route.params.id)
    //     .then(result => {
    //       if (result.body.status === 0) {
    //         this.info = result.body.message[0];
    //       }
    //     });
    // }
    
    async getGoodsDesc(){
        let getdesc = await this.$api.json('getdesc');
        this.info = getdesc[0]
      },
  }
};
</script>

<style lang="scss">
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>
