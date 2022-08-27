<template>
    <div class="outer">
        <ul>
            <ul>
                <li v-for="(item, index) in tagList" :key="index">
                    <a :class="tagselect == item ? 'tagselect' : ''" href="javascript:;" :data-tag="item"
                        @click.stop="toggle">{{ item }}</a>
                </li>
            </ul>
            <a href="javascript:;" v-show="isshowtag">标签管理</a>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tagList: [
                "综合",
                "关注",
                "后端",
                "前端",
                "Android",
                "iOS",
                "人工智能",
                "开发工具",
                "阅读"
            ],
            tagKeywords:
            {
                "后端": [
                    '全部',
                    '深度学习',
                    '算法',
                    '机器学习',
                    'Python',
                    '计算机视觉',
                    '后端',
                    'NLP',
                    'PyTorch',
                    '神经网络',
                    '数据分析',
                    'TensorFlow',
                    '数据可视化',
                    '程序员',
                    '自动驾驶',
                ],
                "前端": [
                    '全部',
                    'JavaScript',
                    'Vue.js',
                    'React.js',
                    'CSS',
                    '面试',
                    'TypeScript',
                    'Node.js',
                    '前端框架',
                    '算法',
                    'Webpack',
                    '架构',
                    '微信小程序',
                ],
                "Android": [
                    '全部',
                    'Android',
                    'Kotlin',
                    'Flutter',
                    'Jetpack',
                    'Java',
                    'APP',
                    'Studio',
                    '源码',
                    '性能优化',
                    '面试',
                    '架构',
                    'gradle',
                    'Linux',
                ],
                "iOS": [
                    '全部',
                    'iOS',
                    'Swift',
                    'SwiftUI',
                    'Flutter',
                    '算法',
                    'LeetCode',
                    'Objective',
                    'Xcode',
                    'Mac',
                    'WWDC',
                    'Apple',
                    '计算机视觉',
                    '前端框架'
                ],
                "人工智能": [
                    '全部',
                    '人工智能',
                    '深度学习',
                    '算法',
                    '机器学习',
                    'Python',
                    '计算机视觉',
                    'NLP',
                    'PyTorch',
                    '神经网络',
                    '数据分析',
                    'TensorFlow',
                    '数据可视化',
                    '程序员',
                    '自动驾驶',
                ],
                "开发工具": [
                    '全部',
                    '后端',
                    '前端',
                    '开源',
                    'Git',
                    'GitHub',
                    '测试',
                    'Linux',
                    '数据库',
                    '设计',
                    '大数据',
                    '程序员',
                    'JavaScript',
                    'Python',
                    'Unity3D',
                    'Rust',
                ],
                "阅读": [
                    '全部',
                    '云原生',
                    '笔记',
                    '程序员',
                    '前端',
                    '后端',
                    'Serverless',
                    '开源',
                    '微服务',
                    'Java',
                    '容器',
                    '产品',
                    '深度学习',
                    '架构',
                    'RocketMQ',
                    'Kubernetes',
                ]
            },
            tagselect: "综合"
        }

    },
    props: {
        isshowtag: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        toggle(e) {
            // 转存标签名
            let tag = e.currentTarget.dataset.tag
            console.log(tag);
            this.tagselect = tag
            this.$emit('toggleTag', tag, this.tagKeywords[tag])
        }
    }
};
</script>

<style lang="less" scoped>
.outer {
    border-bottom: 1.5px solid #e6e6e6;
    background: #ffffff;
    box-shadow: 0px 2px 5px 0px rgb(239, 239, 239);

    >ul {
        // 设置滚动条，在元素溢出时显示滚动条
        overflow-x: auto;
        overflow-y: hidden;
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #717171;
        font-size: 12px;
        height: 40px;

        >ul {
            display: flex;
            justify-content: space-between;
            align-items: center;

            li {
                >a {
                    color: #717171;
                    font-size: 14px;
                    white-space: nowrap;
                    padding: 13px 12px;

                    &:hover {
                        color: rgb(56, 113, 247);
                    }
                }

                >.tagselect {
                    color: #007fff;
                }
            }
        }

        >a {
            color: #717171;
            white-space: nowrap;
            font-size: 12px;
        }
    }
}
</style>
