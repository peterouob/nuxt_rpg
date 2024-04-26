import {defineStore} from "pinia";

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
    }),
    actions: {
        setPlease() {
            this.please = true;
            onMounted(() => {
                window.localStorage.setItem("please", JSON.stringify(this.please));
            });
        },
        setGraph() {
            this.graph = true;
            onMounted(() => {
                window.localStorage.setItem("graph", JSON.stringify(this.graph));
            });
        },
        setSend() {
            this.send = true;
            onMounted(() => {
                window.localStorage.setItem("send", JSON.stringify(this.send));
            });
        },
        setGlasses() {
            this.glasses = true;
            onMounted(() => {
                window.localStorage.setItem("glasses", JSON.stringify(this.glasses));
            });
        },
        setBlue() {
            this.blue = true;
            onMounted(() => {
                window.localStorage.setItem("blue", JSON.stringify(this.blue));
            });
        },
        setWood() {
            this.wood = true;
            onMounted(() => {
                window.localStorage.setItem("wood", JSON.stringify(this.wood));
            });
        },
        setSwood() {
            this.swood = true;
            onMounted(() => {
                window.localStorage.setItem("swood", JSON.stringify(this.swood));
            });
        },
        setSfoodtail() {
            this.sfoodtail = true;
            onMounted(() => {
                window.localStorage.setItem("sfoodtail", JSON.stringify(this.sfoodtail));
            });
        },
        setFixbox() {
            this.fixbox = true;
            onMounted(() => {
                window.localStorage.setItem("fixbox", JSON.stringify(this.fixbox));
            });
        },
        setFoodtail() {
            this.foodtail = true;
            onMounted(() => {
                window.localStorage.setItem("foodtail", JSON.stringify(this.foodtail));
            });
        },
        setDai1() {
            this.dai1 = true;
            onMounted(() => {
                window.localStorage.setItem("dai1", JSON.stringify(this.dai1));
            });
        },
        setDai2() {
            this.dai2 = true;
            onMounted(() => {
                window.localStorage.setItem("dai2", JSON.stringify(this.dai2));
            });
        },
        setDai3() {
            this.dai3 = true;
            onMounted(() => {
                window.localStorage.setItem("dai3", JSON.stringify(this.dai3));
            });
        },
        setDai4() {
            this.dai4 = true;
            onMounted(() => {
                window.localStorage.setItem("dai4", JSON.stringify(this.dai4));
            });
        },
        setGiantbook() {
            this.giantbook = true;
            onMounted(() => {
                window.localStorage.setItem("giantbook", JSON.stringify(this.giantbook));
            });
        },
        setBook() {
            this.book = true;
            onMounted(() => {
                window.localStorage.setItem("book", JSON.stringify(this.book));
            });
        },
        setAvoidsun() {
            this.avoidsun = true;
            onMounted(() => {
                window.localStorage.setItem("avoidsun", JSON.stringify(this.avoidsun));
            });
        },
        setCircleWood() {
            this.circleWood = true;
            onMounted(() => {
                window.localStorage.setItem("circleWood", JSON.stringify(this.circleWood));
            });
        },
        setBreaktool() {
            this.breaktool = true;
            onMounted(() => {
                window.localStorage.setItem("breaktool", JSON.stringify(this.breaktool));
            });
        },
        setTool() {
            this.tool = true;
            onMounted(() => {
                window.localStorage.setItem("tool", JSON.stringify(this.tool));
            });
        },
        setYugi() {
            this.yugi = true;
            onMounted(() => {
                window.localStorage.setItem("yugi", JSON.stringify(this.yugi));
            });
        },
        setLook() {
            this.look = true;
            onMounted(() => {
                window.localStorage.setItem("look", JSON.stringify(this.look));
            });
        },
        setBoliou() {
            this.boliou = true;
            onMounted(() => {
                window.localStorage.setItem("boliou", JSON.stringify(this.boliou));
            });
        },
        setDrewhorse() {
            this.drewhorse = true;
            onMounted(() => {
                window.localStorage.setItem("drewhorse", JSON.stringify(this.drewhorse));
            });
        },
        setBigGood() {
            this.bigGood = true;
            onMounted(() => {
                window.localStorage.setItem("bigGood", JSON.stringify(this.bigGood));
            });
        },
        setKey() {
            this.key = true;
            onMounted(() => {
                window.localStorage.setItem("key", JSON.stringify(this.key));
            });
        },
        setRice() {
            this.rice = true;
            onMounted(() => {
                window.localStorage.setItem("rice", JSON.stringify(this.rice));
            });
        },
        setCat() {
            this.cat = true;
            onMounted(() => {
                window.localStorage.setItem("cat", JSON.stringify(this.cat));
            });
        },
        setGiou() {
            this.giou = true;
            onMounted(() => {
                window.localStorage.setItem("giou", JSON.stringify(this.giou));
            });
        },
        setGioubotal() {
            this.gioubotal = true;
            onMounted(() => {
                window.localStorage.setItem("gioubotal", JSON.stringify(this.gioubotal));
            });
        },
    }
})