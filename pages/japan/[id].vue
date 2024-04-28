<template>
  <div>
    <div>
      <v-alert
          density="compact"
          text="似乎還缺少什麼!"
          title="提示"
          type="warning"
          v-model="dialog"
      ></v-alert>
    </div>
  </div>
</template>

<script setup>
import {japanStore} from "~/store/japan_store.js";

const route = useRoute()
let index = route.params.id
let dialog = ref(false)
const router = useRouter()
const useJapan = japanStore()

switch (index){
  case "please":
    useJapan.setPlease();
    goBack();
    break;
  case "graph":
    useJapan.setGraph();
    goBack();
    break;
  case "send":
    useJapan.setSend();
    goBack();
    break;
  case "glasses":
    useJapan.setGlasses();
    goBack();
    break;
  case "blue":
    useJapan.setBlue();
    goBack();
    break;
  case "wood":
    useJapan.setWood();
    useJapan.woodCount += 1;
    goBack();
    break;
  case "swood":
    useJapan.setSwood();
    goBack();
    break;
  case "sfoodtail":
    useJapan.setSfoodtail();
    goBack();
    break;
  case "fixbox":
    useJapan.setFixbox();
    goBack();
    break;
  case "foodtail":
    useJapan.setFoodtail();
    goBack();
    break;
  case "dai1":
    useJapan.setDai1();
    goBack();
    break;
  case "dai2":
    useJapan.setDai2();
    goBack();
    break;
  case "dai3":
    useJapan.setDai3();
    goBack();
    break;
  case "dai4":
    useJapan.setDai4();
    goBack();
    break;
  case "giantbook":
    useJapan.setGiantbook();
    goBack();
    break;
  case "book":
    useJapan.setBook();
    goBack();
    break;
  case "avoidsun":
    useJapan.setAvoidsun();
    goBack();
    break;
  case "circleWood":
    useJapan.setCircleWood();
    goBack();
    break;
  case "breaktool":
    if(useJapan.wood === false && useJapan.woodCount < 5){
      dialog = true;
    }else {
      useJapan.setBreaktool();
      dialog = false;
    }
    goBack();
    break;
  case "tool":
    if(useJapan.breaktool === false){
      dialog = true;
    }else{
      useJapan.setTool();
      dialog = false;
    }
    goBack();
    break;
  case "yugi":
    if(useJapan.tool === false){
      dialog = true;
    }else{
      useJapan.setYugi();
      dialog = false
    }
    goBack();
    break;
  case "look":
    useJapan.setLook();
    goBack();
    break;
  case "boliou":
    useJapan.setBoliou();
    goBack();
    break;
  case "drewhorse":
    useJapan.setDrewhorse();
    goBack();
    break;
  case "bigGood":
    useJapan.setBigGood();
    goBack();
    break;
  case "key":
    useJapan.setKey();
    goBack();
    break;
  case "rice":
    useJapan.setRice();
    goBack();
    break;
  case "cat":
    useJapan.setCat();
    goBack();
    break;
  case "giou":
    useJapan.setGiou();
    goBack();
    break;
  case "gioubotal":
    useJapan.setGioubotal();
    goBack();
    break;
  case "getOutLook":
    useJapan.getOutLook();
    goBack();
    break;
}

function goBack(){
  router.push("/")
}
</script>