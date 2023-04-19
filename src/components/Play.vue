<template>
    <div id="play">
        <!-- <p>{{song.url}}</p> -->
        <div class="aaa" @click="getTime()">
            <audio ref="audio" :src="song.url" controls style="display: none" :play="!isPlay"></audio>
        </div>
        <div class="content">
            <div class="playBtn">
                <div class="pre"></div>
                <div class="play" @click="chanPlay" v-if="isPlay"></div>
                <div class="pause" @click="chanPlay" v-else></div>
                <div class="next"></div>
            </div>
            <div class="progress">
                <div class="ava">
                    <img src="" alt="">
                </div>
                <div class="title">title</div>
                <div class="line">
                    <div class="btn"></div>
                    <div class="outer">
                        <div class="inner">
                            <div class="red"></div>
                            <div class="black"></div>

                        </div>
                    </div>
                </div>
                <div class="time">
                    0:00/{{parseInt(totalTime/60)}}:{{parseInt(totalTime%60)<10? '0' + parseInt(totalTime%60) : parseInt(totalTime%60)}}
                </div>
            </div>
            <div class="add"></div>
            <div class="volumes"></div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isPlay: true,
            url: '',
            timer: null,
            totalTime: 0,
            current: 0,
            index: 0,
        }
    },
    methods: {
        chanPlay() {
            this.isPlay = !this.isPlay;
        },
        getTotalTime() {
            console.log("11");
            this.totalTime = this.$refs.audio.duration;
        }
    },
    computed: {
        song() {
            return this.$store.state.song[0];
        }
    },
    watch: {
        song() {
            this.getTotalTime();
            
        },
        totalTime(){
            console.log(this.totalTime);
        }
    }
}
</script>

<style lang="scss" scoped>
#play {
    width: 100vw;
    height: 50px;
    background: url(@/assets/imgs/playbar.png);
    background-position: 0 -3px;



    .content {
        width: 980px;
        height: 100%;
        display: grid;
        margin: 0 auto;
        transform: translateX(-10px);
        grid-template-columns: 137px 1fr 90px 130px;

        .playBtn {

            display: flex;
            justify-content: center;
            align-items: center;

            .pre {
                width: 28px;
                height: 28px;
                margin-right: 5px;
                background: url(@/assets/imgs/playbar.png);
                background-position: 0px -130px;
                cursor: pointer;

                &:hover {
                    background-position: -30px -130px;
                }
            }

            .next {
                width: 28px;
                height: 28px;
                margin-right: 5px;
                background: url(@/assets/imgs/playbar.png);
                background-position: -80px -130px;
                cursor: pointer;
                margin-left: 5px;

                &:hover {
                    background-position: -110px -130px;
                }
            }

            .play {
                width: 36px;
                height: 36px;
                background: url(@/assets/imgs/playbar.png);
                background-position: 0px -204px;
                cursor: pointer;

                &:hover {
                    background-position: -40px -204px;
                }
            }

            .pause {
                width: 36px;
                height: 36px;
                background: url(@/assets/imgs/playbar.png);
                background-position: 0px -165px;
                cursor: pointer;

                &:hover {
                    background-position: -40px -165px;
                }
            }
        }

        .progress {

            position: relative;

            .ava {
                position: absolute;
                width: 35px;
                height: 35px;
                top: 50%;
                transform: translateY(-50%);
                background: url(@/assets/imgs/playbar.png);
                background-position: 0px -80px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .title {
                position: absolute;
                top: 5px;
                left: 40px;
                color: #fff;
            }

            .line {
                // overflow: hidden;
                position: absolute;
                bottom: 12px;
                left: 50px;
                width: 493px;
                height: 9px;

                .outer {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;

                    .inner {
                        position: absolute;
                        width: 200%;
                        height: 100%;
                        // overflow: hidden;
                        display: flex;
                        left: -100%;

                        .black {

                            width: 50%;
                            height: 100%;
                            background: url(@/assets/imgs/statbar.png);
                            background-position: 0 -0px;
                        }

                        .red {
                            width: 50%;
                            height: 100%;
                            background: url(@/assets/imgs/statbar.png);
                            background-position: 0 -66px;
                        }
                    }
                }

                .btn {
                    cursor: pointer;
                    box-sizing: border-box;
                    position: absolute;
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    border: 7px solid #fff;
                    background-color: red;
                    top: -6px;
                    left: -2%;
                    z-index: 3;
                    box-shadow: 0 0 10px 3px #333, inset 0 0 4px 1px #333;

                    &:hover {
                        border-color: #e0e0e0;
                    }
                }


            }

            .time {
                position: absolute;
                width: 70px;
                height: 20px;
                color: #797979;
                font-weight: 200;
                font-size: 12px;
                right: 0px;
                top: 25px;
            }
        }
    }
}
</style>