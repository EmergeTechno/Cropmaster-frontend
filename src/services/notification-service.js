import axios from "axios";
const http = axios.create({
    baseURL:"http://localhost:8080/api/v1/notifications",
    headers: { "Content-type": "application/json" },
})
export class NotificationService{
    sendNotification(notification){
        return http.post("",{
            "message": notification.message,
            "imageUrl": notification.imageUrl,
            "notificationType": notification.notificationType,
            "date": notification.date,
            "toAccountId": notification.toUserId,
            "plantId": notification.plantId,
            "fromAccountId": notification.fromUserId,
            "seen": notification.seen
        })
    }
    getAllNotificationByUserId(userId){
        return http.get("/getByToAccountId/"+userId);
    }

    deleteNotification(id){
        return http.delete("/deleteNotificationById/"+id)
    }

}