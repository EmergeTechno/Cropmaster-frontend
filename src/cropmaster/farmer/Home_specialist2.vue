<template>
  <div class="background">
    <div class="agriculture-specialist-details">
      <div class="title">
        <h1 class="title-text">Agriculture Specialist Details</h1>
      </div>
      <div class="detail">
        <p class="detail-text">Name: {{ specialistName }}</p>
      </div>
      <div class="detail">
        <p class="detail-text">Expertise: {{ expertise }}</p>
      </div>
      <div class="image-container">
        <img
          :src="image"
          alt="Specialist Image"
          class="centered-image"
        />
      </div>
      <div class="detail-row">
        <p class="detail-text">Location: {{ location }}</p>
      </div>
      <div class="divider"></div>
      <div class="detail-row">
        <p class="detail-text">Contact Email: {{ contactEmail }}</p>
      </div>
      <div class="divider"></div>
      <div class="detail-row">
        <p class="detail-text">Areas of Focus: {{ areasOfFocus }}</p>
      </div>
      <div class="button-row">
        <button class="green-button" @click="contactSpecialist">Contactar Especialista</button>
      </div>
    </div>
  </div>
</template>

<script>
import {SpecialistServices} from "../../services/specialists-service"
import {UserServices} from "@/services/user-service";
export default {
  props: ['id'], // Declara que esperas recibir el parámetro 'id' como prop
  data() {
    return {
      specialistName: "",
      expertise: "",
      image: " ",
      location: "",
      contactEmail: "",
      areasOfFocus: "",
    };
  },
  created() {
    this.loadSpecialistDetails(this.id);
  },
  methods: {
    loadSpecialistDetails(id) {
        new UserServices().getUserById(id).then(response=>{
            this.specialistName=response.data.name
            this.image=response.data.imageUrl
            this.location =response.data.location
            new SpecialistServices().getSpecialistInformationByUserId(id).then(response=>{
                this.expertise=response.data[0].expertise
                this.contactEmail = response.data[0].contactEmail
                this.areasOfFocus= response.data[0].areasOfFocus
            })
        })
    },
    contactSpecialist() {
        this.$router.push("/chat/" + this.id)
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
    width: 100%;
}

.agriculture-specialist-details {
  text-align: left;
  padding: 20px;
}

.title-text {
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
}

.detail-text {
  font-size: 18px;
  color: #fff;
  margin: 10px 0;
}

.image-container {
  margin-top: 20px;
  text-align: center;
}

.centered-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.divider {
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
}

.button-row {
  display: flex;
  justify-content: center;
}

.green-button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.green-button:hover {
  background-color: darkgreen;
}
</style>
