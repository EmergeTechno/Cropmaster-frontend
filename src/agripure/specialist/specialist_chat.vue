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
