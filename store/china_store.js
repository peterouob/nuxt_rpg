import {defineStore} from "pinia";
import {onMounted} from "vue";
import {removeState, setDependentState, setTrueState} from "~/tool.js";

export const chinaStore = defineStore('china',{
    persist:true,
    strict: true,
    state:()=>({
        topgod:false,//皇上聖旨
        daedeu:false,//道德經
        sofa:false,//書法用具
        cash:false,//一百貝殼幣
        ya:false,//茶葉
        wize:false,//藥草清單
        zerozhi:false,//靈芝
        body:false,//皇上的身體檢查舒
        whiteyes:false,//白起的同意書
        yes:false,//管中的同意書
        gotyou:false,//抓捕令
        success:false,//抓捕成功
        girl:false,//女蝸時
        bitfultea:false,//美人茶
        blue:false,//藍染
    }),
    actions: {
        setBlue : setTrueState("blue"),
        setTopgood : setTrueState("topgod"),
        setDaedeu : setTrueState("daedeu"),
        setsofa:setTrueState("sofa"),
        setCash : setTrueState("cash"),
        setYa : setDependentState("ya",["cash"]),
        setWize : setTrueState("wize"),
        setZerozhi : setTrueState("zerozhi"),
        setBody:setDependentState("body",["fore","rose","zerozhi"],true),
        setWhiteyes : setDependentState("whiteyes",["fiveto"]),
        setYes : setDependentState("yes",["sofa"]),
        setGotyou : setDependentState("gotyou",["yes","whiteyes","body"]),
        setSuccess : setDependentState("success",["gotyou"]),
        setGirl : setDependentState("girl",["success"]),
        removeDaedeu:removeState("daedeu"),
        removeYa:removeState("ya")
    }
})