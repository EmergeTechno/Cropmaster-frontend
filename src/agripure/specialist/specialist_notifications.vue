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
    data(){
        return {
            token: sessionStorage.getItem("jwt"),
            notifications:{},
        };
    },
    created(){
        new NotificationService().getAllNotificationBySpecialistId(2).then(response=>{
            this.notifications=response.data
            const fecha = new Date(); // Obtiene la fecha y hora actual
            this.getFormatDay(fecha)

        })

    },
    methods:{
        redirectTo(notificationType){
            console.log(notificationType)
            switch (notificationType) {
                case 'crop':
                    console.log("crop");
                    this.$router.push("/farmer/cropInventory")
                    return 0

                case 'request':
                    console.log("request");
                    this.$router.push("/specialist/farmers")
                    return 0
            }
        },
        getFormatDay(fecha){
            // Formatea la fecha y la hora en una cadena legible
            const fechaFormateada = `${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`;
            //console.log(fechaFormateada);
            const [fechaParte, horaParte] = fechaFormateada.split(' ');
            // Divide la fecha en día, mes y año
            const [dia, mes, año] = fechaParte.split('/');
            // Divide la hora en horas, minutos y segundos
            const [hora, minutos, segundos] = horaParte.split(':');
            // Asegúrate de que JavaScript interprete el mes como 0-indexed (enero=0, febrero=1, etc.)
            const fechaConvertida = new Date(Number(año), Number(mes) - 1, Number(dia), Number(hora), Number(minutos), Number(segundos));
            //console.log(fechaConvertida);
        },
        calculateTime(dateTimeString) {
            // Convierte la cadena en un objeto Date
            const [fechaParte, horaParte] = dateTimeString.split(' ');
            // Divide la fecha en día, mes y año
            const [dia, mes, año] = fechaParte.split('/');
            // Divide la hora en horas, minutos y segundos
            const [hora, minutos, segundos] = horaParte.split(':');
            // Asegúrate de que JavaScript interprete el mes como 0-indexed (enero=0, febrero=1, etc.)
            const fechaHora = new Date(Number(año), Number(mes) - 1, Number(dia), Number(hora), Number(minutos), Number(segundos));

            // Calcula la diferencia en milisegundos entre la fecha/hora proporcionada y la fecha/hora actual
            const diferenciaEnMilisegundos = new Date() - fechaHora;

            // Convierte la diferencia a segundos
            const segundosTranscurridos = Math.floor(diferenciaEnMilisegundos / 1000);

            if (segundosTranscurridos < 60) {
                return "Hace un momento";
            } else if (segundosTranscurridos < 3600) {
                const minutos = Math.floor(segundosTranscurridos / 60);
                return `Hace ${minutos} ${minutos === 1 ? "minuto" : "minutos"}`;
            } else if (segundosTranscurridos < 86400) {
                const horas = Math.floor(segundosTranscurridos / 3600);
                return `Hace ${horas} ${horas === 1 ? "hora" : "horas"}`;
            } else {
                const dias = Math.floor(segundosTranscurridos / 86400);
                return `Hace ${dias} ${dias === 1 ? "día" : "días"}`;
            }
        }
    }
}
</script>


