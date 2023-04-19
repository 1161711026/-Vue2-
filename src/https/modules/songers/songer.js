import axios from "axios"

export default{
    getSonger(){
        return axios({
            url: "/top/artists",
            params:{
                limit: 5
            }
        })
    },
    getSongerDetail(id){
        return axios({
            url: "/artist/desc",
            params:{
                id
            }
        })
    }
}