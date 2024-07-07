import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '0be443343ba948e09027317d5c773f2e'
    }
})