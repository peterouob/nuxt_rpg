import {defineStore} from "pinia";

export const chinaStore = defineStore('china',{
    persist:true,
    strict: true,
    state:()=>({
        topgood:false,//皇上聖旨
        daedeu:false,//道德經
        grandfather:false,//祖傳用具
        cash:false,//一百貝殼幣
        ya:false,//茶葉
        fiveto:false,//武士刀
        wize:false,//藥草清單
        zerozhi:false,//靈芝
        rose:false,//玫瑰
        fore:false,//四葉草
        farm:false,//鐮刀和捶子
        medice:false,//安眠藥
        body:false,//皇上的身體檢查舒
        whiteyes:false,//白起的同意書
        yes:false,//管中的同意書
        gotyou:false,//抓捕令
        success:false,//抓捕成功
        girl:false,//女蝸時
    }),
    actions: {
        setTopgood() {
            this.topgood = true;
            onMounted(() => {
                window.localStorage.setItem("topgood", JSON.stringify(this.topgood));
            });
        },
        setDaedeu() {
            this.daedeu = true;
            onMounted(() => {
                window.localStorage.setItem("daedeu", JSON.stringify(this.daedeu));
            });
        },
        setGrandfather() {
            this.grandfather = true;
            onMounted(() => {
                window.localStorage.setItem("grandfather", JSON.stringify(this.grandfather));
            });
        },
        setCash() {
            this.cash = true;
            onMounted(() => {
                window.localStorage.setItem("cash", JSON.stringify(this.cash));
            });
        },
        setYa() {
            this.ya = true;
            onMounted(() => {
                window.localStorage.setItem("ya", JSON.stringify(this.ya));
            });
        },
        setFiveto() {
            this.fiveto = true;
            onMounted(() => {
                window.localStorage.setItem("fiveto", JSON.stringify(this.fiveto));
            });
        },
        setWize() {
            this.wize = true;
            onMounted(() => {
                window.localStorage.setItem("wize", JSON.stringify(this.wize));
            });
        },
        setZerozhi() {
            this.zerozhi = true;
            onMounted(() => {
                window.localStorage.setItem("zerozhi", JSON.stringify(this.zerozhi));
            });
        },
        setRose() {
            this.rose = true;
            onMounted(() => {
                window.localStorage.setItem("rose", JSON.stringify(this.rose));
            });
        },
        setFore() {
            this.fore = true;
            onMounted(() => {
                window.localStorage.setItem("fore", JSON.stringify(this.fore));
            });
        },
        setFarm() {
            this.farm = true;
            onMounted(() => {
                window.localStorage.setItem("farm", JSON.stringify(this.farm));
            });
        },
        setMedice() {
            this.medice = true;
            onMounted(() => {
                window.localStorage.setItem("medice", JSON.stringify(this.medice));
            });
        },
        setBody() {
            this.body = true;
            onMounted(() => {
                window.localStorage.setItem("body", JSON.stringify(this.body));
            });
        },
        setWhiteyes() {
            this.whiteyes = true;
            onMounted(() => {
                window.localStorage.setItem("whiteyes", JSON.stringify(this.whiteyes));
            });
        },
        setYes() {
            this.yes = true;
            onMounted(() => {
                window.localStorage.setItem("yes", JSON.stringify(this.yes));
            });
        },
        setGotyou() {
            this.gotyou = true;
            onMounted(() => {
                window.localStorage.setItem("gotyou", JSON.stringify(this.gotyou));
            });
        },
        setSuccess() {
            this.success = true;
            onMounted(() => {
                window.localStorage.setItem("success", JSON.stringify(this.success));
            });
        },
        setGirl() {
            this.girl = true;
            onMounted(() => {
                window.localStorage.setItem("girl", JSON.stringify(this.girl));
            });
        },
    }
})