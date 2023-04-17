import axios from 'axios'
export default {
    //banner数据接口
    getBanner() {
        return axios({
            url: "/banner",
            method: "GET",
            params: {
                type: 0
            }
        })
    }

}