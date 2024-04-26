<template>
  <div>
    <v-alert
        density="compact"
        text="似乎還缺少什麼!"
        title="提示"
        type="warning"
        v-model="dialog"
    ></v-alert>
  </div>
  {{dialog}}
</template>

<script setup>
import "../../store/send_store.js"
import {sendStore} from "~/store/send_store.js";
import {chinaStore} from "~/store/china_store.js";
import {europeStore} from "~/store/europe_store.js";
import {japanStore} from "~/store/japan_store.js";


let dialog = ref(false)
const useSend = sendStore()
const useChina = chinaStore()
const useEurope = europeStore()
const useJapan = japanStore()

const route = useRoute()
const router = useRouter()
let index = route.params.id

switch (index){
  //send
  case "getClue": // 獲得線索
    if(useSend.peopleProve === false){
      dialog = true;
    }else{
      useSend.setClue();
      dialog = false;
    }
    goBack();
    break;
  case "babyClue":
    useSend.setBabyClue();
    goBack();
    break;
  case "peopleProve":
    if(useSend.bigBag === false){
      dialog = true;
    }else{
      useSend.setPeopleProve();
      dialog = false;
    }
     goBack();
     break;
  case "placePoint":
    if(useSend.pencile === false){
      dialog = true;
    }else{
      useSend.setPlacePoint();
      dialog = false;
    }
    goBack();
    break;
  case "prove":
    useSend.setProve();
    goBack();
    break;
  case "gotYou":
    useSend.setGotYou();
    goBack();
    break;
  case "white":
    useSend.setWhite();
    goBack();
    break;
  case "dieTime":
    useSend.setDieTime();
    goBack();
    break;
  case "babyStone":
    if(useEurope.chocolate === false && useChina.bitfultea === false && useJapan.cat === false){
      dialog = true;
    }else{
      useSend.setBabyStone();
      dialog = false
    }
    goBack();
    break;
  case "dieProve":
    useSend.setDieProve();
    goBack();
    break;
  case "goOut":
    if(useSend.prove === false){
      dialog = true;
    }else{
      useSend.setGoOut();
      dialog = false
    }
    goBack();
    break;
  case "greatGoOut":
    useSend.setGreatGoOut();
    goBack();
    break;
  case "bigBag":
    if(useSend.babyStone === false){
      dialog = true
    }else{
      useSend.setBigBag();
      dialog = false
    }
    goBack();
    break;
  case "diePeople":
    useSend.setDiePeople();
    goBack();
    break;
  case "formalin":
    useSend.setFormalin();
    goBack();
    break;
  case "sweating":
    useSend.setSweating();
    goBack();
    break;
  case "sweetSweating":
    useSend.setSweetSweating();
    goBack();
    break;
  case "mouthWater":
    useSend.setMouthWater();
    goBack();
    break;
  case "finger":
    useSend.setFinger();
    goBack();
    break;
  case "lookmouth":
    useSend.setLookMouth();
    goBack();
    break;
  case "pencile":
    if(useSend.lookmouth === false && useSend.finger === false){
      dialog = true ;
    }else{
      useSend.setPencile();
      dialog = false;
    }
    goBack();
    break;
}
function goBack(){
  setTimeout(async ()=>{
    await router.push("/")
  },5000)
}

</script>