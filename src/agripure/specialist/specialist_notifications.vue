<template>
    <div class="background">
        <div style="margin: 2rem 2rem 2rem 2rem" >
            <div v-for="notification in notifications"
                 :key="notification.id">
                <div class="chat-card">
                    <div class="profile-image" @click="redirectTo(notification.notificationType)">
                        <img :src="notification.imageUrl" alt="Foto de perfil">
                    </div>
                    <div class="chat-content" >
                        <div class="chat-header">
                            <div @click="redirectTo(notification.notificationType)">
                                <h3 style="margin-bottom: 0.5rem">{{ notification.message }}</h3>
                                <p>{{this.calculateTime(notification.date)}}</p>
                            </div>
                            <div style="width: 100%" @click="redirectTo(notification.notificationType)">
                                ‎
                            </div>
                            <div>
                                <pv-button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {FilterMatchMode} from "primevue/api";
import {NotificationService} from "@/services/notification-service";

export default {
    name: "specialist_notifications",

}
</script>
