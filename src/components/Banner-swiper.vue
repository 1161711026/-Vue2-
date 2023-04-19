<template>
    <div class="bannerSwiper" :style="bgcImgUrl">
        <div class="banner">
            <div class="download">
                <img :src="downLoadUrl" alt="download" />
                <div class="loadIcon"></div>
            </div>
            <el-carousel indicator-position="outside" height="100%" arrow="always" @change="changeBanner">
                <el-carousel-item v-for="item in bannerData" :key="item.index">
                    <a :href="item.url">
                        <img :src="item != undefined ? item.imageUrl : undefined" alt="" />
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
  
<script>
export default {
    async created() {
        //获取banner数据
        await this.getBannerDate();

    },
    data() {
        return {
            bannerData: [

            ],
            downLoadUrl: require("@/assets/imgs/download.png"),
            currentBnanerId: 0,
        };
    },
    computed: {
        bgcImgUrl() {
            return this.bannerData.length > 0 ? `background: url(${this.bannerData[this.currentBnanerId].imageUrl})` : `bakcground: transparent`;
        }
    },
    methods: {
        async getBannerDate() {
            const { data } = await this.$api.banner.getBanner();
            if (data.code == 200) {
                this.bannerData = data.banners;
           
            }
        },
        changeBanner(val, oldval) {
            this.currentBnanerId = val;
        },
    },
};
</script>

<style lang="scss" scoped>
.bannerSwiper {
    width: 100%;
    height: 285px;
    background-color: royalblue;
    display: flex;
    justify-content: center;
    position: relative;

    animation: all 0.3s;
    overflow: hidden;

    &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: inherit;
        background-size: cover;
        background-position: center;
        transform: scale(1.5);
        filter: blur(20px);
    }

    .banner {
        width: 982px;
        filter: blur(0px);
        position: relative;
        z-index: 2;

        .download {
            position: absolute;
            right: 0;
            z-index: 3;
            background-color: #333;
            height: 100%;
            overflow: hidden;

            .loadIcon {
                background: transparent;
                cursor: pointer;
                width: 215px;
                height: 56px;
                position: absolute;
                z-index: 5;
                bottom: 44px;
                left: 20px;

                &:hover {
                    background-image: url(../assets/imgs/download.png);
                    background-position: -255px -290px;
                }
            }
        }

        .el-carousel {
            height: 100%;
            position: relative;

            .el-carousel__container ::v-deep {
                height: 100%;
            }

            ::v-deep .el-carousel__indicators.el-carousel__indicators--horizontal.el-carousel__indicators--outside {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
            }

            img {
                height: 100%;
            }
        }
    }
}
</style>