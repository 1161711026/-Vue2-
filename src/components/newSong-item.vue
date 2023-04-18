<template>
  <div class="newSongItem">
    <img :src="song.blurPicUrl" alt="">
    <div class="fonts">
        <div class="title">{{song.name}}</div>
        <div class="author">{{song.company}}</div>
    </div>
  </div>
</template>

<script>
export default {
    created(){
     
    },
    props:["song"]
}
</script>

<style lang="scss" scoped>
    .newSongItem{
        width: 118px;
        height: 110px;
        background: url(@/assets/imgs/coverall.png);
        background-position: 0px -570px;
        margin-left: 10px;
        margin-top: -10px;
        flex-shrink: 0;
        img{
            width: 85%;
            border: 1px solid #333;
        }
        .fonts{
            width: 100%;
            height: 30px;
            font-size: 12px;
            .author,
            .title{
                width: 100%;
                height: 15px;
                overflow:hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>