<template>
    <div id="skeleton-container" :style="{ height: height + 'px' }">
        <div class="left" :style="{ flex: left, padding: padding + 'px' }">
            <ol>
                <li class="paragraph" v-for="(item, index) in rows" :key="index" :style="{
                    height: 100 / rows / space + '%', backgroundColor: color
                }"></li>
            </ol>
        </div>
        <div class="right" :style="{ flex: right }">
            <div class="img" :style="{ backgroundColor: color }"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    name: "Skeleton",
    props: {
        height: {
            type: Number,
            default: 200
        },
        rows: {
            type: Number,
            default: 4
        },
        space: {
            type: Number,
            default: 1.5
        },
        left: {
            type: Number,
            default: 3
        },
        padding: {
            type: Number,
            default: 20
        },
        right: {
            type: Number,
            default: 1
        },
        color: {
            type: String,
            default: 'rgb(220, 220, 220)'
        }
    },
    methods: {

    }
}



</script>

<style lang="less" scoped>
#skeleton-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;

    .left {
        ol {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;

            li {
                list-style: none;
                box-sizing: border-box;
                padding: 5px;
            }

            .paragraph {
                width: 80%;
                border-radius: 999px;
            }

            li:nth-child(1) {
                width: 30%;
            }

            li:nth-child(2) {
                width: 70%;
            }

            li:nth-child(3) {
                width: 90%;
            }

            li:nth-child(4) {
                width: 35%;
            }
        }
    }

    .right {
        display: flex;
        justify-content: center;
        align-items: center;

        .img {
            width: 80%;
            height: 70%;
        }
    }

}
</style>