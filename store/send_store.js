import { defineStore } from "pinia";
import { setTrueState, setDependentState } from "~/tool.js";

export const sendStore = defineStore("send", {
  persist: true,
  strict: true,
  state: () => ({
    //TODO send
    clue: false, //線索集合
    placePoint: false, //可疑的地點照片
    prove: false, //辦案證明
    gotYou: false, //逮捕令
    white: false, //清白證明
    dieTime: false, //死亡時間
    dieProve: false, //寶物（死者蘇生的法器
    peopleProve: false, //身份證明
    goOut: false, //出境人口簿
    greatGoOut: false, //真正的出境人口簿
    diePeople: false, //驗屍單
    formalin: false, //福馬林
    babyClue: false, //寶物線索
    bodyHair: false, //體毛
    lookmouth: false, //目擊者口露
    pencile: false, //偵查筆錄
    finger: false, //指紋採集樣本
    rose: false, //玫瑰
    send: false,//沙子
    uncall: false, //撤訴書

    send_progess: 0,
    send_can_see: 1,
  }),
  actions: {
    // Define actions
    setBabyClue: setTrueState("babyClue"),
    setPlacePoint: setDependentState("placePoint", ["pencile"]),
    setProve: setTrueState("prove"),
    setGotYou: setDependentState("gotYouDail", [
      "diePeople",
      "placePoint",
      "dieTime",
    ]),
    setWhite: setDependentState("white", ["uncall"]),
    setDieTime: setDependentState("dieTime", ["goOut"]),
    setDieProve: setDependentState("dieProve", ["white"]),
    setGoOut: setDependentState("goOut", ["prove"]),
    setDiePeople: setDependentState("diePeople", ["formalin"]),
    setFormalin: setTrueState("formalin"),
    setFinger: setTrueState("finger"),
    setClue:setTrueState("clue"),
    setLookMouth: setTrueState("lookmouth"),
    setPencile: setDependentState("pencile", ["lookmouth", "finger"]),
    setSayWrong: setTrueState("sayWrong"),
    setRose: setTrueState("rose"),
    setBodyHair: setTrueState("bodyHair"),
    setUncall: setDependentState("uncall", ["pic"]),
  },
});
