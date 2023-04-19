<template>
    <div id="recommend">
        <Play class="play"></Play>
        <BannerSwiper></BannerSwiper>
        <section class="Song-sectionContent">
            <div class="SongContainer">
                <div class="Song-sectionMain">
                    <div class="recommendSong">
                        <SongHeader :header="songRemmendHeader"></SongHeader>
                        <div class="songRemmend">
                            <SongItem v-for="item in songRemmend" :song="item" :key="item.id"></SongItem>
                        </div>
                    </div>
                    <div class="newSongContainer">
                        <SongHeader :header="newSongHeader"></SongHeader>
                        <div class="newSong">
                            <NewSongBnaner :newSongData="newSongData"></NewSongBnaner>
                        </div>
                    </div>
                    <div class="rankContainer">
                        <SongHeader :header="rankHeader"></SongHeader>
                        <div class="ranks">
                            <rankItem v-for="item in rankData" :key="item.id" :item="item"></rankItem>
                        </div>
                    </div>
                </div>
                <aside class="Song-sectionAside">
                    <div class="login">
                        <span>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</span>
                        <button class="loginBtn">用户登录</button>
                    </div>
                    <div class="songer">
                        <div class="head">
                            <span class="fl">
                                入住歌手
                            </span>
                            <span class="fr">
                                查看更多>
                            </span>
                        </div>
                        <div class="songerItem" v-for="item in songerData" :key="item.id">
                            <img :src="item.picUrl" alt="">
                            <div class="name">{{ item.name }}</div>
                            <div class="desc">{{ item.desc }}</div>
                        </div>
                        <button>申请成为音乐人</button>
                    </div>
                    <div class="dj">
                        <div class="head">
                            <span class="fl">
                                热门主播
                            </span>

                        </div>
                        <div class="content">
                            <div class="djItem" v-for="item in djData" :key="item.id">
                                <img :src="item.picUrl" alt="">
                                <div class="name">
                                    {{ item.name }}
                                </div>
                                <div class="desc">
                                    {{item.rcmdtext}}
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    </div>
</template>

<script>
import BannerSwiper from '@/components/Banner-swiper.vue'
import SongHeader from '@/components/Song-header.vue'
import SongItem from '@/components/Song-item.vue'
import NewSongBnaner from "@/components/NewSong-banner.vue"
import rankItem from '@/components/Rank-item.vue'
import Play from '@/components/Play.vue'

export default {
    components: {
        BannerSwiper,
        SongHeader,
        SongItem,
        NewSongBnaner,
        rankItem,
        Play
    },
    async created() {
        this.getSongRemmend();
        this.getNewSong();
        this.getRank();
        this.getSonger();
        this.getHotDj();
    },
    data() {
        return {
            songRemmend: [],
            newSongData: [],
            rankData: [],
            songerData: [],
            djData: [],
            songRemmendHeader: {
                title: "热门推荐",
                viceTitle: [
                    { id: 1, val: "华语" },
                    { id: 2, val: "流行" },
                    { id: 3, val: "摇滚" },
                    { id: 4, val: "民谣" },
                    { id: 5, val: "电子" },
                ]
            },
            newSongHeader: {
                title: "新碟上架"
            },
            rankHeader: {
                title: "榜单"
            },

        }
    },
    methods: {
        async getSongRemmend() {
            const { data } = await this.$api.song.getRecommendSong(8);

            if (data.code == 200) {
                this.songRemmend = data.result;
            }

        },
        async getNewSong() {
            const { data } = await this.$api.song.getNewSong();
            if (data.code == 200) {
                this.newSongData = data.monthData;
                console.log(data);
            }
        },
        async getRank() {
            const { data } = await this.$api.song.getRank();
            if (data.code == 200) {
                this.rankData = data.list.slice(0, 3);

            }
        },
        async getSonger() {
            const { data } = await this.$api.songer.getSonger();

            if (data.code == 200) {
                data.artists.forEach(async (e) => {
                    const desc = await this.getSongerDetail(e.id);
                    e.desc = desc;
                });

                this.songerData = data.artists;
               
                // this.songerDataCopy = Object.assign({},this.songerData);
            }
        },
        async getSongerDetail(id) {
            const { data } = await this.$api.songer.getSongerDetail(id);
            return data.briefDesc;
        },
        async getHotDj() {
            const { data } = await this.$api.dj.getHotDj();
            if (data.code == 200) {
                this.djData = data.toplist;
                console.log(this.djData);
            }
        }
    },
    watch: {

    }

}
</script>

