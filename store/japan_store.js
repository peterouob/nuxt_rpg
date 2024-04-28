import {defineStore} from "pinia";
import {setDependentNumState} from "~/tool.js";

export const japanStore = defineStore('japan',{
    persist:true,
    strict: true,
    state:()=>({
        please:false, //木匠的委託單
        graph:false,//葡萄
        send:false,//沙子
        glasses:false,//玻璃瓶
        blue:false,//藍染
        wood:false,//木頭
        swood:false,//特殊木頭
        sfoodtail:false,//祈福斧頭
        fixbox:false,//修復專用工具
        foodtail:false,//一班斧頭
        dai1:false,//崇高道德讚許1
        dai2:false,//崇高道德讚許2
        dai3:false,//崇高道德讚許3
        dai4:false,//崇高道德讚許4
        giantbook:false,//劇本
        book:false,//裝訂劇本
        avoidsun:false,//遮陽棚材料
        circleWood:false,//圓木
        breaktool:false,//壞掉工具
        tool:false,//修好得工具
        yugi:false,//諭吉
        look:false,//會面單
        boliou:false,//布料
        drewhorse:false,//會碼
        bigGood:false,//大吉籤
        key:false,//寶庫鑰匙
        rice:false,//阿托米克
        cat:false,//招財貓護身符
        giou:false,//祭祀用酒
        gioubotal:false,//釀酒容器

        woodCount: 0,//木頭數量
        yugiCount: 0,
    }),
    actions: {
        setPlease() {
            onMounted(() => {
                this.please = true;
                window.localStorage.setItem("please", JSON.stringify(this.please));
            });
        },
        setGraph() {
            onMounted(() => {
                this.graph = true;
                window.localStorage.setItem("graph", JSON.stringify(this.graph));
            });
        },
        setSend() {
            onMounted(() => {
                this.send = true;
                window.localStorage.setItem("send", JSON.stringify(this.send));
            });
        },
        setGlasses() {
            onMounted(() => {
                this.glasses = true;
                window.localStorage.setItem("glasses", JSON.stringify(this.glasses));
            });
        },
        setBlue() {
            onMounted(() => {
                this.blue = true;
                window.localStorage.setItem("blue", JSON.stringify(this.blue));
            });
        },
        setWood() {
            onMounted(() => {
                this.wood = true;
                window.localStorage.setItem("wood", JSON.stringify(this.wood));
                window.localStorage.setItem("woodCount",JSON.stringify(5))
            });
        },
        setSwood() {
            onMounted(() => {
                this.swood = true;
                window.localStorage.setItem("swood", JSON.stringify(this.swood));
            });
        },
        setSfoodtail() {
            onMounted(() => {
                this.sfoodtail = true;
                window.localStorage.setItem("sfoodtail", JSON.stringify(this.sfoodtail));
            });
        },
        setFixbox() {
            onMounted(() => {
                window.localStorage.setItem("fixbox", JSON.stringify(this.fixbox));
                this.fixbox = true;
            });
        },
        setFoodtail() {
            onMounted(() => {
                this.foodtail = true;
                window.localStorage.setItem("foodtail", JSON.stringify(this.foodtail));
            });
        },
        setDai1() {
            onMounted(() => {
                this.dai1 = true;
                window.localStorage.setItem("dai1", JSON.stringify(this.dai1));
            });
        },
        setDai2() {
            onMounted(() => {
                this.dai2 = true;
                window.localStorage.setItem("dai2", JSON.stringify(this.dai2));
            });
        },
        setDai3() {
            onMounted(() => {
                this.dai3 = true;
                window.localStorage.setItem("dai3", JSON.stringify(this.dai3));
            });
        },
        setDai4() {
            onMounted(() => {
                this.dai4 = true;
                window.localStorage.setItem("dai4", JSON.stringify(this.dai4));
            });
        },
        setGiantbook() {
            onMounted(() => {
                this.giantbook = true;
                window.localStorage.setItem("giantbook", JSON.stringify(this.giantbook));
            });
        },
        setBook() {
            onMounted(() => {
                this.book = true;
                window.localStorage.setItem("book", JSON.stringify(this.book));
            });
        },
        setAvoidsun() {
            onMounted(() => {
                this.avoidsun = true;
                window.localStorage.setItem("avoidsun", JSON.stringify(this.avoidsun));
            });
        },
        setCircleWood() {
            onMounted(() => {
                this.circleWood = true;
                window.localStorage.setItem("circleWood", JSON.stringify(this.circleWood));
            });
        },
        setBreaktool : setDependentNumState("breaktool",["woodCount"],3),
        setTool() {
            onMounted(() => {
                if(this.breaktool === true)this.tool = true;
                window.localStorage.setItem("tool", JSON.stringify(this.tool));
                window.localStorage.removeItem("breaktool")
            });
        },
        setYugi() {
            onMounted(() => {
                this.yugi = true;
                window.localStorage.setItem("yugi", JSON.stringify(this.yugi));
                this.yugiCount = 2;
                window.localStorage.removeItem("tool")
                window.localStorage.removeItem("please")
            });
        },
        setLook() {
            onMounted(() => {
                if(this.yugi === true && this.yugiCount > 0) this.look = true;
                window.localStorage.setItem("look", JSON.stringify(this.look));
                this.yugi -= 1;
            });
        },
        setBoliou() {
            onMounted(() => {
                this.boliou = true;
                window.localStorage.setItem("boliou", JSON.stringify(this.boliou));
            });
        },
        setDrewhorse() {
            onMounted(() => {
                this.drewhorse = true;
                window.localStorage.setItem("drewhorse", JSON.stringify(this.drewhorse));
            });
        },
        setBigGood() {
            onMounted(() => {
                this.bigGood = true;
                window.localStorage.setItem("bigGood", JSON.stringify(this.bigGood));
            });
        },
        setKey() {
            onMounted(() => {
                this.key = true;
                window.localStorage.setItem("key", JSON.stringify(this.key));
            });
        },
        setRice() {
            onMounted(() => {
                this.rice = true;
                window.localStorage.setItem("rice", JSON.stringify(this.rice));
            });
        },
        setCat() {
            onMounted(() => {
                this.cat = true;
                window.localStorage.setItem("cat", JSON.stringify(this.cat));
            });
        },
        setGiou() {
            onMounted(() => {
                this.giou = true;
                window.localStorage.setItem("giou", JSON.stringify(this.giou));
            });
        },
        setGioubotal() {
            onMounted(() => {
                this.gioubotal = true;
                window.localStorage.setItem("gioubotal", JSON.stringify(this.gioubotal));
            });
        },
        getOutLook(){
            onMounted(()=>{
                window.localStorage.removeItem("look")
            })
        }
    }
})