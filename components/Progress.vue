<template>
  <div class="universe-container">
    <v-container>
      <div class="send-universe-progress">
        <h3 style="color:#DAA520;">埃及</h3>
        <v-img
            :aspect-ratio="1"
            class="bg"
            src="/images/progress/1.jpeg"
            width="320"
            height="80"
            cover
        >
        </v-img>
        <div class="progress-label" style="color:#DAA520;">{{ Math.ceil(sp) }}%</div>
      </div>
      <br>
      <br>
      <div class="jp-universe-progress ">
        <h3  style="color:#FF79BC;">日本</h3>

        <v-img
            :aspect-ratio="1"
            class="bg"
            src="/images/progress/2.png"
            width="320"
            height="80"
            cover
        >
        </v-img>
        <div class="progress-label" style="color:#FF79BC;">{{ Math.ceil(jp) }}%</div>
      </div>
      <br>
      <br>
      <div class="eu-universe-progress ">
        <h3 style="color:#424200;">歐洲</h3>
        <v-img
            :aspect-ratio="1"
            class="bg"
            src="/images/progress/3.jpg"
            width="320"
            height="80"
            cover
        >
        </v-img>
        <div class="progress-label" style="color:#424200;">{{ Math.ceil(ep) }}%</div>
      </div>
      <br>
      <br>
      <div class="cn-universe-progress ">
        <h3 style="color:#D94600;">中國</h3>

        <v-img
            :aspect-ratio="1"
            class="bg"
            src="/images/progress/4.jpg"
            width="320"
            height="80"
            cover
        >
        </v-img>
        <div class="progress-label" style="color:#D94600;">{{ Math.ceil(cp) }}%</div>
      </div>
      <!-- 其他進度條 -->

    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {sendStore} from "~/store/send_store.js";
import {japanStore} from "~/store/japan_store.js";
import {chinaStore} from "~/store/china_store.js";
import {europeStore} from "~/store/europe_store.js";

const useSend = sendStore()
const useJapan = japanStore()
const useChina = chinaStore()
const useEurope = europeStore()

let sp = useSend.send_progess;
let ss = useSend.send_can_see;
let send_customColor = ref(`rgba(255, 255, 255,${ss})`);


let jp = useJapan.jp_progess
let js = useJapan.jp_can_see;
let japan_customColor = ref(`rgba(255, 255, 255,${js})`);


let ep = useEurope.eu_progess
let es = useEurope.eu_can_see;
let eu_customColor = ref(`rgba(255, 255, 255,${es})`);

let cp = useChina.cn_progess
let cs = useChina.cn_can_see;
let cn_customColor = ref(`rgba(255, 255, 255,${cs})`)
// 其他進度條的數據

</script>

<style scoped>

.bg{

  z-index: -1;
}

.universe-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.send-universe-progress {
  //--custom-color: rgba(255, 255, 255,);
  background-color: v-bind(send_customColor);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}


.eu-universe-progress {
//--custom-color: rgba(255, 255, 255,);
  background-color: v-bind(eu_customColor);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.jp-universe-progress {
//--custom-color: rgba(255, 255, 255,);
  background-color: v-bind(japan_customColor);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.cn-universe-progress {
//--custom-color: rgba(255, 255, 255,);
  background-color: v-bind(cn_customColor);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.progress-label {
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 24px;
}

.universe-progress-bar {
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.universe-progress-bar .v-progress-linear__determinate {
  animation: pulse 2s infinite;
}
</style>
