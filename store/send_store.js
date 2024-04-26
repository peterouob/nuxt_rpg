import {defineStore} from "pinia";

export const sendStore = defineStore('send',{
    persist:true,
    strict: true,
    state:()=>({
        //TODO send
        babyClue:false,//寶物線索
        clue:false,//線索集合
        placePoint:false,//犯罪現場
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
        mouthWater:false,//駱駝的口水
        finger:false,//指紋採集樣本
        lookmouth:false,//目擊者口露
        pencile:false,//偵查筆錄
        sayWrong:false,//說謊證明
        knife:false,//詭異的刀
    }),
        actions: {
            setBabyClue() {
                onMounted(() => {
                    this.babyClue = true;
                    window.localStorage.setItem("babyClue", JSON.stringify(this.babyClue));
                });
            },
            setClue(){
              onMounted(()=>{
                  if(this.peopleProve === true) this.clue = true;
                  window.localStorage.setItem("clue",JSON.stringify(this.clue));
                  window.localStorage.removeItem("peopleProve")
              });
            },
            setPlacePoint() {
                onMounted(() => {
                    if(this.pencile === true) this.placePoint = true;
                    window.localStorage.setItem("placePoint", JSON.stringify(this.placePoint));
                    window.localStorage.removeItem("pencile")
                });
            },
            setProve() {
                onMounted(() => {
                    this.prove = true;
                    window.localStorage.setItem("prove", JSON.stringify(this.prove));
                });
            },
            setGotYou() {
                onMounted(() => {
                    this.gotYou = true;
                    window.localStorage.setItem("gotYou", JSON.stringify(this.gotYou));
                });
            },
            setWhite() {
                onMounted(() => {
                    this.white = true;
                    window.localStorage.setItem("white", JSON.stringify(this.white));
                });
            },
            setDieTime() {
                onMounted(() => {
                    this.dieTime = true;
                    window.localStorage.setItem("dieTime", JSON.stringify(this.dieTime));
                });
            },
            setBabyStone() {
                let chocolate;
                let cat;
                let bitfultea;
                onBeforeMount(()=>{
                    chocolate =JSON.parse(window.localStorage.getItem("chocolate"));
                    cat =JSON.parse(window.localStorage.getItem("cat"));
                    bitfultea = JSON.parse(window.localStorage.getItem("bitfultea"));
                })
                onMounted(() => {
                    if(chocolate === true && cat === true && bitfultea === true) {
                        this.babyStone = true;
                    }
                    window.localStorage.setItem("babyStone", JSON.stringify(this.babyStone));
                    window.localStorage.removeItem("chocolate");
                    window.localStorage.removeItem("cat");
                    window.localStorage.removeItem("bitfultea");
                });
            },
            setDieProve() {
                onMounted(() => {
                    if(this.placePoint === true && this.knife === true && this.diePeople === true)this.dieProve = true;
                    window.localStorage.setItem("dieProve", JSON.stringify(this.dieProve));
                    window.localStorage.removeItem("placePoint");
                    window.localStorage.removeItem("knife")
                    window.localStorage.removeItem("diePeople")

                });
            },
            setPeopleProve() {
                onMounted(() => {
                    if(this.bigBag === true) this.peopleProve = true
                    window.localStorage.setItem("peopleProve", JSON.stringify(this.peopleProve));
                    window.localStorage.removeItem("bigBag")
                });
            },
            setGoOut() {
                onMounted(() => {
                    if(this.prove===true)this.goOut = true;
                    window.localStorage.setItem("goOut", JSON.stringify(this.goOut));
                    window.localStorage.removeItem("prove");
                });
            },
            setGreatGoOut() {
                onMounted(() => {
                    this.greatGoOut = true;
                    window.localStorage.setItem("greatGoOut", JSON.stringify(this.greatGoOut));
                });
            },
            setBigBag() {
                onMounted(() => {
                    if(this.babyStone === true) this.bigBag = true;
                    window.localStorage.setItem("bigBag", JSON.stringify(this.bigBag));
                    window.localStorage.removeItem("babyStone");
                });
            },
            setDiePeople() {
                onMounted(() => {
                    if(this.formalin === true)this.diePeople = true;
                    window.localStorage.setItem("diePeople", JSON.stringify(this.diePeople));
                    window.localStorage.removeItem("formalin");
                });
            },
            setFormalin() {
                onMounted(() => {
                    if(this.sweetSweating === true && this.mouthWater === true)this.formalin = true;
                    window.localStorage.setItem("formalin", JSON.stringify(this.formalin));
                    window.localStorage.removeItem("sweetSweating")
                    window.localStorage.removeItem("mouthWater")
                });
            },
            setSweating() {
                onMounted(() => {
                    this.sweating = true;
                    window.localStorage.setItem("sweating", JSON.stringify(this.sweating));
                });
            },
            setSweetSweating() {
                onMounted(() => {
                    if(this.sweating === true)this.sweetSweating = true;
                    window.localStorage.setItem("sweetSweating", JSON.stringify(this.sweetSweating));
                    window.localStorage.removeItem("sweating")
                });
            },
            setMouthWater() {
                onMounted(() => {
                    this.mouthWater = true;
                    window.localStorage.setItem("mouthWater", JSON.stringify(this.mouthWater));
                });
            },
            setFinger(){
                onMounted(() => {
                    this.finger = true;
                    window.localStorage.setItem("finger", JSON.stringify(this.finger));
                });
            },
            setLookMouth(){
                onMounted(() => {
                    this.lookmouth = true
                    window.localStorage.setItem("lookmouth", JSON.stringify(this.lookmouth));
                });
            },
            setPencile(){
                onMounted(()=>{
                    if(this.lookmouth === true && this.finger === true) this.pencile = true
                    window.localStorage.setItem("pencile", JSON.stringify(this.pencile));
                    window.localStorage.removeItem("lookmouth")
                    window.localStorage.removeItem("finger")
                })
            },
            setSayWrong(){
                onMounted(()=>{
                    if(this.goOut === true && this.dieTime === true){
                        this.sayWrong = true;
                    }
                    window.localStorage.setItem("sayWrong", JSON.stringify(this.pencile));
                    window.localStorage.removeItem("goOut")
                    window.localStorage.removeItem("dieTime")
                })
            },
            setKnife(){
                onMounted(()=>{
                    if(this.sayWrong === true){
                        this.knife = true;
                        this.greatGoOut = true;
                    }
                    window.localStorage.setItem("knife",JSON.stringify(this.knife))
                    window.localStorage.setItem("greatGoOut",JSON.stringify(this.greatGoOut))
                    window.localStorage.removeItem("sayWrong")
                })
            }
        }
})
