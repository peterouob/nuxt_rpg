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
            density="compact"
            text="背包獲得道具！"
            title="提示"
            type="success"
            v-if="!dialog"
        ></v-alert>
    </div>
</template>

<script setup>
import { europeStore } from "~/store/europe_store.js";
import { goBack } from "~/tool.js";
import { sendStore } from "~/store/send_store.js";
import { japanStore } from "~/store/japan_store.js";
import { chinaStore } from "~/store/china_store.js";

const route = useRoute();
let index = route.params.id;
const router = useRouter();
const useEurope = europeStore();
const useSend = sendStore();
const useJapan = japanStore();
const useChina = chinaStore();
let conditionStatisfid = ref();
let dialog = ref();
const methodNames = {
    landk: { method: "setLandk" },
    fore: { method: "setFore" },
    farmeone: { method: "setFarmeone" },
    farmtwo: { method: "setFarmtwo", condition: () => useEurope.sgay },
    lpic: { method: "setLPic" },
    maohxioun: {
        method: "setMaohxioun",
        condition: () => useEurope.farmeone && useEurope.lpic,
    },
    cando: { method: "setCando" },
    smart: { method: "setSmart" },
    bronze: {
        method: "setMaou",
        condition: () => useEurope.cando && useEurope.smart,
    },
    todo: { method: "setTodo"},
    todoprove: { method: "setTodoprove", condition: () => useSend.bodyHair },
    dorgan: { method: "setDorgan" },
    drogangay: { method: "setDrogangay" },
    //
    stone: {
        method: "setStoneAndBaby",
        condition: () => useEurope.dorgan && useEurope.drogangay,
    },
  droganbaby:{
      method: "setDroganbaby",
  },
    originLiou: {
        method: "setOriginLiou",
        extraAction: () => {
            useEurope.originLiou += 1;
        },
    },
    friendProve: {
        method: "setFriendProve",
        condition: () => useEurope.originLiou >= 5,
      extraAction:()=>{
          useEurope.originLiou -= 5
      }
    },
    sgay: {
        method: "setSgay",
        condition: () => useEurope.originLiou >= 8 && useEurope.friendProve,
      extraAction:()=>{
          useEurope.originLiou -= 8
      }
    },
    invite: {
        method: "setInvite",
        condition: () => useEurope.droganbaby && useEurope.farmtwo,
    },
    beatiful: { method: "setBeatiful", condition: () => useEurope.invite },
    baby: {
        method: "setBaby",
        condition: () => useEurope.beatiful && useJapan.composite,
    },
    iron: { method: "setIron", condition: () => useEurope.todoprove },

    gold: { method: "setGold", condition: () => useChina.med },
    relicLegend: { method: "setrelicLegend" },
    chocolate: { method: "setChocolate" },
    rmMaohXioun: { method: "removeMaohxioun" },
    graph: { method: "setGraph" },

    //原為china
    pic: { method: "setPic" },
};

const methodInfo = methodNames[index];
let count = 0;
if (methodInfo) {
    const { method, condition, extraAction } = methodInfo;
    if (condition && method) {
        conditionStatisfid = condition();
        conditionStatisfid ? (dialog = false) : (dialog = true);
        if (dialog === false) {
            if (count === 0) {
                useEurope[method]();
                useEurope.eu_progess += 3.6;
                useEurope.eu_can_see -= 0.033;
                count++;
            }
        }
        goBack();
    } else {
        useEurope[method]();
        if (count === 0) {
            useEurope[method]();
            useEurope.eu_progess += 3.6;
            useEurope.eu_can_see -= 0.033;
            count++;
        }
        goBack();
    }
}
</script>
