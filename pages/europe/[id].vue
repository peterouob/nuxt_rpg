<template>
  <div>
  </div>
</template>

<script setup>
import {europeStore} from "~/store/europe_store.js";

const route = useRoute()
let index = route.params.id
const router = useRouter()
const useEurope = europeStore()
switch (index) {
  case "farmeone":
    useEurope.setFarmeone();
    goBack();
    break;
  case "farmtwo":
    useEurope.setFarmtwo();
    goBack();
    break;
  case "pic":
    useEurope.setPic();
    goBack();
    break;
  case "maohxioun":
    useEurope.setMaohxioun();
    goBack();
    break;
  case "cando":
    useEurope.setCando();
    goBack();
    break;
  case "smart":
    useEurope.setSmart();
    goBack();
    break;
  case "maou":
    useEurope.setMaou();
    goBack();
    break;
  case "todo":
    useEurope.setTodo();
    goBack();
    break;
  case "dorgan":
    useEurope.setDorgan();
    goBack();
    break;
  case "drogangay":
    useEurope.setDrogangay();
    goBack();
    break;
  case "stone":
    useEurope.setStone();
    goBack();
    break;
  case "droganbaby":
    useEurope.setDroganbaby();
    goBack();
    break;
  case "originLiou":
    useEurope.setOriginLiou();
    goBack();
    break;
  case "sgay":
    useEurope.setSgay();
    goBack();
    break;
  case "invite":
    useEurope.setInvite();
    goBack();
    break;
  case "beatiful":
    useEurope.setBeatiful();
    goBack();
    break;
  case "baby":
    useEurope.setBaby();
    goBack();
    break;
  case "bronze":
    useEurope.setBronze();
    goBack();
    break;
  case "iron":
    useEurope.setIron();
    goBack();
    break;
  case "gold":
    useEurope.setGold();
    goBack();
    break;
  case "synthesisPlatform":
    useEurope.setsynthesisPlatform();
    goBack();
    break;
  case "relicLegend":
    useEurope.setrelicLegend();
    goBack();
    break;
  case "chocolate":
    useEurope.setchocolate();
    goBack();
    break;
}
function goBack(){
  router.push("/");
}
</script>