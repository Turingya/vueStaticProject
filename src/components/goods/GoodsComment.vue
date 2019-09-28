<!--
 * @Author: turingchang@outlook.com
 * @Date: 2019-09-27 13:44:51
 * @LastEditors: turingchang@outlook.com
 * @LastEditTime: 2019-09-27 13:44:51nn
 * @Description: 
 -->
<template>
  <div>
    <cmtbox :id="$route.params.id"></cmtbox>
  </div>
</template>

<script>
import cmtbox from "../subcomponents/comment.vue";

export default {
  components: {
    cmtbox
  }
};
</script>

<style lang="scss" scoped>

</style>
