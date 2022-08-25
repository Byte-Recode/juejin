<template>
    <div id="article-container">
        <div class="main">
            <div class="content">
                <!-- 文章主体 -->
                <div class="article">
                    <div class="article-header">
                        <div class="title">
                            朋友，进来刷点 try-catch 看看你能全对吗（答应我，请务必看到最后
                        </div>
                        <div class="author">
                            <div class="profile"><img src="../../assets/touxiang.png" alt=""></div>
                            <div class="author-mian">
                                <div class="author-name">
                                    朋友，进来刷点
                                </div>
                                <div class="article-time-view">
                                    2022年08月24日 21:36 · 阅读 1145
                                </div>
                            </div>
                            <div class="follow-author">+ 关注</div>
                        </div>
                    </div>
                    <!-- 占位分隔 -->
                    <div style="height: 20px;width:1px;"></div>
                    <div class="article-main" v-html="article.content">
                        <!-- 这里是文章内容 -->
                    </div>
                </div>
                <!-- 占位分隔 -->
                <div style="width: 20px;height:1px;;" v-if="!sidebaron"> </div>
                <!-- sidebar -->
                <div class="sidebar" v-if="!sidebaron"> </div>
                <!-- panel -->
                <div class="article-panel">
                    <div v-show="isimmerse" class="like"><img src="../../assets/icon/like-o.png" /></div>
                    <div v-show="isimmerse" class="comment"><img src="../../assets/icon/comment-o.png" /></div>
                    <div v-show="isimmerse" class="collection"><img src="../../assets/icon/collection.png" /></div>
                    <div v-show="isimmerse" class="share"><img src="../../assets/icon/share.png" /></div>
                    <span v-show="isimmerse"></span>
                    <div v-show="isimmerse" class="warning"><img src="../../assets/icon/warning.png" /></div>
                    <div class="immerse" @click="immerse"><img src="../../assets/icon/immerse.png" /></div>
                </div>

            </div>

        </div>


    </div>
</template>

<script>
import { getarticlebypostidAPI } from "../../api/getarticlebypostidAPI"
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'


export default {
    name: "postarticle",
    data() {
        return {
            postid: this.$route.query["postid"],
            article: {},
            sidebaron: false,
            isimmerse: true
        }
    },
    methods: {
        immerse() {
            if (this.isimmerse == false) {
                this.isimmerse = true
            } else {
                this.isimmerse = false
            }
        },
        async getarticlebypostid() {
            const res = await getarticlebypostidAPI(this.postid)
            if (res && res.code == 201) {
                this.article = res.data[0]
                console.log(this.article);
            } else {
                this.$message("获取文章内容失败")
            }
        }
    },
    created() {
        this.getarticlebypostid()
    }
}

</script>

<style lang="less" scoped>
#article-container {

    .main {
        margin: 10px auto 0;
        // background-color: antiquewhite;

        .content {
            // position: relative;
            display: flex;
            max-width: 1140px;
            margin: 0 auto;
            // background-color: aquamarine;

            .article {
                width: 820px;
                max-width: 100%;
                flex: auto;
                background-color: #fff;
                padding: 30px;

                .article-header {
                    border-bottom: 2px solid rgb(229, 229, 229);

                    .title {
                        font-size: 34px;
                        font-weight: 600;
                        color: black;
                        margin-bottom: 20px;
                    }

                    .author {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 48px;
                        margin-bottom: 20px;

                        .profile {
                            width: 52px;
                            height: 40px;

                            img {
                                width: 40px;
                                aspect-ratio: 1;
                                border-radius: 999px;
                                margin-right: 12px;
                            }
                        }

                        .author-mian {
                            height: 48px;
                            flex: auto;

                            .author-name {
                                font-size: 16px;
                                line-height: 24px;
                                margin-bottom: 2px;
                            }

                            .article-time-view {
                                line-height: 22px;
                                color: #8a919f;
                            }
                        }

                        .follow-author {
                            height: 32px;
                            font-size: 14px;
                            line-height: 32px;
                            color: #1e80ff;
                            background-color: rgba(30, 128, 255, .05);
                            border-radius: 5px;
                            border: 1px solid rgba(30, 128, 255, .2);
                            padding: 0 12px;
                        }
                    }
                }
            }

            .sidebar {
                width: 300px;
                background-color: rgb(132, 99, 99);
            }

            .article-panel {
                position: fixed;
                top: 140px;
                left: 80px;

                span {
                    display: block;
                    width: 30px;
                    height: 1px;
                    background-color: #b6b6b6;
                    margin: 0 9px 20px;
                }

                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    aspect-ratio: 1;
                    text-align: center;
                    border-radius: 999px;
                    background-color: #fff;
                    vertical-align: middle;
                    margin-bottom: 20px;

                    img {
                        width: 20px;
                        aspect-ratio: 1;
                    }
                }

            }
        }

    }

}
</style>