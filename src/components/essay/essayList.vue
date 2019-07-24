<template>
    <div>
        <button @click="toWrite">
            +
        </button>
        <div class="item" v-for="essay in essayList" :key="essay.id">
            <essay :essay="essay">
            </essay>
        </div>
    </div>


</template>

<script type="text/ecmascript-6">
  import essay from './essay'

  export default {
    name: "essayList",
    components: {
      essay: essay
    },
    data() {
      return {
        essayList: [
          {
            id: 1,
            title: '标题',
            abbr: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以',
          },
          {
            id: 2,
            title: '标题',
            abbr: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以',
          },
          {
            id: 3,
            title: '标题',
            abbr: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以',
          }
        ]
      }
    },
    methods: {
      toWrite() {
        this.$router.push({path: '/essay/edit'})
      }
    }
  }
</script>

<style lang="less" scoped>
    @import "../../common/style/variable";

    button {
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 10px 15px;
        background: @color-text-highlight;
        color: @color-text-white;
        border: none;
        border-radius: 50%;
        font-size: 18px;
        cursor: pointer;
    }

    .item {
        width: 550px;
        margin: 80px auto;
    }


</style>
