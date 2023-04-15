<template>
    <div id="header-music">
        <div class="content">
            <div class="navContainer">
                <h1 class="logo">
                    <a href="#">网易云音乐</a>
                </h1>
                <span
                    @click="changeNav(item.id)"
                    class="nav"
                    v-for="item in navData"
                    :key="item.id"
                >
                    {{ item.val }}
                    <span
                        class="btnIcon"
                        v-show="item.id == currentNav"
                        v-if="item.id != 4 && item.id != 5"
                    ></span>
                </span>
            </div>
            <div class="searchContainer">
                <input type="text" />
            </div>
            <div class="creator">
                <button>创作者中心</button>
            </div>
            <div class="login">登录</div>
        </div>
        <div class="indicator">
            <div class="indicator-content">
                <span
                    @click="changeNavChild(item.id)"
                    v-for="item in navData[currentNav-1].children"
                    :key="item.id"
                    :class="currentNavChild == item.id ? 'active' : ''"
                    >{{ item.val }}</span
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created(){
       
    },  
    data() {
        return {
            navData: [
                {
                    id: 1,
                    val: "发现音乐",
                    children: [
                        { id: 1, val: "推荐" },
                        { id: 2, val: "排行榜" },
                        { id: 3, val: "歌单" },
                        { id: 4, val: "电台主播" },
                        { id: 5, val: "歌手" },
                        { id: 6, val: "新碟上架" },
                    ],
                },
                { id: 2, val: "我的音乐" },
                { id: 3, val: "关注" },
                { id: 4, val: "商城" },
                { id: 5, val: "音乐人" },
                { id: 6, val: "下载客户端" },
            ],
            currentNav: 1,
            currentNavChild: 1,
        };
    },
    methods: {
        changeNav(id) {
            this.currentNav = id;
        },
        changeNavChild(id) {
            this.currentNavChild = id;
        },
    },
};
</script>

<style  scoped lang="scss">
#header-music {
    width: 100%;

    background-color: var(--headerColor);
    .content {
        display: flex;
        height: 70px;
        width: 1024px;
        min-width: 1024px;
        margin: 0 auto;
        align-items: center;
        flex-wrap: wrap;
        .navContainer {
            height: 100%;
            display: flex;
            align-content: center;
            .logo {
                height: 100%;
                width: 180px;
                color: #fff;
                text-indent: -99999px;
                background: url(@/assets/imgs/topbar.png);
                display: inline-block;
                cursor: pointer;
            }
            .nav {
                cursor: pointer;
                height: 100%;
                display: flex;
                align-items: center;
                padding: 0 15px;
                color: var(--navColor);
                position: relative;
                .btnIcon {
                    width: 0;
                    height: 0;
                    border: 7px solid transparent;
                    border-bottom-color: var(--primaryCOlor);
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }
                &:hover {
                    background-color: var(--navBgcSelect);
                    color: var(--navColorSelect);
                }
            }
        }

        .searchContainer {
            width: 158px;
            border-radius: 32px;
            height: 32px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 35px;
            input {
                width: 70%;
                border: none;
                outline: none;
                background-color: transparent;
            }
        }

        .creator {
            margin-left: 10px;
            width: 90px;
            height: 100%;
            display: flex;
            align-items: center;
            button {
                width: 100%;
                height: 32px;
                border-radius: 32px;
                outline: none;
                background-color: transparent;
                border: 1px solid var(--creatorBor);
                font-size: 10px;
                color: var(--navColor);
                cursor: pointer;
                &:hover {
                    color: var(--navColorSelect);
                    border-color: var(--navColorSelect);
                }
            }
        }

        .login {
            font-size: 14px;
            margin: 0 0 0 15px;
            color: #999;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
                color: #787878;
            }
        }
    }
    .indicator {
        width: 100%;
        padding: 10px 0;
        background-color: var(--primaryCOlor);
        display: flex;
        justify-content: center;
        font-size: 12px;
        color: var(--navColor);
        .indicator-content {
            width: 1024px;
            display: flex;
            justify-content: center;
            span {
                cursor: pointer;
                display: block;
                padding: 5px 7px;
                background-color: none;
                border-radius: 10px;
                margin: 0 20px;
                &:hover {
                    background-color: var(--indicatorBgc);
                }
            }
            .active {
                background-color: var(--indicatorBgc);
            }
        }
    }
}
</style>