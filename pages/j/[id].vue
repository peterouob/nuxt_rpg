<template>
  <div style="background-color: black">
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
import {japanStore} from "~/store/japan_store.js";
import {goBack} from "~/tool.js";
import {sendStore} from "~/store/send_store.js";
import {europeStore} from "~/store/europe_store.js";
import {chinaStore} from "~/store/china_store.js";

const route = useRoute()
let index = route.params.id
let dialog = ref(false)
const router = useRouter()
const useJapan = japanStore()
const useSend = sendStore()
const useEurope = europeStore()
const useChina = chinaStore()
let conditionStatisfid = ref()

const methodNames = {
  please: { method: 'setPlease' },
  glasses: { method: 'setGlasses' ,condition : ()=> useSend.send },
  woodCount: { method: 'setWood', extraAction: useJapan.woodCount += 1 },
  swood: { method: 'setSwood' ,condition: ()=> useJapan.sfoodtail},
  sfoodtail: { method: 'setSfoodtail' ,condition: ()=> useJapan.tool},
  fixbox: { method: 'setFixbox' },
  foodtail: { method: 'setFoodtail' },
  dai1: { method: 'setDai1' , condition: ()=> (useJapan.fixbox && useJapan.sfoodtail)},
  dai2: { method: 'setDai2' , condition: ()=> (useEurope.graph && useJapan.glasses)},
  dai3: { method: 'setDai3' , condition: ()=> useJapan.avoidsun},
  dai4: { method: 'setDai4' , condition: ()=> (useJapan.boliou && useChina.blue)},
  book: { method: 'setBook' , condition: ()=> useJapan.giantbook },
  giantbook: { method: 'setGiantbook' },
  avoidsun: { method: 'setAvoidsun' , condition: ()=> useJapan.book},
  breaktool: {
    method: 'setBreaktool',
    condition: () => ( useJapan.woodCount > 3)
  },
  tool: { method: 'setTool', condition: () => useJapan.breaktool},
  yugi: { method: 'setYugi',condition: ()=> (useJapan.please && useJapan.tool)},
  look: { method: 'setLook', condition: ()=> useJapan.yugi > 1 },
  boliou: { method: 'setBoliou',condition: ()=> useJapan.yugi > 1 },
  drewhorse: { method: 'setDrewhorse',condition: ()=> (useJapan.dai1 && useJapan.dai2 && useJapan.dai3 && useJapan.dai4 ) },
  bigGood: { method: 'setBigGood',condition: ()=>useJapan.drewhorse },
  key: { method: 'setKey' },
  rice: { method: 'setRice',condition: ()=> useJapan.rice },
  cat: { method: 'setCat' ,condition: ()=> useJapan.giou},
  giou: { method: 'setGiou',condition: ()=> useJapan.gioubotal},
  gioubotal: { method: 'setGioubotal' },
  fiveTwo: {method: 'setFivetwo'},
  composite: {method: 'setComposite',condition: ()=> useJapan.woodCount > 4},
  rmLook: {method:'removeLook'},
  rmBigGood: {method: 'removeBigGood'}
};


const methodInfo = methodNames[index];
let count = 0;
if (methodInfo) {
  const {method, condition} = methodInfo;
  if(condition && method){
    conditionStatisfid = condition();
    conditionStatisfid ? dialog = false : dialog = true;
    if (dialog === false){
      useJapan[method]();
      useJapan.jp_progess += 3.3;
      useJapan.jp_can_see -= 0.033;
    }
    goBack();
  }
  else{
    useJapan[method]();
    useJapan.jp_progess += 3.3;
    useJapan.jp_can_see -= 0.033;
    goBack();
  }
}

</script>