<template>
    <div>
        <v-alert
            density="compact"
            text="好像缺少東西！"
            title="提示"
            type="warning"
            v-if="dialog"
        >
        </v-alert>
        <v-alert
            style="background-color: black"
            density="compact"
            text="背包獲得道具！"
            title="提示"
            type="success"
            v-if="!dialog"
        ></v-alert>
    </div>
</template>

<script setup>
import "../../store/send_store.js";
import { sendStore } from "~/store/send_store.js";
import { chinaStore } from "~/store/china_store.js";
import { europeStore } from "~/store/europe_store.js";
import { japanStore } from "~/store/japan_store.js";
import { goBack } from "~/tool.js";

let dialog = ref(false);
const useSend = sendStore();
const useChina = chinaStore();
const useEurope = europeStore();
const useJapan = japanStore();
const router = useRouter();
const route = useRoute();
let index = route.params.id;
let conditionStatisfid = ref();

const methodNames = {
    babyClue: { method: "setBabyClue" },
    getClue: { method: "setClue", condition: () => useSend.peopleProve },
    placePoint: { method: "setPlacePoint", condition: () => useSend.pencile },
    prove: { method: "setProve" },
    gotyou: {
        method: "setGotYou",
        condition: () => useSend.yanho && useSend.placePoint && useSend.dieTime,
    },
    white: { method: "setWhite", condition: () => useSend.uncall },
    //補qrcode->完成
    clue: { method: "setClue", condition: () => useSend.peopleProve },
    dieTime: { method: "setDieTime", condition: () => useSend.goOut },
    babyStone: {
        method: "setBabyStone",
        condition: () =>
            useEurope.chocolate && useChina.bitfultea && useJapan.cat,
    },
    dieProve: {
        method: "setDieProve",
        // 詭異的刀有砍 - 修 | 完成
        condition: () => useSend.white,
    },
    peopleProve: { method: "setPeopleProve", condition: () => useSend.bigBag },
    goOut: { method: "setGoOut", condition: () => useSend.prove },
    greatGoOut: { method: "setGreatGoOut" },
    bigBag: { method: "setBigBag", condition: () => useSend.babyStone },
    diePeople: { method: "setDiePeople", condition: () => useSend.formalin },
    formalin: {
        method: "setFormalin",
        condition: () => useSend.sweetSweating && useSend.mouthWater,
    },
    sweating: { method: "setSweating" },
    sweetSweating: {
        method: "setSweetSweating",
        condition: () => useSend.sweating,
    },
    mouthWater: { method: "setMouthWater" },
    finger: { method: "setFinger" },
    lookmouth: { method: "setLookMouth" },
    pencile: {
        method: "setPencile",
        condition: () => useSend.lookmouth && useSend.finger,
    },
    sayWrong: {
        method: "setSayWrong",
    },
    tong: { method: "setTong" },
    sc: { method: "setSc", condition: () => useSend.tong },
    rose: { method: "setRose", condition: () => useSend.sc },
    bodyHair: { method: "setBodyHair" },
    uncall: {
        method: "setUncall",
        condition: () => useSend.greatGoOut && useEurope.pic,
    },
    yanho: { method: "setYanho", condition: () => useSend.diePeople },

    // 有問題
};

const methodInfo = methodNames[index];

if (methodInfo) {
    const { method, condition } = methodInfo;
    if (condition && method) {
        conditionStatisfid = condition();
        conditionStatisfid ? (dialog = false) : (dialog = true);
        if (dialog === false) {
            useSend[method]();
            useSend.send_progess += 3.35;
            useSend.send_can_see -= 0.03;
        }
        goBack();
    } else {
        useSend[method]();
        useSend.send_progess += 3.3;
        useSend.send_can_see -= 0.033;
        goBack();
    }
}
</script>
