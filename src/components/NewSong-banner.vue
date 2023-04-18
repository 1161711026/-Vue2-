<template>
    <div class="newSongWrap">
        <div class="container">
            <div class="move" :style="`left:${xpx}`">
                <newSongItem v-for="item in newSongs" :key="item.index" :song="item"></newSongItem>
            </div>
        </div>
        <button class="fl" @click="fl">&lt;</button>
        <button class="fr" @click="fr">&gt;</button>
    </div>
</template>

<script>
import newSongItem from './newSong-item.vue';
export default {
    created(){
        
    },
    components: {
        newSongItem
    },
    props: {
        newSongData: {

        }
    },
    data() {
        return {
            x: 0,
            currentId: -1,
        }
    },
    computed: {
        newSongs() {
        
            const head = this.newSongData.slice(10, 15);
            const tail = this.newSongData.slice(0, 5);
         
            return [...head,...this.newSongData.slice(0, 15),...tail];
        },
        xpx(){
            return this.x + (this.currentId * 640) + "px";
        }
    },
    methods:{
        fr(){
            this.currentId --;
            if(this.currentId==-4){
                this.currentId = 0;
            }
        },
        fl(){
            this.currentId ++;
           if(this.currentId == 0){
               
                this.currentId = -3;
           }
        }
    }
}
</script>

<style lang="scss" scoped>
.newSongWrap {
    width: 100%;
    height: 180px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    button {
        position: absolute;
        font-size: 24px;
        color: #333;
        cursor: pointer;
        border: none;
        background-color: transparent;
        font-weight: 200;

        &:hover {
            color: #000;
        }
    }

    .fr {
        right: 10px;
    }

    .fl {
        left: 10px;
    }

    .container {
        width: 94%;
        height: 160px;
        position: relative;
        overflow: hidden;

        .move {
            height: 100%;
            position: absolute;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            left: -640px;
            transition: all 0.5s linear;
        }
    }
}
</style>