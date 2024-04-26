import {defineStore} from "pinia";

export const sendStore = defineStore('send',{
    persist:true,
    strict: true,
    state:()=>({
        //TODO send
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


        //TODO china


        //TODO europe 開始接任務後顯示在新的頁面
    }),
        actions: {
            setBabyClue() {
                this.babyClue = true;
                onMounted(() => {
                    window.localStorage.setItem("babyClue", JSON.stringify(this.babyClue));
                });
            },
            setClue1() {
                this.clue1 = true;
                onMounted(() => {
                    window.localStorage.setItem("clue1", JSON.stringify(this.clue1));
                });
            },
            setClue2() {
                this.clue2 = true;
                onMounted(() => {
                    window.localStorage.setItem("clue2", JSON.stringify(this.clue2));
                });
            },
            setClue3() {
                this.clue3 = true;
                onMounted(() => {
                    window.localStorage.setItem("clue3", JSON.stringify(this.clue3));
                });
            },
            setPlacePoint() {
                this.placePoint = true;
                onMounted(() => {
                    window.localStorage.setItem("placePoint", JSON.stringify(this.placePoint));
                });
            },
            setProve() {
                this.prove = true;
                onMounted(() => {
                    window.localStorage.setItem("prove", JSON.stringify(this.prove));
                });
            },
            setGotYou() {
                this.gotYou = true;
                onMounted(() => {
                    window.localStorage.setItem("gotYou", JSON.stringify(this.gotYou));
                });
            },
            setWhite() {
                this.white = true;
                onMounted(() => {
                    window.localStorage.setItem("white", JSON.stringify(this.white));
                });
            },
            setDieTime() {
                this.dieTime = true;
                onMounted(() => {
                    window.localStorage.setItem("dieTime", JSON.stringify(this.dieTime));
                });
            },
            setBabyStone() {
                this.babyStone = true;
                onMounted(() => {
                    window.localStorage.setItem("babyStone", JSON.stringify(this.babyStone));
                });
            },
            setDieProve() {
                this.dieProve = true;
                onMounted(() => {
                    window.localStorage.setItem("dieProve", JSON.stringify(this.dieProve));
                });
            },
            setPeopleProve() {
                this.peopleProve = true;
                onMounted(() => {
                    window.localStorage.setItem("peopleProve", JSON.stringify(this.peopleProve));
                });
            },
            setGoOut() {
                this.goOut = true;
                onMounted(() => {
                    window.localStorage.setItem("goOut", JSON.stringify(this.goOut));
                });
            },
            setGreatGoOut() {
                this.greatGoOut = true;
                onMounted(() => {
                    window.localStorage.setItem("greatGoOut", JSON.stringify(this.greatGoOut));
                });
            },
            setBigBag() {
                this.bigBag = true;
                onMounted(() => {
                    window.localStorage.setItem("bigBag", JSON.stringify(this.bigBag));
                });
            },
            setDiePeople() {
                this.diePeople = true;
                onMounted(() => {
                    window.localStorage.setItem("diePeople", JSON.stringify(this.diePeople));
                });
            },
            setFormalin() {
                this.formalin = true;
                onMounted(() => {
                    window.localStorage.setItem("formalin", JSON.stringify(this.formalin));
                });
            },
            setSweating() {
                this.sweating = true;
                onMounted(() => {
                    window.localStorage.setItem("sweating", JSON.stringify(this.sweating));
                });
            },
            setSweetSweating() {
                this.sweetSweating = true;
                onMounted(() => {
                    window.localStorage.setItem("sweetSweating", JSON.stringify(this.sweetSweating));
                });
            },
            setMouthWater() {
                this.mouthWater = true;
                onMounted(() => {
                    window.localStorage.setItem("mouthWater", JSON.stringify(this.mouthWater));
                });
            },
        }
})
