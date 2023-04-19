import axios from "axios";

export default{
    getHotDj(){
        return axios({
            url:"/dj/toplist",
            params:{
                type:"hot",
                limit: 5
            }
        });
    }
}