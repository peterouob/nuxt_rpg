import {defineStore} from "pinia";

export const userStore = defineStore('china',{
    persist:true,
    strict: true,
    state:()=>({
        isLogin  : false,
    }),
    actions: {
        login(username,password){
            if (username === "admin" && password === "admin") {
                this.isLogin = true
            }
        }
    }
})