<style scoped lang="scss">
#recommend {
    width: 100%;
    .play{
        position: fixed;
        bottom: 0;
        z-index: 999;
    }
    .Song-sectionContent {
        width: 100%;
        background-color: #f5f5f5;

        .SongContainer {
            box-sizing: border-box;
            background-color: #fff;
            display: grid;
            width: 980px;
            margin: 0 auto;

            grid-template-columns: 730px 250px;
            border: 1px solid #d3d3d3;

            .Song-sectionMain {
                padding: 20px;

                .recommendSong {
                    width: 100%;

                    .songRemmend {
                        padding: 20px 0;
                        width: 100%;
                        display: grid;
                        grid-template-rows: repeat(2, 1fr);
                        grid-template-columns: repeat(4, 1fr);
                        grid-gap: 10px 30px;
                    }
                }

                .newSongContainer {
                    width: 100%;

                    .newSong {
                        padding: 20px 0;
                    }
                }

                .ranks {
                    padding: 20px 0;
                    display: flex;
                }
            }

            .Song-sectionAside {
                width: auto;
                border-left: 1px solid #d3d3d3;


                .head {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    font-size: 13px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #e0e0e0;

                    .fl {
                        color: #333;
                        font-weight: bold;
                    }

                    .fr {
                        color: #666;
                        text-align: right;
                    }
                }

                .login {
                    width: 100%;
                    height: 126px;
                    display: grid;
                    grid-template-rows: 76px 1fr;
                    align-items: center;
                    background-image: linear-gradient(0deg, #dddddd, #f5f5f5);

                    span {
                        padding: 0 20px;
                        font-size: 12px;
                        color: #666;
                        line-height: 24px;
                    }

                    button {
                        width: 100px;
                        height: 30px;
                        border-radius: 5px;
                        margin: 0 auto;
                        outline: none;
                        border: 1px solid #f0f0f0;
                        background-color: #C20C0C;
                        color: #fff;
                        font-size: 13px;
                        cursor: pointer;

                        &:hover {
                            background-color: #8a060b;
                        }
                    }
                }

                .songer {
                    box-sizing: border-box;
                    width: 100%;
                    padding: 20px;

                    .songerItem {
                        width: 100%;
                        height: 62px;
                        border: 1px solid #e9e9e9;
                        margin: 10px 0;
                        display: grid;
                        grid-template-columns: 62px 1fr;
                        grid-template-rows: 1fr 1fr;
                        justify-content: center;
                        align-items: center;

                        img {
                            grid-row: 1/3;
                            width: 62px;
                            height: 62px;
                        }

                        div {
                            font-size: 14px;
                            padding-left: 10px;
                        }
                        .name{
                            color: #333;
                        }
                        .desc {
                            width: 80%;
                            color: #666;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }

                    }

                    button {
                        width: 210px;
                        height: 30px;
                        outline: none;
                        border: 1px solid #e9e9e9;
                        border-radius: 5px;
                        margin: 0 auto;
                        background-image: linear-gradient(0deg, #dddddd, #f1f1f1);
                        font-size: 14px;
                        color: #666;
                        cursor: pointer;

                        &:hover {
                            background-image: linear-gradient(0deg, #c1c1c1, #f2f2f2);
                        }
                    }
                }

                .dj {
                    width: 100%;
                    padding: 20px;
                    box-sizing: border-box;

                    .content {
                        width: 100%;
                        margin-top: 20px;
                        .djItem {
                            width: 100%;
                            height: 40px;
                            display: grid;
                            grid-template-columns: 40px 1fr;
                            grid-template-rows: 1fr 1fr;
                            margin: 10px 0;

                            img {
                                grid-row: 1/3;
                                width: 40px;
                                height: 40px;
                            }
                            div{
                                padding-left: 5px;
                                font-size: 12px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                            .name { 
                                color: #333;
                            }
                            .desc{
                                color: #666;
                            }

                        }
                    }
                }
            }
        }
    }
}
</style>