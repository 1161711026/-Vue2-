import axios from "axios";

export default{
    getRecommendSong(limit){
        return axios({
            url: "/personalized",
            params:{
                limit
            }
        });
    },
    getNewSong(){
        return axios({
            url: "/top/album",
            params:{
                year: 2023
            }
        })
    },
    getRank(){
        return axios({
            url: "/toplist",

        })
    },
    getSongDetail(id){
        return axios({
            url: "/playlist/detail",
            params:{
                id
            }
        });
    },
    getSong(ids){
        
        return axios({
            url:"/song/detail",
        
            params:{
                ids,
            }
        })
    }
}