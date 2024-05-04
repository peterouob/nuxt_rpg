import {defineStore} from "pinia";
import {removeState, setDependentNumState, setDependentState, setNumTrueState, setTrueState} from "~/tool.js";

export const japanStore = defineStore('japan',{
    persist:true,
    strict: true,
    state:()=>({
        please:false, //木匠的委託單
        glasses:false,//玻璃瓶
        woodCount:0,//原木
        swood:false,//特殊木才
        sfoodtail:false,//祈福斧頭
        fixbox:false,//修復專用工具
        foodtail:false,//一班斧頭
        dai1:false,//崇高道德讚許1
        dai2:false,//崇高道德讚許2
        dai3:false,//崇高道德讚許3
        dai4:false,//崇高道德讚許4
        giantbook:false,//散落的劇本
        book:false,//裝訂劇本
        avoidsun:false,//遮陽棚材料
        circleWood:false,//圓木
        breaktool:false,//壞掉工具
        tool:false,//修好得工具
        yugi:0,//諭吉
        look:false,//會面單
        boliou:false,//布料
        drewhorse:false,//會碼
        bigGood:false,//大吉籤
        key:false,//寶庫鑰匙
        rice:false,//阿托米克
        cat:false,//招財貓護身符
        giou:false,//祭祀用酒
        gioubotal:false,//釀酒容器

        composite:false,//合成
        fiveto:false,//武士刀

        jp_progess:0,
        jp_can_see:1,
        send: false
    }),
    actions: {
        //改
        setSend:setTrueState("send"),
        setPlease : setTrueState("please"),
        setGlasses : setDependentState("glasses",["send"]),
        setWood : setTrueState("woodCount",1),
        setSwood : setDependentState("swood","foodtail"),
        // setSfoodtail : setDependentState("sfoodtail","foodtail"),
        setFixbox : setTrueState("fixbox"),
        setFoodtail : setTrueState("foodtail"),
        setDai1 : setDependentState("dai1",["fixbox","sfoodtail"]),
        setDai2 : setDependentState("dai2",["graph","glasses"]),
        setDai3 : setDependentState("dai3",["avoidsun"]),
        //error
        setDai4 : setDependentState("dai4",["boliou","blue"]),
        setBook : setDependentState("book",["giantbook"]),
        setGiantbook : setTrueState("giantbook"),
        setAvoidsun : setDependentState("avoidsun",["book"]),
        setBreaktool : setDependentNumState("breaktool",["woodCount"],3),
        setTool : setDependentState("tool",["breaktool"]),
        setYugi : setDependentState("yugi",["please","tool"],2),
        setLook : setDependentNumState("look",["yugi"],1),
        setBoliou : setDependentNumState("boliou",["yugi"],1),
        serewhorse : setDependentNumState("drewhorse",["dail1","dail2","dail3","dail4"]),
        setBigGood : setDependentNumState("bigGood",["drewhorse"]),
        setKey : setTrueState("key"),
        setRice : setDependentNumState("rice",["key"]),
        setCat : setDependentState("cat",["giou"]),
        setGiou : setDependentState("giou",["gioubotal"]),
        setGioubotal:setTrueState("gioubotal"),

        // 補router getOut為純回收
        removeLook : removeState("look"),
        removeBigGood : removeState("bigGood"),
        setFivetwo:setTrueState("fiveto"),
        setComposite : setDependentState("composite",["woodCount"],4),
    }
})