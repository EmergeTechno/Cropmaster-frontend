import axios from "axios";
const http = axios.create({
    baseURL:"http://localhost:8080/api/v1/contacts",
    headers: { "Content-type": "application/json" },
})
export class ContactServices{
    startChatContact(id){
        return http.put("/startChatForContact/"+id);
    }
    getContactsForFarmer(token,id){
        return http.get("/contactByFarmerId/"+id);
    }
    getContactsForSpecialist(id){
        return http.get("/contactBySpecialistId/"+id);
    }
    getContactById(id){
        return http.get("/contactById/"+id);
    }
    deleteContactById(id){
        return http.delete("/deleteContactById/"+id)
    }
    addContact(farmerId,specialistId){
        return http.post("",{
            "farmerId": farmerId,
            "specialistId": specialistId,
            "isChatStarted": false
        })
    }

}