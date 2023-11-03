import axios from "axios";
const http = axios.create({
    baseURL:"http://localhost:8080/api/v1/messages",
    headers: { "Content-type": "application/json" },
})
export class ChatServices{
    sendMessage(message){
        return http.post("",{
            "contactId": message.contactId,
            "authorId": message.authorId,
            "message": message.message,
            "hour": message.hour
        })
    }
    getChatByContactId(id){
        return http.get("/"+id);
    }

}