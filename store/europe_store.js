import { defineStore } from "pinia";
import { onMounted } from "vue";
import {
  removeState,
  setDependentNumState,
  setDependentState,
  setNumTrueState,
  setTrueState,
} from "~/tool.js";

export const europeStore = defineStore("europe", {
  persist: true,
  strict: true,
  state: () => ({
    graph: false, //葡萄
    farmeone: false, //作物收程表1
    farmtwo: false, //作物收成表2
    lpic: false, //遺跡照片
    maohxioun: false, //國家級冒險委託書
    cando: false, //時力測驗單
    smart: false, //智力測驗單
    maou: false, //冒險者徽章
    todo: false, //任務資訊
    dorgan: false, //屠龍劍
    drogangay: false, //屠龍護甲
    stone: false, //遺跡石板
    droganbaby: false, //龍的寶玉
    originLiou: 0, //鍛造原料
    sgay: false, //神秘棍漲
    invite: false, //王功邀請函
    beatiful: false, //彩虹寶石
    baby: false, //伊麗絲的嘆息
    bronze: false, //青銅任務
    iron: false, //白銀任務
    gold: false, //黃金任務
    relicLegend: false, //遺跡傳說
    chocolate: false, //巧克力
    todoprove: false, //任務證明
    fore: false, //四葉草
    landk: false, //鐮刀和捶子
    sleep: false, //安眠藥
    friendProve: false, //牛頭人友情的象徵

    eu_progess: 0,
    eu_can_see: 1,

    pic: false, //合照，原中國，ＡＰＰ特別放
  }),
  actions: {
    setFore:setTrueState("fore"),
    setLandk: setTrueState("landk"),
    setFarmeone: setTrueState("farmeone"),
    setFarmtwo: setTrueState("farmtwo"),
    setLPic: setTrueState("lpic"),
    setMaohxioun: setDependentState("maohxioun", ["farmeone", "lpic"]),
    setCando: setTrueState("cando"),
    setSmart: setTrueState("smart"),
    setMaou: setDependentState("bronze", ["cando", "smart"]),
    setTodo: setTrueState("todo"),
    setTodoprove: setDependentState("todoprove", ["bodyHair"]),
    setDorgan: setTrueState("dorgan"),
    setDrogangay: setTrueState("drogangay"),
    setStoneAndBaby: setDependentState(
      "stone",
      ["dorgan", "drogangay"],
      true,
    ),
    setDroganbaby : setTrueState(
        "droganbaby"
    ),
    setOriginLiou: setTrueState("originLiou", 5),
    setFriendProve: setDependentNumState("friendProve", ["originLiou"], 5),
    setSgay: setDependentNumState("sgay", ["originLiou"], 8, ),
    setInvite: setDependentState("invite", ["droganbaby", "farmtwo"]),
    setBeatiful: setDependentState("beatiful", ["invite"]),
    setBaby: setDependentState("baby", ["beatiful", "composite"]),
    setIron: setDependentState("iron", ["todoprove"]),
    setGold: setDependentState("gold", ["med"]),
    setrelicLegend: setTrueState("relicLegend"),
    removeMaohxioun: removeState("Maohxioun"),
    // setBronze : setTrueState("bronze"),
    setGraph: setTrueState("graph"),

    //原為china
    setPic: setTrueState("pic"),
  },
});
