<template>
    <div id="sidebar-container" :class="{ 'sidebar-fixed': isfixed }" :style="{ width: width + 'px' }">
        <ul>
            <li class="first">
                <div class="top">
                    <div class="left">
                        <i class="el-icon-date"></i><span>下午好!</span>
                    </div>
                    <div class="right">
                        <el-button type="primary" round size="mini">签到</el-button>
                    </div>
                </div>
                <div class="bottom">
                    <p>你已经连续签到 <span>0</span> 天</p>
                </div>
            </li>
            <div>
                <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/addd03fc12614209b6e0c81669f17703~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
                    alt="" />
            </div>
            <div>
                <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0cad2a115ea4118bf43f7d815d2cfbe~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
                    alt="" />
            </div>
            <div>
                <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e98ddb1fa7443e8a8fd7c81f6d2b9eb~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
                    alt="" />
            </div>
            <li class="arCode">
                <div class="left">
                    <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" alt="" />
                </div>
                <div class="right">
                    <p>下载稀土掘金APP</p>
                    <p>一个帮助开发者成长的社区</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    props: {
        width: {
            type: Number,
            default: 240
        },
        isfixed: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang='less' scoped>
.sidebar-fixed {
    top: 30px;
    position: fixed;
}

#sidebar-container {

    ul {
        width: 100%;

        .first {
            padding: 16px;
            background-color: #fff;
            box-sizing: border-box;
            width: 100%;
            height: 96px;
            margin-bottom: 16px;
            background: white;

            .top {
                margin: 0 auto;
                height: 32px;
                width: 208px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .left {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 20px;

                    span {
                        margin-left: 15px;
                    }
                }
            }

            .bottom {
                font-size: 16px;
                text-align: center;
                margin-top: 10px;

                span {
                    color: rgb(47, 151, 230);
                }
            }
        }

        >div {
            background-color: #fff;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
            border-radius: 2px;
            margin-bottom: 1.3rem;
            width: 100%;
            aspect-ratio: 1.2;
            color: #333;

            img {
                border-radius: 2px;
                width: 100%;
                height: 100%;
            }
        }

        .arCode {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            background: white;

            .left {
                width: 50px;
                height: 50px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .right {
                margin-left: 10px;
                font-size: 10px;

                p {
                    &:first-child {
                        font-size: 14px;
                        font-weight: 500;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
}
</style>