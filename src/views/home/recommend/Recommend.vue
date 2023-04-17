<template>
    <div id="recommend">
        <BannerSwiper></BannerSwiper>
        <section class="Song-sectionContent">
            <div class="SongContainer">
                <div class="Song-sectionMain">
                    <SongHeader></SongHeader>
                    <div class="songRemmend">
                        <SongItem v-for="item in songRemmend" :song="item" :key="item.id"></SongItem>
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
export default {
    components: {
        BannerSwiper,
        SongHeader,
        SongItem
    },
    async created() {
        this.getSongRemmend();
    },
    data() {
        return {
            songRemmend: []
        }
    },
    methods: {
        async getSongRemmend() {
            const { data } = await this.$api.song.getRecommendSong(8);

            if (data.code == 200) {
                this.songRemmend = data.result;
            }
            console.log(this.songRemmend);
        }
    }
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

            grid-template-columns: 1fr 250px;
            border: 1px solid #d3d3d3;

            .Song-sectionMain {
                padding: 20px;
          
                .songRemmend {
                    padding: 20px 0;
                    width: 100%;
                    display: grid;
                    grid-template-rows: repeat(2,1fr);
                    grid-template-columns: repeat(4,1fr);
                    grid-gap: 10px 30px;
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