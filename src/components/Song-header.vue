<template>
    <div class="Song-secion">
        <div class="top">
            <h2>热门推荐</h2>
            <div class="font">
                <span v-for="item in viewTitle" :key="item.id">{{ item.val }}</span>
            </div>
            <span class="more">
                更多
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Title: "热门推荐",
            viewTitle: [
                { id: 1, val: "华语" },
                { id: 2, val: "流行" },
                { id: 3, val: "摇滚" },
                { id: 4, val: "民谣" },
                { id: 5, val: "电子" },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.Song-secion {
    width: 100%;

    .top {
        box-sizing: border-box;
        width: 100%;
        height: 35px;
        border-bottom: 2px solid #C10D;
        display: grid;
        grid-template-columns: 30px 100px 400px 1fr;
        align-items: center;

        &::before {
            content: "";
            width: 30px;
            height: 30px;
            display: inline-block;
            position: relative;
            background: url(../assets/imgs/index.png);
            background-position: -228px -156px;

        }

        h2 {

            display: inline-block;
            font-size: 20px;
            margin-right: 20px;

        }

        span {
            font-size: 14px;
            line-height: 28px;
            color: #666;
        }

        span:not(:last-child)::after {
            content: "|";
            font-size: 12px;
            margin: 0 10px;
        }
        .more {
            justify-self: flex-end;

            &::after {
                content: "1";
                color: transparent;
                display: inline-block;
                width: 30px;
                height: 30px;
                background: url(@/assets/imgs/index.png);
                background-position: 5px -232px;
            }
        }
    }
}
</style>