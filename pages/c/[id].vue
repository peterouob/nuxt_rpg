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

import {chinaStore} from "~/store/china_store.js";
import {goBack} from "~/tool.js";
import {europeStore} from "~/store/europe_store.js";
import {sendStore} from "~/store/send_store.js";
import {japanStore} from "~/store/japan_store.js";

const route = useRoute()
let index = route.params.id
const router = useRouter()
const useChina = chinaStore()
const useEurope = europeStore()
const useSend = sendStore()
const useJapan = japanStore()

let conditionStatisfid = ref()
let dialog = ref()
const methodNames = {
  blue: {method: 'setBlue'},
  topgod: { method: 'setTopgood' },
  daedeu: { method: 'setDaedeu' },
  sofa: { method: 'setsofa' },
  cash: { method: 'setCash' },
  ya: { method: 'setYa' ,condition: ()=> useChina.cash },
  wize: { method: 'setWize' },
  zerozhi: { method: 'setZerozhi' },
  body: { method: 'setBody' ,condition: ()=>(useEurope.fore && useSend.rose && useChina.zerozhi)},
  whiteyes: { method: 'setWhiteyes',condition: ()=>useJapan.fiveto},
  yes: { method: 'setYes',condition: ()=>useChina.sofa},
  gotyou: { method: 'setGotyou' ,condition: ()=>(useChina.yes && useChina.whiteyes && useChina.body)},
  success: { method: 'setSuccess' , condition: ()=> useChina.gotyou},
  girl: { method: 'setGirl' ,condition: ()=>useChina.success},
  bitfultea: { method: 'setbitfultea' },
  med:{method:'setMed'},
  rmDaedeu: {method:'removeDaedeu'},
  rmYa:{method:'removeYa'},
  pic:{method:'setPic'}
};

const methodInfo = methodNames[index];

if (methodInfo) {
  const {method, condition} = methodInfo;
  if(condition && method){
    conditionStatisfid = condition();
    conditionStatisfid ? dialog = false : dialog = true;
    if (dialog === false){
      useChina[method]();
      useChina.cn_progess += 5.3;
      useChina.cn_can_see -= 0.052;
    }
    goBack();
  }
  else{
    useChina[method]();
    useChina.cn_progess += 5.3;
    useChina.cn_can_see -= 0.052;
    goBack();
  }
}
</script>