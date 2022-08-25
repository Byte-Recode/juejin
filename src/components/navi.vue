<template>
    <div class="outer">
        <div class="container">
            <!-- 掘金图标开始-->
            <div>
                <a href="javascript:;">
                    <img v-show="windowWidth < 640"
                        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg" />
                    <img v-show="windowWidth >= 640" class="logo2" src="../assets/xitujuejin.png" alt="加载失败" /></a>
            </div>
            <!-- 掘金图标开始结束-->
            <!-- 导航部分开始 -->
            <nav style="display:flex;justify-content: space-between;">
                <!-- 左侧导航列表部分开始 -->
                <!-- 1 -->
                <ul class="top-nav-fold" v-if="windowWidth <= 1190">
                    <li>
                        <div class="top-nav-fold-home" @click="toggleTopNavFold">首页</div>
                    </li>
                    <li class="top-nav-fold-item" v-if="istopnavfold">
                        <ol>
                            <li>
                                <router-link exact to="/">首页</router-link>
                            </li>
                            <li>
                                <router-link to="/pins">沸点</router-link>
                            </li>
                            <li>
                                <router-link to="/course">课程</router-link>
                            </li>
                            <li>
                                <router-link to="/live">直播</router-link>
                            </li>
                            <li>
                                <router-link to="/event">活动</router-link>
                            </li>
                        </ol>
                    </li>
                </ul>
                <!-- 2 -->
                <ul class="top-nav" v-if="windowWidth > 1190">
                    <li>
                        <router-link exact to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/pins">沸点</router-link>
                    </li>
                    <li>
                        <router-link to="/course">课程</router-link>
                    </li>
                    <li>
                        <router-link to="/live">直播</router-link>
                    </li>
                    <li>
                        <router-link to="/event">活动</router-link>
                    </li>
                    <ul class="others">
                        <li><a href="javascript:;">商城</a></li>
                        <li>
                            <a href="javascript:;">APP</a>
                        </li>
                        <li>
                            <a href="javascript:;">插件</a>
                        </li>
                    </ul>
                </ul>
                <!-- 左侧导航列表部分结束 -->
                <div style="width: 0;padding: 0;margin: 0;"></div>
                <!-- 右侧组件部分开始 -->
                <ul class="right">
                    <ul>
                        <!-- 搜索框开始 -->
                        <search :issearchbig="issearchbig" class="search" v-show="windowWidth > 350">
                        </search>
                        <!-- 搜索框结束 -->
                        <!-- 下拉菜单开始 -->
                        <scrollMenu class="scrollMenu" v-show="windowWidth > 800"></scrollMenu><!-- 下拉菜单结束 -->
                    </ul>
                    <!-- 会员开始 -->
                    <li class="vip" v-show="windowWidth > 960">
                        <a href="javascript:;"><img src="../assets/vip.png" alt="加载失败" /><span>会员</span></a>
                    </li>
                    <!-- 会员结束 -->
                    <!-- 消息提醒开始 -->
                    <li>
                        <el-button size="mini" type="info" icon="el-icon-message-solid" circle></el-button>
                    </li>
                    <!-- 消息提醒结束 -->
                    <!-- 头像开始 -->
                    <li class="me">
                        <img src="../assets/touxiang.png" alt="加载失败" />
                    </li>
                    <!-- 头像结束 -->
                </ul>
                <!-- 右侧组件部分结束 -->
            </nav>
        </div>
    </div>
</template>

