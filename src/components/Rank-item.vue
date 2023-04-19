<template>
    <div class="rankItem">
        <div class="head">
            <img :src="item.coverImgUrl" alt="">
            <h3>{{ item.name }}</h3>
            <div class="play"></div>
            <div class="add"></div>
        </div>
        <div class="content">
            <div class="item" v-for="item in songs" :key="item.id">
                {{item.name}}
            </div>
            <div class="item complete">查看全部</div>
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
            songs:[],
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
            if(data.code == 200){
                this.songs = data.songs;
            }
        }
    }
}
</script>

<style scoped lang="scss">
.rankItem {
    width: 33%;
    background-color: #f5f5f5;
    padding: 20px 0;
    border: 0.3px solid #999;
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
    .content{
        width: 100%;
        .item{
            box-sizing: border-box;
            padding: 0 30px;
            width: 100%;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        }
        .item:nth-child(2n+1){
            background-color: #E8E8E8;
        }
        .item:nth-child(1)::before{
            content: '1';
            width: 15px;
            display: inline-block;
            color: #c10d0c;
        }
        .item:nth-child(2)::before{
            content: '2';
            width: 15px;
            display: inline-block;
            color: #c10d0c;
        }
        .item:nth-child(3)::before{
            content: '3';
            width: 15px;
            display: inline-block;
            color: #c10d0c;
        }
        .item:nth-child(4)::before{
            content: '4';
            width: 15px;
            display: inline-block;
            color: #666;
        }
        .item:nth-child(5)::before{
            content: '5';
            width: 15px;
            display: inline-block;
            color: #666;
        }
        .item:nth-child(6)::before{
            content: '6';
            width: 15px;
            display: inline-block;
            color: #666;
        }
        .item:nth-child(7)::before{
            content: '7';
            width: 15px;
            display: inline-block;
            color: #666;
        }
        .item:nth-child(8)::before{
            content: '8';
            width: 15px;
            display: inline-block;
            color: #666;
        }
        .item:nth-child(9)::before{
            content: '9';
            width: 15px;
            display: inline-block;
            color: #666;
        }
        .item:nth-child(10)::before{
            content: '10';
            width: 15px;
            display: inline-block;
            color: #666;
        }
        .complete{
            text-align: right;
        }
    }
}</style>