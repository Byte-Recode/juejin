<template>
    <div id="editor-container">
        <div class="header">
            <input type="text" placeholder="输入文章标题..." v-model="title">
            <div class="right">
                <div class="tip">文章将自动保存至草稿箱</div>
                <button class="draft" @click="alert">
                    草稿箱
                </button>
                <button class="publish" @click="publish">发布</button>
                <img class="icon" src="../../assets/icon/switch.png" alt="" @click="alert">
                <img class="profile" src="../../assets/touxiang.png" alt="">
            </div>
        </div>
        <!-- 编辑器区域 -->
        <div id="editor">
            <!-- 这里是编辑器 -->
        </div>
    </div>
</template>

<script>
// 富文本编辑器
import E from 'wangeditor'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

// api 
import { publisharticleAPI } from '../../api/publisharticleAPI'

export default {
    data() {
        return {
            userid: this.$route.query["userid"],
            editor: '',
            serverhttp: "",//图片转储服务器地址
            title: "",
            keywords: "前端",//暂未设置关键词功能
            photourl: [],
        }
    },
    methods: {
        async publish() {
            let photourl = ""
            if (this.photourl[0]) {
                photourl = this.photourl[0]
            }
            if (this.title.trim().length > 0) {
                const res = await publisharticleAPI(this.userid, this.title, this.keywords, this.editor.txt.html(), this.editor.txt.text().slice(0, 60), photourl)
                // console.log(res);
                if (res.code == 201) {
                    this.$router.push({
                        path: '/article',
                        query: {
                            id: this.userid,
                            postid: res.postid
                        }
                    })
                } else {
                    this.$message("文章发布出错，请稍后重发")
                }
            } else {
                this.$message("请输入标题")
            }
        },
        alert() {
            this.$message({
                message: '暂不支持此功能',
                duration: 1000
            });
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
    },
    mounted() {
        const that = this
        this.editor = new E('#editor')
        this.editor.highlight = hljs
        this.editor.config.height = window.innerHeight - 64 - 42
        this.editor.config.placeholder = '输入正文'
        this.editor.config.focus = false
        this.editor.config.zIndex = 10


        // 配置菜单栏
        this.editor.config.menus = ['head',
            'bold',
            'fontSize',
            'fontName',
            'italic',
            'underline',
            'strikeThrough',
            'indent',
            'lineHeight',
            'foreColor',
            'backColor',
            'link',
            'list',
            'todo',
            'justify',
            'quote',
            'emoticon',
            'image',
            'video',
            'table',
            'code',
            'splitLine',
            'undo',
            'redo',]
        //插入代码语言配置
        this.editor.config.languageType = [
            'Bash',
            'C',
            'C#',
            'C++',
            'CSS',
            'Java',
            'JavaScript',
            'JSON',
            'TypeScript',
            'Plain text',
            'Html',
            'XML',
            'SQL',
            'Go',
            'Kotlin',
            'Lua',
            'Markdown',
            'PHP',
            'Python',
            'Shell Session',
            'Ruby',
        ]
        // 忽略粘贴过来的图片
        this.editor.config.pasteIgnoreImg = true
        // 限制图片大小
        this.editor.config.uploadImgMaxSize = 2 * 1024 * 1024 // 2M
        this.editor.config.uploadImgMaxLength = 1 // 一次最多上传 1 个图片
        this.editor.config.uploadImgShowBase64 = false
        // 上传图片时可自定义传递一些参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
        this.editor.config.uploadImgParams = {
            userid: this.userid,
        }
        // 如果需要将参数拼接到 url 中，可再加上如下配置。
        // this.editor.config.uploadImgParamsWithUrl = true
        // 文件名
        this.editor.config.uploadFileName = 'img'
        // 图片上传的服务器接口
        this.editor.config.uploadImgServer = this.serverhttp
        // timeout 即上传接口等待的最大时间，默认是 10 秒钟，可以自己修改。
        this.editor.config.uploadImgTimeout = 5 * 1000
        // 配置alt选项
        this.editor.config.showLinkImgAlt = false
        // 隐藏插入网络图片的功能
        this.editor.config.showLinkImg = true
        // 配置超链接
        this.editor.config.showLinkImgHref = false
        // 插入网络图片的回调
        this.editor.config.linkImgCallback = function (src, alt, href) {
            // console.log('图片 src ', src)
            that.photourl.push(src)
            // console.log('图片文字说明', alt)
            // console.log('跳转链接', href)
        }
        // // 监听事件
        // this.editor.config.onblur = function (newHtml) {
        //     console.log('onblur', newHtml) // 获取最新的 html 内容
        // }
        // this.editor.config.onfocus = function (newHtml) {
        //     console.log('onfocus', newHtml) // 获取最新的 html 内容
        // }
        // 创建编辑区域
        this.editor.create()
        // console.log('@', this.editor)
        // console.log(this.editor.config.menus)
    },
    beforeDestroy() {
        // 销毁编辑器
        // this.editor.destroy()
        // this.editor = null
    }




}
</script>

<style lang="less" scoped>
#editor-container {


    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 64px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        padding: 0 27px;

        input {
            flex: auto;
            height: 100%;
            font-size: 24px;
            font-weight: 500;
            color: #1d2129;
            background-color: #fff;
            box-sizing: border-box;
            border: none;
            outline: none;
        }

        .right {
            display: flex;
            align-items: center;

            button {
                font-size: 14px;
                box-sizing: border-box;
            }

            .tip {
                color: #c9cdd4;
                margin: 0 5px;
            }

            .draft {
                color: #1d7dfa;
                border: 1px solid #1d7dfa;
                border-radius: 2px;
                outline: none;
                background-color: #fff;
                padding: 5px 15px;
                margin: 0 10px;
            }

            .publish {
                color: #fff;
                border: none;
                outline: none;
                border-radius: 2px;
                background-color: #1d7dfa;
                padding: 5px 15px;
                margin: 0 10px;
            }

            .icon {
                width: 20px;
                aspect-ratio: 1;
                margin: 0 10px;
            }

            .profile {
                width: 32px;
                aspect-ratio: 1;
                border-radius: 999px;
                margin: 0 10px;
            }
        }
    }
}
</style>