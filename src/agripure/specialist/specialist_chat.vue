<template>
    <div class="background">
        <div style="width: 100%; display: flex;justify-content: center;margin:  2rem 0 2rem 0">
            <i class="pi pi-search" style="margin-top: 0.5rem; margin-right: 1rem"></i>
            <div class="card p-fluid" style="width: 80%">
                <pv-autoComplete v-model="value"
                                 :suggestions="items"
                                 @complete="search"
                                 @itemSelect="select"
                                 placeholder="Search on your contacts"
                                 class="searchBar"
                />
            </div>
        </div>
        <div style="margin: 0 2rem 0 2rem" >
            <p v-if="currentContacts !== displayableContacts" @click="reset()" style="text-decoration: underline; cursor: pointer;margin: 1.5rem 0">Reset search</p>
            <div v-for="contact in currentContacts"
                 :key="contact.id">
                <div class="chat-card" @click="irAChat(contact.contactId)">
                    <div class="profile-image">
                        <img :src="contact.imageUrl" alt="Foto de perfil">
                    </div>
                    <div class="chat-content" >
                        <div class="chat-header">
                            <h3 style="margin-bottom: 0.5rem">{{ contact.name }}</h3>
                            <span>{{ contact.hour }}</span>
                        </div>
                        <p style="width: 30%">{{ contact.message }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import {ref} from "vue";
import {ContactServices} from "../../services/contacts-service"
import {UserServices} from "../../services/user-service"
import {ChatServices} from "@/services/chat-service";

export default {
    name: "specialist_chat",
}
</script>

<style scoped>
.background {
    background-color: #242424;
    color: white; /* Cambiar el color del texto si es necesario */
    margin: 15px 20px 15px 20px; /* Agregar el relleno deseado */
    border-radius: 15px; /* Agregar bordes redondeados */
    width: 100%;
    padding-bottom: 3rem;
}
.chat-card {
    display: flex;
    align-items: center;
    padding: 1.2rem;
    background-color: #1c1c1c; /* Color de fondo negro */
    color: white; /* Color de texto blanco */
    border-radius: 10px; /* Bordes redondos */
    cursor: pointer; /* Cambia el cursor al pasar por encima para indicar que es clickeable */
    margin-bottom: 10px; /* Espaciado entre tarjetas */
}

.profile-image {
    width: 50px; /* Ancho de la imagen de perfil */
    height: 50px; /* Alto de la imagen de perfil */
    border-radius: 50%; /* Hace que la imagen sea redonda */
    overflow: hidden; /* Oculta cualquier parte de la imagen fuera del círculo */
    margin-right: 10px;
}

.profile-image img {
    width: 100%; /* Ajusta la imagen de perfil al círculo */
    height: 100%;
    object-fit: cover; /* Mantiene la relación de aspecto de la imagen */
}

.chat-content {
    flex-grow: 1;
    width: 10px;
}

.chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chat-header h3 {
    margin: 0;
    font-size: 1.2rem;
}

.chat-header span {
    font-size: 0.9rem;
    color: #888;
}

p {
    margin: 0;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>