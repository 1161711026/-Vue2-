import axios from "axios";

export default{
    getRecommendSong(limit){
        return axios({
            url: "/personalized",
            params:{
                limit
            }
        });
    }
}