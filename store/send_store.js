import { defineStore } from "pinia";
import {setTrueState,setDependentState} from "~/tool.js";

export const sendStore = defineStore("send", {
    persist: true,
    strict: true,
    state: () => ({
        //TODO send
        babyClue: false, //寶物線索
        clue: false, //線索集合
        placePoint: false, //犯罪現場
        prove: false, //辦案證明
        gotYou: false, //逮捕令
        white: false, //清白證明
        dieTime: false, //死亡時間
        babyStone: false, //寶石
        dieProve: false, //寶物（死者蘇生的法器
        peopleProve: false, //身份證明
        goOut: false, //出境人口簿
        greatGoOut: false, //正確的出境人口簿
        bigBag: false, //一大袋埃及金幣
        diePeople: false, //驗屍單
        formalin: false, //福馬林
        sweating: false, //出汗劑
        sweetSweating: false, //香汗
        mouthWater: false, //駱駝的口水
        finger: false, //指紋採集樣本
        lookmouth: false, //目擊者口露
        pencile: false, //偵查筆錄
        sayWrong: false, //說謊證明
        knife: false, //詭異的刀

        rose: false,
        tong:false,//臨時通行證
        sc:false,//艷後密令
        bodyHair:false,//體毛
    }),
    actions: {
        // Define actions
        setBabyClue: setTrueState("babyClue"),
        setClue: setDependentState("clue", ["peopleProve"]),
        setPlacePoint: setDependentState("placePoint", ["pencile"]),
        setProve: setTrueState("prove"),
        setGotYou: setTrueState("gotYou"),
        setWhite: setTrueState("white"),
        setDieTime: setTrueState("dieTime"),
        setBabyStone: setDependentState("babyStone", ["chocolate", "cat", "bitfultea"]),
        setDieProve: setDependentState("dieProve", ["placePoint", "knife", "diePeople"]),
        setPeopleProve: setDependentState("peopleProve", ["bigBag"]),
        setGoOut: setDependentState("goOut", ["prove"]),
        setGreatGoOut: setTrueState("greatGoOut"),
        setBigBag: setDependentState("bigBag", ["babyStone"]),
        setDiePeople: setDependentState("diePeople", ["formalin"]),
        setFormalin: setDependentState("formalin", ["sweetSweating", "mouthWater"]),
        setSweating: setTrueState("sweating"),
        setSweetSweating: setDependentState("sweetSweating", ["sweating"]),
        setMouthWater: setTrueState("mouthWater"),
        setFinger: setTrueState("finger"),
        setLookMouth: setTrueState("lookmouth"),
        setPencile: setDependentState("pencile", ["lookmouth", "finger"]),
        setSayWrong: setDependentState("sayWrong", ["goOut", "dieTime"]),
        setKnife: setDependentState("knife", ["sayWrong"]),

    //     補router
        setSend:setTrueState("send"),
        setTong:setTrueState("tong"),
        setSc:setTrueState("sc"),
        setRose:setDependentState("rose",["sc"]),
        setBodyHair:setTrueState("bodyHair"),
    },
});
