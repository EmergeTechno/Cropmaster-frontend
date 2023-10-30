import axios from "axios";
const http = axios.create({
    baseURL:"https://my-json-server.typicode.com/DevIOT-AgriPure/agripure-json/plants/",
    headers: { "Content-type": "application/json" },
})
export class PlantServices{
    getPlantInfoById(id){
        return http.get(""+id);
    }
    getAllPlants(){
        return http.get("");
    }
    getResultsByPlantName(plantName){
        return http.get("?name_like="+plantName);
    }
}