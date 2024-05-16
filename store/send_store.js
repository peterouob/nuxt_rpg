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
    babyStone: false, //寶石
    dieProve: false, //寶物（死者蘇生的法器
    peopleProve: false, //身份證明
    goOut: false, //出境人口簿
    greatGoOut: false, //真正的出境人口簿
    bigBag: false, //一大袋埃及金幣
    diePeople: false, //驗屍單
    formalin: false, //福馬林
    sweating: false, //出汗劑
    sweetSweating: false, //香汗
    mouthWater: false, //很臭的口水
    babyClue: false, //寶物線索
    bodyHair: false, //體毛
    lookmouth: false, //目擊者口露
    pencile: false, //偵查筆錄
    finger: false, //指紋採集樣本
    sayWrong: false, //說謊證明
    // knife: false, //詭異的刀
    rose: false, //玫瑰
    send: false,
    tong: false, //臨時通行證
    sc: false, //艷後密令
    uncall: false, //撤訴書
    yanho: false, //豔后剪影照

    send_progess: 0,
    send_can_see: 1,
  }),
  actions: {
    // Define actions
    setBabyClue: setTrueState("babyClue"),
    setClue: setDependentState("clue", ["peopleProve"]),
    setPlacePoint: setDependentState("placePoint", ["pencile"]),
    setProve: setTrueState("prove"),
    setGotYou: setDependentState("gotYouDail", [
      "yanho",
      "placePoint",
      "dieTime",
    ]),
    setWhite: setDependentState("white", ["uncall"]),
    setDieTime: setDependentState("dieTime", ["goOut"]),
    setBabyStone: setDependentState("babyStone", [
      "chocolate",
      "cat",
      "bitfultea",
    ]),
    setDieProve: setDependentState("dieProve", ["white"]),
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
    setSayWrong: setTrueState("sayWrong"),
    setKnife: setDependentState("greatGoOut", ["sayWrong"]),

    //     補router
    setTong: setTrueState("tong"),
    setSc: setDependentState("sc", ["tong"]),
    setRose: setDependentState("rose", ["sc"]),
    setBodyHair: setTrueState("bodyHair"),
    setUncall: setDependentState("uncall", ["greatGoOut", "pic"]),
    setYanho: setDependentState("yanho", ["diePeople"]),
  },
});
