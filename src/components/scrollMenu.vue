<template>
    <div>
        <el-dropdown split-button size="small" type="primary" @click="handleClick" trigger="click">
            创作者中心
            <el-dropdown-menu slot="dropdown">
                <router-link to="/editor">
                    <el-dropdown-item>写文章</el-dropdown-item>
                </router-link>
                <a href="javascript:;" @click="isBlockOn">
                    <el-dropdown-item>发沸点</el-dropdown-item>
                </a>
                <a href="https://code.juejin.cn/">
                    <el-dropdown-item>写代码</el-dropdown-item>
                </a>
                <router-link to="/chest">
                    <el-dropdown-item>草稿箱</el-dropdown-item>
                </router-link>
            </el-dropdown-menu>
        </el-dropdown>
        <div class="pin-container" v-if="isBlock">
            <div class="pin-box">
                <div class="pin">
                    <header>
                        发沸点
                        <a class="close" href="javascript:;" @click="isBlockOn"><i class="el-icon-close"></i></a>
                    </header>
                    <section>
                        <div class="content">
                            <el-input type="textarea" placeholder="快和掘友一起分享新鲜事！告诉你个小秘密，发布沸点时添加圈子和话题会被更多掘友看到哦～"
                                v-model="textarea" maxlength="1000" show-word-limit>
                            </el-input>
                        </div>
                        <div class="bottom">
                            <el-button type="primary" round size="mini">选择圈子</el-button>
                            <el-button round size="mini">表情</el-button>
                            <el-button round size="mini">图片</el-button>
                            <el-button round size="mini">链接</el-button>
                            <el-button round size="mini">话题</el-button>
                            <el-button type="primary" size="mini">发布</el-button>
                        </div>
                    </section>
                    <footer></footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: "",
            textarea: "",
            isBlock: false,
        };
    },
    methods: {
        handleClick() {
            this.$router.push("/creator");
        },
        isBlockOn() {
            this.isBlock = !this.isBlock;
        },
    },
};
</script>

<style lang='less' scoped>
.el-dropdown {
    vertical-align: top;
    float: right;
}

.el-dropdown+.el-dropdown {
    margin-left: 15px;
}

.el-icon-arrow-down {
    font-size: 12px;
}

.pin-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(19, 19, 19, 0.574);
    z-index: 100;
    overflow-x: hidden;
    overflow-y: hidden;

    .pin-box {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        max-width: 960px;
        z-index: 110;

        .pin {
            width: 640px;
            top: 0;
            position: absolute;
            left: 50%;
            border-radius: 2px;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
            transform: translate(-50%, 60px);
            background: white;

            header {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: #17181a;
                text-align: left;
                margin-left: 20px;
                line-height: 40px;
                height: 40px;
                font-weight: 500;

                .close {
                    margin-right: 20px;
                }
            }

            section {
                padding: 0 20px;
                position: relative;

                .content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    border-radius: 4px;
                    box-sizing: border-box;
                    padding-right: 4px;
                }

                .bottom {
                    width: 600px;
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0;
                }
            }
        }
    }
}
</style>