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

    <v-dialog v-model="keyDialog" style="background-color: black" class="dialog_animation">
      <div>
        <h3 style="color: red">打開寶物的鑰匙被烏鴉叼走了 <br /><br />
            趕快詢問附近的居民有沒有鑰匙的下落</h3>
      </div>
    </v-dialog>
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
let keyDialog = ref()

const methodNames = {
  please: { method: 'setPlease' },
  glasses: { method: 'setGlasses' ,condition : ()=> useJapan.send },
  woodCount: { method: 'setWood',  extraAction: () => { if (useJapan.woodCount) useJapan.woodCount += 1; } },
  swood: { method: 'setSwood' ,condition: ()=> useJapan.sfoodtail},
  sfoodtail: { method: 'setSfoodtail' ,condition: ()=> useJapan.foodtail},
  fixbox: { method: 'setFixbox' },
  foodtail: { method: 'setFoodtail' },
  dai1: { method: 'setDai1' , condition: ()=> (useJapan.fixbox && useJapan.swood)},
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
  send: {method: 'setSend'},
  key: { method: 'setKey' },
  rice: { method: 'setRice',condition: ()=> useJapan.rice },
  cat: { method: 'setCat' ,condition: ()=> useJapan.giou},
  giou: { method: 'setGiou',condition: ()=> useJapan.gioubotal},
  gioubotal: { method: 'setGioubotal' },
  fiveto: {method: 'setFivetwo'},
  composite: {method: 'setComposite',condition: ()=> useJapan.woodCount > 4},
  rmLook: {method:'removeLook'},
  rmBigGood: {method: 'removeBigGood'}
};


const methodInfo = methodNames[index];
let count = 0;
if (methodInfo) {
  const { method, condition, extraAction } = methodInfo; // 添加extraAction的解構賦值
  if (condition && method) {
    conditionStatisfid = condition();
    conditionStatisfid ? dialog = false : dialog = true;
    method === "bigGood" ? keyDialog = true :  keyDialog = false;
    if (dialog === false) {
      useJapan[method]();
      if (count === 0) { // 只在第一次成功觸發時執行以下程式碼
        useJapan.jp_progess += 3.3;
        useJapan.jp_can_see -= 0.033;
        count++;
      }
    }
    goBack();
  } else {
    useJapan[method]();
    if (count === 0) { // 只在第一次成功觸發時執行以下程式碼
      useJapan.jp_progess += 3.3;
      useJapan.jp_can_see -= 0.033;
      count++;
    }
    goBack();
  }
}

</script>