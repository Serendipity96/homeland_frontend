<template>
    <div class="tabs">
        <router-link tag="div" class="tab-item" to="/essay">
            <span class="tab-word">文章</span>
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {name: "tabs"}
</script>

<style scoped lang="less" rel="stylesheet/less">
    @import "../../../common/style/variable";

    .tabs {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        .tab-item {
            text-align: center;
            cursor: pointer;
            padding-right: 10px;
            .tab-word {
                color: @color-text;
            }
        }
        .router-link-active .tab-word {
            color: @color-text-highlight;
        }
    }
</style>
