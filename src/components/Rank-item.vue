<template>
    <div class="rankItem">
        <div class="head">
            <img :src="item.coverImgUrl" alt="">
            <h3>{{ item.name }}</h3>
            <div class="play"></div>
            <div class="add"></div>
        </div>
        <div class="content">
            <div class="item">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        this.getItems();
       
    },
    data() {
        return {
            songID:[],
            ids: '',
        }
    },
    props: ["item"],
    watch: {
        item() {
            console.log(this.item);
        }
    },
    methods:{
        async getItems(){
            const {data} = await this.$api.song.getSongDetail(this.item.id);
      
            let str = '';
            data.privileges.slice(0,10).forEach(element => {
                str+= "," + element.id;
            });
            this.ids = str.replace(",","")
            this.getSong(this.ids);
        },
        async getSong(id){
            const {data} = await this.$api.song.getSong(id);
            console.log(data);
        }
    }
}
</script>

<style scoped lang="scss">
.rankItem {
    width: 33%;
    height: 400px;
    background-color: #f5f5f5;

    .head {
        width: 100%;
        height: 120px;
        position: relative;

        img {
            width: 80px;
            position: absolute;
            top: 20px;
            left: 20px;
        }

        h3 {
            position: absolute;
            top: 30px;
            left: 110px;
        }

        .play,
        .add {
            width: 22px;
            height: 22px;
            position: absolute;
            top: 60px;
            cursor: pointer;
        }

        .play {
            background: url(@/assets/imgs/index.png);
            background-position: -267px -205px;
            left: 110px;

            &:hover {
                background-position: -267px -235px;
            }
        }

        .add {
            background: url(@/assets/imgs/index.png);
            background-position: -300px -205px;
            left: 140px;

            &:hover {
                background-position: -300px -235px;
            }
        }
    }
}</style>