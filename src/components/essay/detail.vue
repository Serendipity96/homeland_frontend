<template>
    <div class="container">
        <h1 class="title">{{content.title}}</h1>
        <p>
            {{content.passage}}
        </p>
    </div>
</template>

<script>
  export default {
    name: "detail",
    data() {
      return {
        content: {
          title: '标题',
          passage: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生' +
            '活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以室内设计作为一门新兴的学科，尽管还只是近数' +
            '十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
    .container {
        margin: 80px 200px;
        .title {
            margin-bottom: 32px;
            font-size: 36px;
            font-weight: 700;
        }

        p {
            line-height: 24px;
            font-size: 14px;
        }
    }
</style>
