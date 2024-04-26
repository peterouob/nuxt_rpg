import {defineStore} from "pinia";

export const europeStore = defineStore('europe',{
    persist:true,
    strict: true,
    state:()=>({
        farmeone:false,//作物收程表1
        farmtwo:false,//作物收成表2
        pic:false,//遺跡照片
        maohxioun:false,//國家級冒險委託書
        cando:false,//時力測驗單
        smart:false,//智力測驗單
        maou:false,//冒險者徽章
        todo:false,//任務資訊
        dorgan:false,//屠龍劍
        drogangay:false,//屠龍護甲
        stone:false,//遺跡石板
        droganbaby:false,//龍的寶玉
        originLiou:false,//龍的寶玉
        sgay:false,//神秘棍漲
        invite:false,//王功邀請函
        beatiful:false,//彩虹寶石
        baby:false,//寶物
        bronze:false,//青銅任務
        iron:false,//白銀任務
        gold:false,//黃金任務
        synthesisPlatform:false,//和成台
        relicLegend:false,//遺跡傳說
    }),
    actions: {
        setFarmeone() {
            this.farmeone = true;
            onMounted(() => {
                window.localStorage.setItem("farmeone", JSON.stringify(this.farmeone));
            });
        },
        setFarmtwo() {
            this.farmtwo = true;
            onMounted(() => {
                window.localStorage.setItem("farmtwo", JSON.stringify(this.farmtwo));
            });
        },
        setPic() {
            this.pic = true;
            onMounted(() => {
                window.localStorage.setItem("pic", JSON.stringify(this.pic));
            });
        },
        setMaohxioun() {
            this.maohxioun = true;
            onMounted(() => {
                window.localStorage.setItem("maohxioun", JSON.stringify(this.maohxioun));
            });
        },
        setCando() {
            this.cando = true;
            onMounted(() => {
                window.localStorage.setItem("cando", JSON.stringify(this.cando));
            });
        },
        setSmart() {
            this.smart = true;
            onMounted(() => {
                window.localStorage.setItem("smart", JSON.stringify(this.smart));
            });
        },
        setMaou() {
            this.maou = true;
            onMounted(() => {
                window.localStorage.setItem("maou", JSON.stringify(this.maou));
            });
        },
        setTodo() {
            this.todo = true;
            onMounted(() => {
                window.localStorage.setItem("todo", JSON.stringify(this.todo));
            });
        },
        setDorgan() {
            this.dorgan = true;
            onMounted(() => {
                window.localStorage.setItem("dorgan", JSON.stringify(this.dorgan));
            });
        },
        setDrogangay() {
            this.drogangay = true;
            onMounted(() => {
                window.localStorage.setItem("drogangay", JSON.stringify(this.drogangay));
            });
        },
        setStone() {
            this.stone = true;
            onMounted(() => {
                window.localStorage.setItem("stone", JSON.stringify(this.stone));
            });
        },
        setDroganbaby() {
            this.droganbaby = true;
            onMounted(() => {
                window.localStorage.setItem("droganbaby", JSON.stringify(this.droganbaby));
            });
        },
        setOriginLiou() {
            this.originLiou = true;
            onMounted(() => {
                window.localStorage.setItem("originLiou", JSON.stringify(this.originLiou));
            });
        },
        setSgay() {
            this.sgay = true;
            onMounted(() => {
                window.localStorage.setItem("sgay", JSON.stringify(this.sgay));
            });
        },
        setInvite() {
            this.invite = true;
            onMounted(() => {
                window.localStorage.setItem("invite", JSON.stringify(this.invite));
            });
        },
        setBeatiful() {
            this.beatiful = true;
            onMounted(() => {
                window.localStorage.setItem("beatiful", JSON.stringify(this.beatiful));
            });
        },
        setBaby() {
            this.baby = true;
            onMounted(() => {
                window.localStorage.setItem("baby", JSON.stringify(this.baby));
            });
        },
        setBronze() {
            this.bronze = true;
            onMounted(() => {
                window.localStorage.setItem("bronze", JSON.stringify(this.bronze));
            });
        },
        setIron() {
            this.iron = true;
            onMounted(() => {
                window.localStorage.setItem("iron", JSON.stringify(this.iron));
            });
        },
        setGold() {
            this.gold = true;
            onMounted(() => {
                window.localStorage.setItem("gold", JSON.stringify(this.gold));
            });
        },
        setsynthesisPlatform(){
            this.synthesisPlatform = true;
            onMounted(() => {
                window.localStorage.setItem("synthesisPlatform", JSON.stringify(this.synthesisPlatform()));
            });
        },
        setrelicLegend(){
            this.relicLegend = true;
            onMounted(() => {
                window.localStorage.setItem("relicLegend", JSON.stringify(this.relicLegend));
            });
        }
    }
})