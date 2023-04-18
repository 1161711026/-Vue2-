<template>
    <div class="song-item">
        <img :src="song.picUrl" alt="">
        <div class="icons">
            <div class="radio"></div>
            <div class="playCount">{{playCount}}</div>
            <div class="play"></div>
        </div>
        <p>{{ str }}</p>
    </div>
</template>

<script>
export default {
    created() {
     
    },
    props: ["song"],
    computed:{
        str(){
            if(this.song.name.length>23){
                console.log(this.song.name,this.song.name.length);
                return this.song.name.slice(0,20)+"...";
            }
            return this.song.name;
        },
        playCount(){
            if(this.song.playCount >= 10000 ){
                return parseInt(this.song.playCount / 10000) + "万";
            }
            else{
                return this.song.playCount;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.song-item {
    width: 100%;
    height: 204px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    .icons{
        width: 100%;
        height: 30px;
        background-color: rgba($color: #000, $alpha: .4);
        position: absolute;
        top: 119px;
        z-index: 3;
        border: 1px solid #333;
        display: grid;
        grid-template-columns: 30px 1fr 30px;
        align-items: center;
        .radio{
            height: 20px;
            overflow: hidden;
            background-image: url(../assets/imgs/iconall.png);
            background-position: 5px -20px;
        }
        .playCount{
            font-size: 12px;
            color: #ccc;
        }
        .play{
            height: 25px;
            background-image: url(../assets/imgs/iconall.png);
            background-position: 0px -83px;
           
            &:hover{
                background-position: 0px -108px;
            }
        }
    }
    img {
        width: 100%;
        border: 1px solid #666;
    }

    p {
        
        font-size: 14px;
 
    }
}
</style>