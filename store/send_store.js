import {defineStore} from "pinia";

export const sendStore = defineStore('send',{
    persist:true,
    strict: true,
    state:()=>({
        babyClue:false,//寶物線索
        clue1:false,//線索1
        clue2:false,//線索2
        clue3:false,//線索3
        placePoint:false,//可疑的地點
        prove:false,//辦案證明
        gotYou:false,//逮捕令
        white:false,//清白證明
        dieTime:false,//死亡時間
        babyStone:false,//寶石
        dieProve:false,//寶物（死者蘇生的法器
        peopleProve:false,//身份證明
        goOut:false,//出境人口簿
        greatGoOut:false,//正確的出境人口簿
        bigBag:false,//一大袋埃及金幣
        diePeople:false,//驗屍單
        formalin:false,//福馬林
        sweating:false,//出汗劑
        sweetSweating:false,//香汗
        mouthWater:false,//很臭的口水
    }),
    actions:{
        setBabyClue(){
            this.babyClue = true
            onMounted(()=>{
                window.localStorage.setItem("babyClue",JSON.stringify(this.babyClue))
            })
        }
    }
})
