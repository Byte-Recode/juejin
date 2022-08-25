<template>
    <div id="search-container">
        <el-input placeholder="探索稀土掘金" v-model="input3"
            :class="{ 'input-with-select': true, 'el-input-react': issearchbig }" size="small">
            <el-button slot="append" size="small" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input3: "",
            isActive: false,
        };
    },
    props: {
        issearchbig: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handlerClass() {
            this.isActive = !this.isActive;
        }
    }
};
</script>

<style lang="less" scoped>
#search-container {

    .el-input {
        float: right;
        width: 242px;
    }

    .el-input-react {
        width: 362px;
    }

    .input-with-select {
        background-color: #fff;
    }
}
</style>