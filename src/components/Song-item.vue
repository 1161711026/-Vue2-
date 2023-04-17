<template>
    <div class="song-item">
        <img :src="song.picUrl" alt="">
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
        }
    }
}
</script>

<style lang="scss" scoped>
.song-item {
    width: 100%;
    height: 204px;
    overflow: hidden;

    img {
        width: 100%;
        border: 1px solid #666;
    }

    p {
        
        font-size: 14px;
 
    }
}
</style>