<template>
    <div style="display: flex;justify-content: center; width: 100%; height: 100%">
        <div class="card">
            <pv-card class="SignInCard">
                <template #title>
                    <div style="display: flex;justify-content: center">
                        <img src="../../assets/logo.png" style="height: 50px;margin-bottom: 2rem"/>
                    </div>
                    <div class="Text" style="display: flex;justify-content: start; padding-left: 2rem; padding-bottom: 1rem">
                        Login
                    </div>
                    <p style="font-weight: lighter; font-size: 1rem;padding-left: 2rem">
                        Welcome, please Log in.
                    </p>
                </template>
                <template #content>
                    <div class="form">
                        <label >Email</label>
                        <pv-input id="email" class="input" v-model="email" maxlength="256" ></pv-input>
                        <label style="margin-top: 0.5rem">Password</label>
                        <pv-input id="password" type="password" class="input" v-model="password"></pv-input>
                    </div>
                    <div class="footer"  >
                        <div class="Text" style="font-weight: lighter; font-size: 0.9rem; margin-bottom: 3rem">
                            <router-link to="/forgot-password" class="rw">
                                ¿Forgot your password?
                            </router-link>
                        </div>
                        <div class="buttons">
                            <router-link to="/sign-up" class="rw" ><pv-button style="background-color: darkgreen;border-color: darkgreen;color: white" label="Register"/></router-link>
                            <pv-button @click="signIn" style="background-color: darkgreen;border-color: darkgreen;color: white" label="Log in"></pv-button>
                        </div>
                    </div>
                </template>
            </pv-card>
        </div>
    </div>

</template>

<script>
import {UserServices} from "@/services/user-service";
import Toast from "primevue/toast";
export default {
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        signIn(){
          if(this.email==="farmer"){
              sessionStorage.setItem("id","1")
              sessionStorage.setItem("name","Diego Talledo")
              sessionStorage.setItem("email","diego@gmail.com")
              sessionStorage.setItem("imageUrl","https://static.educalingo.com/img/en/800/farmer.jpg")
              sessionStorage.setItem("type","farmer")
              sessionStorage.setItem("plan","premium")
            sessionStorage.setItem("type","farmer")
            this.$router.push("/farmer/cropInventory")

          }else {
              sessionStorage.setItem("id","2")
              sessionStorage.setItem("name","Alonso Sanchez")
              sessionStorage.setItem("email","alonso@gmail.com")
              sessionStorage.setItem("imageUrl","https://iica.int/sites/default/files/2020-01/Depositphotos_76015093_s-2019.jpg")
            sessionStorage.setItem("type","specialist")
            this.$router.push("/specialist/farmers")
          }
            /*new UserServices().login(this.email,this.password).then(response=>{
                    sessionStorage.setItem("jwt",response.data.jwt)
                    sessionStorage.setItem("id",response.data.id)
                    sessionStorage.setItem("name",response.data.name)
                    sessionStorage.setItem("email",response.data.email)
                    sessionStorage.setItem("type",response.data.type)
                    sessionStorage.setItem("plan",response.data.plan)
                    if(response.data.type==="manager"){
                        this.sendMessage("manager",response.data.name)
                        this.$router.push("/rooms")
                    }
                    else{
                        this.sendMessage("guest",response.data.name)
                        this.$router.push("/services")
                    }
                }
            ).catch(reason => {
                this.$toast.add({severity:'error', summary: 'Credenciales invalidad', detail:'Correo o contraseña incorrecta', life: 3000});
            })*/
        },
        sendMessage(type,name){
            let obj={
                logged:true,
                type: type,
                name:name
            }
            this.emitter.emit("message-from-sign-up",obj)
        }
    },
    created() {
        sessionStorage.clear()
        localStorage.clear()
    }
}
</script>

<style scoped>
.form label{
    display: block;
}
.SignInCard{
    width: 10cm;
    border-radius: 0.5rem;
    padding-top: 2rem;
}
.Text{
    text-align: center;
}
.rw{
    color: white;
    text-decoration: none;
}
.card{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 97vh;
}
.form{
    margin: 0 0 0 2rem;
    padding-top: 1rem;
}
.form .input{
    margin: 0.3rem 0;

}
.buttons{
    display: flex;
    margin: 1.3rem 0;
    justify-content: space-around;
}
.footer{
    margin-top: 1rem;
}
.input{
    width: 85%;

}
.font{
    font-family: 'Roboto', sans-serif;
}
</style>