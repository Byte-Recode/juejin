<template>
    <div>
        <router-view></router-view><!-- 标签列表组件 -->
        <section>课程</section>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
div {
    section {
        margin: 0 auto;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        width: 63%;
        background: #ffffff;
    }
}
</style>