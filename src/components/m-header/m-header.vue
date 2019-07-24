<template>
    <div class="header">
        <div class="logo"><span>logo</span></div>
        <tabs></tabs>
        <div class="login"><span>登录</span></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import tabs from "./tabs/tabs";

    export default {
        name: "m-header",
        components: {tabs}
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    @import "../../common/style/variable";
    .header{
        height: 100px;
        line-height: 100px;
        display: flex;
        border:1px solid @color-text-highlight;
        .logo,.login{
            width: 150px;
            text-align: center;
        }
    }
</style>
