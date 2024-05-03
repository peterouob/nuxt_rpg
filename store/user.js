import {defineStore} from "pinia";

export const userStore = defineStore('user',{
    persist:true,
    state:()=>({
        isLogin  : false,
        end: false,
        name: "",
        timeRemaining:3*60*60,
    }),
    actions: {
        login(username){
            if (username === "admin") {
                this.isLogin = true;
                localStorage.setItem("name",username)
            }
        },
    },
})