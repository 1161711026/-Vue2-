<template>
    <div id="recommend">
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

export default {
    components: {
        BannerSwiper,
        SongHeader,
        SongItem,
        NewSongBnaner,
        rankItem
    },
    async created() {
        this.getSongRemmend();
        this.getNewSong();
        this.getRank();
    },
    data() {
        return {
            songRemmend: [],
            newSongData: [],
            rankData:[],
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
            rankHeader:{
                title:"榜单"
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
            }
        },
        async getRank(){
            const {data} = await this.$api.song.getRank();
            if(data.code == 200){
                this.rankData = data.list.slice(0,3);
                console.log(this.rankData);
            }
        }
    },

}
</script>

<style scoped lang="scss">
#recommend {
    width: 100%;

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
                .ranks{
                    padding: 20px 0;
                    display: flex;
                }
            }
            .Song-sectionAside {
                width: auto;
                border-left: 1px solid #d3d3d3;
            }
        }
    }
}
</style>