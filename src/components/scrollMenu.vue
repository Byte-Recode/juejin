<template>
    <div>
        <el-dropdown
            split-button
            size="small"
            type="primary"
            @click="handleClick"
            trigger="click"
        >
            创作者中心
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>写文章</el-dropdown-item>
                <el-dropdown-item>发沸点</el-dropdown-item>
                <el-dropdown-item>写代码</el-dropdown-item>
                <el-dropdown-item>草稿箱</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$router.push("/creator")
        },
    },
};
</script>

<style>
.el-dropdown {
    vertical-align: top;
	float: right;

}
.el-dropdown + .el-dropdown {
    margin-left: 15px;
}
.el-icon-arrow-down {
    font-size: 12px;
}
</style>