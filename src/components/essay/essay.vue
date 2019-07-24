<template>
    <div>
        <h1 class="title">{{essay.title}}</h1>
        <p class="abbr">{{essay.abbr}}</p>
        <a class="detail" @click="toDetail(essay.id)">阅读全文</a>
    </div>
</template>

<script>

  export default {
    name: "essay",
    props: ['essay'],
    methods:{
      toDetail(id){
        this.$router.push({ path: `essay/detail/${id}` })
      }
    }
  }
</script>

<style lang="less" scoped>
    @import "../../common/style/variable";
    .title {
        font-size: 24px;
    }

    .abbr {
        margin: 32px 0 12px 0;
        line-height: 37px;
    }

    .detail{
        cursor: pointer;
        font-size: 12px;
        color: @color-text-highlight;
    }
</style>
