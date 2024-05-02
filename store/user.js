import {defineStore} from "pinia";

export const userStore = defineStore('user',{
    persist:true,
    state:()=>({
        isLogin  : false,
    }),
    actions: {
        login(username){
            if (username === "admin") {
                this.isLogin = true
            }
        },
    },
})