<script>
import search from "./search"; //引入搜索框
import scrollMenu from "./scrollMenu"; //引入下拉菜单
export default {
    data() {
        return {
            windowWidth: 1200,
            issearchbig: false,
            istopnavfold: false
        }
    },
    components: {
        search,
        scrollMenu,
    },
    methods: {
        toggleTopNavFold() {
            this.istopnavfold == true ? this.istopnavfold = false : this.istopnavfold = true
        },
        debounce(fn, delay) {
            let timer;
            return function () {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    fn();
                }, delay);
            }
        },
        toggleTopBar() {
            const windowInfo = {
                width: window.innerWidth,
                hight: window.innerHeight
            }
            this.windowWidth = windowInfo.width
            if (this.windowWidth > 1070 && this.windowWidth < 1190) {
                this.issearchbig = true
            } else {
                this.issearchbig = false
            }
        },
        closeTopNavFold() {
            window.addEventListener("click", e => {
                const iconEl = document.querySelector('.top-nav-fold-home');// 这里是要隐藏的弹窗 类名
                if (iconEl && iconEl.contains(e.target)) {// contains 方法 就是查看包含关系  
                    // contains 方法 本身含义：用于判断字符串中是否包含指定的字符或字符串
                    return //  返回值 :如果包含指定的字符或字符串返回 true，否则返回 false。
                } else {
                    this.istopnavfold = false; // TopNavFold 弹窗的开关
                }
            });
        },
    },
    created() {
        this.toggleTopBar()
        addEventListener('resize', this.debounce(this.toggleTopBar, 100))
    },
    mounted() {
        addEventListener('resize', this.debounce(this.toggleTopBar, 100))
        this.closeTopNavFold()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.debounce(this.toggleTopBar, 100));
    }
};
</script>

<style lang='less' scoped>
li {
    list-style: none;
}

.outer {
    display: flex;
    align-items: center;
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #efeded;

    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 93%;
        margin: 0 auto;

        div {
            margin-left: 12px;
            margin-right: 22px;
            // width: 100px;

            a {
                .logo1 {
                    margin: 0 auto;
                    // margin-top: 16px;
                    width: 31px;
                    height: 24px;
                }

                .logo2 {
                    margin: 0 auto;
                    // margin-top: 16px;
                    width: 100px;
                }
            }
        }

        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex: 9;

            .top-nav-fold {
                position: relative;
                height: 32px;
                font-size: 16px;
                line-height: 32px;
                color: #409EFF;

                .top-nav-fold-home {
                    position: relative;
                }

                .top-nav-fold-home::after {
                    content: "";
                    position: absolute;
                    right: -15px;
                    top: 14px;
                    height: 0;
                    aspect-ratio: 1;
                    border: 5px solid #ffffff;
                    border-top: 5px solid #515767;
                }




                .top-nav-fold-item {
                    z-index: 10;
                    width: 100px;
                    position: absolute;
                    top: calc(100% + 10px);
                    left: 0;
                    transform: translatex(-25%);
                    background-color: #fff;
                    border: 1px solid rgb(244, 244, 244);
                    border-radius: 5px;
                    box-shadow: 0px 0px 30px rgb(232, 232, 232);
                    padding: 10px 20px;

                    ol {
                        text-align: center;
                        line-height: 40px;
                        padding: 0;
                        margin: 0;

                        a {
                            padding: 11px 0;

                            &:hover {
                                border-bottom: 3px solid #409EFF;
                            }
                        }
                    }

                }
            }

            .top-nav {
                display: flex;
                background: #ffffff;

                li {
                    display: flex;
                    justify-content: space-between;
                    text-align: center;
                    width: 48px;
                    height: 54px;

                    a {
                        height: 54px;
                        display: block;
                        line-height: 53px;
                        font-size: 13px;
                    }

                    &:hover a {
                        color: #333333;
                        border-bottom: 2px solid rgb(56, 113, 247);
                    }

                    .active {
                        color: rgb(56, 113, 247);
                    }
                }

                .others {
                    display: flex;

                    li {
                        a {
                            border: none;
                        }
                    }
                }
            }

            .right {
                display: flex;
                justify-content: space-between;
                align-items: center;

                >ul {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex: 5;

                    >.search {
                        width: 260px;
                        margin-right: 0;
                    }

                    >.search-react {
                        width: 374px;
                    }

                    >.scrollMenu {
                        width: 130px;
                        margin-right: 0;
                    }
                }

                >li {
                    margin: 0 10px;
                }

                .vip {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    >a {
                        display: flex;
                        align-items: center;
                        height: 24px;
                        line-height: 24px;

                        img {
                            width: 24px;
                            height: 24px;
                            margin-right: 3px;
                        }
                    }
                }

                .me {
                    img {
                        width: 36px;
                        height: 36px;
                        border-radius: 50px;
                    }
                }
            }
        }
    }
}
</style>