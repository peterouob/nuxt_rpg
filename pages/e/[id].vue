<template>
  <div>
    <v-alert
        density="compact"
        text="好像缺少東西！"
        title="提示"
        type="warning"
        v-if="dialog">
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
import {europeStore} from "~/store/europe_store.js";
import {goBack} from "~/tool.js";
import {sendStore} from "~/store/send_store.js";
import {japanStore} from "~/store/japan_store.js";
import {chinaStore} from "~/store/china_store.js";

const route = useRoute()
let index = route.params.id
const router = useRouter()
const useEurope = europeStore()
const useSend = sendStore()
const useJapan = japanStore()
const useChina = chinaStore()
let conditionStatisfid = ref()
let dialog = ref()
const methodNames = {
  landk: {method: 'setLandk'},
  sleep: {method: 'setSleep',condition: ()=> useEurope.landk},
  fore: {method: 'setFore',condition: ()=> useEurope.sleep},
  farmeone: { method: 'setFarmeone' },
  farmtwo: { method: 'setFarmtwo', condition: ()=> useEurope.sgay},
  lpic: { method: 'setPic'},
  maohxioun: { method: 'setMaohxioun',condition: ()=> (useEurope.farmeone && useEurope.lpic)},
  cando: { method: 'setCando' },
  smart: { method: 'setSmart' },
  bronze: { method: 'setMaou', condition: ()=> (useEurope.cando && useEurope.smart )},
  todo: { method: 'setTodo', condition: ()=> useEurope.maou},
  todoprove: {method:'todoprove',condition: ()=> useSend.bodyHair},
  dorgan: { method: 'setDorgan' },
  drogangay: { method: 'setDrogangay' },
  drogAndBaby: { method: 'setStoneAndBaby',condition: ()=> (useEurope.dorgan && useEurope.drogangay)},
  originLiou: { method: 'setOriginLiou',extraAction: useEurope.originLiou += 1},
  friendProve: {method: 'friendProve',condition: ()=> useEurope.originLiou > 5},
  sgay: { method: 'setSgay' ,condition: ()=>useEurope.originLiou > 8},
  invite: { method: 'setInvite' ,condition: ()=> (useEurope.droganbaby && useEurope.farmtwo)},
  beatiful: { method: 'setBeatiful' ,condition: ()=> useEurope.invite},
  baby: {method:'setBaby',condition: ()=> (useEurope.beatiful && useJapan.composite) },
  iron: { method: 'setIron' ,condition: ()=> useEurope.todoprove },
  gold: { method: 'setGold' ,condition: ()=> useChina.med},
  relicLegend: { method: 'setrelicLegend' },
  chocolate: { method: 'setChocolate' },
  rmMaohXioun : {method: 'removeMaohxioun'},
  graph:{method:'setGraph'},
};


const methodInfo = methodNames[index];

if (methodInfo) {
  const {method, condition,extraAction} = methodInfo;
  if(condition && method){
    conditionStatisfid = condition();
    conditionStatisfid ? dialog = false : dialog = true;
    if (dialog === false){
      useEurope[method]();
      useEurope.eu_progess += 3.6;
      useEurope.eu_can_see -= 0.033;
    }
    goBack();
  } else{
    useEurope[method]();
    useEurope.eu_progess += 3.6;
    useEurope.eu_can_see -= 0.033;
    goBack();
  }
}
</script>