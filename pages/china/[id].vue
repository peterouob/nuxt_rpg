<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script setup>

import {chinaStore} from "~/store/china_store.js";

const route = useRoute()
let index = route.params.id
const router = useRouter()
const useChina = chinaStore()
switch (index){
  case "topgood":
    useChina.setTopgood();
    goBack();
    break;
  case "daedeu":
    useChina.setDaedeu();
    goBack();
    break;
  case "grandfather":
    useChina.setGrandfather();
    goBack();
    break;
  case "cash":
    useChina.setCash();
    goBack();
    break;
  case "ya":
    useChina.setYa();
    goBack();
    break;
  case "fiveto":
    useChina.setFiveto();
    goBack();
    break;
  case "wize":
    useChina.setWize();
    goBack();
    break;
  case "zerozhi":
    useChina.setZerozhi();
    goBack();
    break;
  case "rose":
    useChina.setRose();
    goBack();
    break;
  case "fore":
    useChina.setFore();
    goBack();
    break;
  case "farm":
    useChina.setFarm();
    goBack();
    break;
  case "medice":
    useChina.setMedice();
    goBack();
    break;
  case "body":
    useChina.setBody();
    goBack();
    break;
  case "whiteyes":
    useChina.setWhiteyes();
    goBack();
    break;
  case "yes":
    useChina.setYes();
    goBack();
    break;
  case "gotyou":
    useChina.setGotyou();
    goBack();
    break;
  case "success":
    useChina.setSuccess();
    goBack();
    break;
  case "girl":
    useChina.setGirl();
    goBack();
    break;
}
function goBack(){
  router.push("/")
}
</script>