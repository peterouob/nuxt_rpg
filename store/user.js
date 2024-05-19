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
        // 設定條件只限隊名才登入
        login(username){
            if (username !== "") {
                this.isLogin = true;
                localStorage.setItem("name",username);
                setInterval(()=>{
                    this.timeRemaining -= 1;
                },1000)
            }
        },
    },
})