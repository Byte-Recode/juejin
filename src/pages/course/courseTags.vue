<template>
    <div class="outer">
        <ul>
            <ul>
                <li v-for="(t, index) in tagList" :key="index">
                    <a href="javascript:;">{{ t }}</a>
                </li>
            </ul>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tagList: [
                "全部",
                "后端",
                "前端",
                "Android",
                "iOS",
                "人工智能",
                "开发工具",
                "代码人生",
                "阅读",
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.outer {
    border-bottom: 1.5px solid #e6e6e6;
    background: #ffffff;
    box-shadow: 0px 2px 5px 0px rgb(239, 239, 239);
    > ul {
        width: 63%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #717171;
        font-size: 12px;
        height: 40px;
        > ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
                > a {
                    color: #717171;
                    font-size: 12px;
                    padding: 0 12px;
                    &:hover {
                        color: rgb(56, 113, 247);
                    }
                }
            }
        }
        > a {
            color: #717171;
            font-size: 12px;
        }
    }
}
</style>