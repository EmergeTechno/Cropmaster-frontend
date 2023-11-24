import axios from "axios";
const http = axios.create({
    baseURL:"https://fastport-388423.rj.r.appspot.com/api/v1/",
    headers: { "Content-type": "application/json" },
})

export default http;