<template>
  <div>

  </div>
</template>

<script setup>
import "../../store/send_store.js"
import {sendStore} from "~/store/send_store.js";
import data from "~/data/data";
import {userStore} from "~/store/user.js";

const useSend = sendStore()
const route = useRoute()
const router = useRouter()
let index = route.params.id
let i = 0
switch (index){
  //send
  case "clue1":
    useSend.setClue1();
    goBack();
    break;
  case "clue2":
    useSend.setClue2();
    goBack();
    break;
  case "clue3":
    useSend.setClue3();
    goBack();
    break;
  case "babyClue":
    useSend.setBabyClue();
    goBack();
    break;
  case "peopleProve":
     useSend.setPeopleProve();
     goBack();
     break;
  case "placePoint":
    useSend.setPlacePoint();
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
    useSend.setBabyStone();
    goBack();
    break;
  case "dieProve":
    useSend.setDieProve();
    goBack();
    break;
  case "goOut":
    useSend.setGoOut();
    goBack();
    break;
  case "greatGoOut":
    useSend.setGreatGoOut();
    goBack();
    break;
  case "bigBag":
    useSend.setBigBag();
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
}
function goBack(){
  router.push("/")
}
</script>