<template>
  <v-app>
   <v-main>
      <v-container fluid class="container">
        <Image />
        <v-card class=" form-card"  v-if="!user.isLogin">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      name="username "
                      label="Username*"
                      required
                      variant="solo"
                      v-model="username"
                      style="
                          box-shadow: rgba(0, 0, 0, 12);"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="center-button">
            <v-btn
                variant="text"
                @click="user.login(username)"
                class="login-button v-text-field"
            >
            <h2 style="color: white">Login</h2>
            </v-btn>
          </v-card-actions>
        </v-card>


        <v-card class=" glass-panel"  v-else>
          <v-card-text>
            <v-container style="max-height: 600px; overflow-y: auto;">
              <v-row dense  class="mb-5">
                <v-col cols="12" class="mb-15">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="Bag"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="GO"
                          variant="outlined"
                          block
                          @click="Bagdialog=!Bagdialog"
                      ></v-btn>
                    </template>
                  </v-card>
                </v-col>
                <v-dialog class="dialog_animation" v-model="Bagdialog" style="background-color: black">
                  <Bag />
                </v-dialog>
                <v-col cols="12" class="mb-15">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="Qrcode"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="GO"
                          variant="outlined"
                          block
                          @click="qrDialog = !qrDialog"
                      ></v-btn>
                    </template>
                  </v-card>
                </v-col>
                <v-dialog class="dialog_animation" v-model="qrDialog" style="background-color: black">
                  <Qrcode />
                </v-dialog>
                <v-col cols="12" class="mb-15">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="progress"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="GO"
                          variant="outlined"
                          block
                          @click="progressDialog = !progressDialog"
                      ></v-btn>
                    </template>
                  </v-card>
                </v-col>
                <v-dialog v-model="progressDialog" style="background-color: black" class="dialog_animation">
                  <Progress />
                </v-dialog>
                <v-col cols="12" class="mb-15">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="NPC introduction"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="Go"
                          variant="outlined"
                          block
                          @click="npcdialog = !npcdialog"
                      ></v-btn>
                    </template>
                  </v-card>
                </v-col>
                <v-dialog class="dialog_animation" v-model="npcdialog" style="background-color: black">
                  <Inspire />
                </v-dialog>
                <v-col cols="12" class="mb-15" v-if="useEroupe.relicLegend">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="Legend of ruins"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="Go"
                          variant="outlined"
                          block
                          @click="legendDialog = !legendDialog"
                      ></v-btn>
                    </template>
                  </v-card>
                </v-col>
                <v-dialog class="dialog_animation" v-model="legendDialog" style="background: black">
                  <Legend />
                </v-dialog>

                <v-col cols="12" class="mb-15" v-if="useSend.clue">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="Clue"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="Go"
                          variant="outlined"
                          block
                          @click="clueDialog = !clueDialog"
                      ></v-btn>
                    </template>
                  </v-card>
                </v-col>
                <v-dialog class="dialog_animation" v-model="clueDialog" style="background-color: black">
                  <Clue />
                </v-dialog>
                <v-col cols="12" class="mb-15" v-if="useEroupe.maou">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="Mission"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="Go"
                          variant="outlined"
                          block
                          @click="missionDialog = !missionDialog"
                      ></v-btn>
                    </template>
                  </v-card>
                  <v-dialog v-model="missionDialog" style="background-color: black" class="dialog_animation">
                    <Mission />
                  </v-dialog>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>
      <v-dialog v-model="endDialog" class="shake-element">
        <div>
          <h3 style="color: #DAA520" @click="clickKnow">商人請你盡快回去找他</h3>
        </div>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script setup>
import { userStore } from "~/store/user";
import Inspire from "~/components/Inspire.vue";
import Bag from "~/components/Bag.vue";
import {europeStore} from "~/store/europe_store.js";
import {sendStore} from "~/store/send_store.js";
import Progress from "~/components/Progress.vue";
import Legend from "~/components/Legend.vue";
import Mission from "~/components/Mission.vue";
import {japanStore} from "~/store/japan_store.js";
import {chinaStore} from "~/store/china_store.js";
import {insertData} from "~/tool.js";


const useEroupe = europeStore()
const useSend = sendStore()
const useJapan = japanStore()
const useChina = chinaStore()

const user = userStore();

const router = useRouter();
let npcdialog = ref(false);
let Bagdialog = ref(false);
let qrDialog = ref(false);
let clueDialog =ref(false);
let progressDialog = ref(false);
let legendDialog = ref(false);
let missionDialog = ref(false);
let endDialog = ref(false)

let username = ref(user.name);
let number;
let intervalId;
const timeRemaining = ref(0);

onBeforeMount(() => {
  if (!useEroupe.baby && !useSend.dieProve && !useJapan.cat && !useChina.girl && user.end) {
    name = localStorage.getItem("name");
    localStorage.setItem("timeRemaining",user.timeRemaining);
    clearInterval(intervalId);
    number = localStorage.getItem("timeRemaining")
    endDialog = true;
    insertData(name, number);
  }
});

onMounted(()=>{
  setInterval(() => {
    user.timeRemaining--;
  }, 1000);
})

let e = ref(false)
function clickKnow(){
  user.end = true
  router.go(0);
}



</script>

<style scoped>
* {
  padding: 0;
  margin: 0;

}


html, body {
  height: 100%;
  overflow: hidden; /* 防止網頁內容滾動 */
}


.dialog_animation{
  animation: popup 0.5s;
}
@keyframes popup {
  0% {transform: scale(0);}
  50% {transform: scale(0.95);}
  100% {transform: scale(1);}
}

.form-card {
  width: 400px;
  padding: 60px;
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: slideInFromBottom 3.5s forwards;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  border-radius: 15px;
}

@keyframes slideInFromBottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: calc(50% - 50px); /* 調整表單在垂直方向的位置 */
    opacity: 1;
  }
}

.container{
  padding: 0;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center; align-items: center;
  overflow: hidden; /* 防止網頁內容滾動 */
}

.glass-panel {
  width: 400px;
  //padding: 300px;
  height: 550px;
  position: absolute;
  bottom: -100px; /* 初始位置在底部之外 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: slideInBottom 4s forwards; /* 使用動畫效果將表單從底部移動到正中間 */
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  border-radius: 15px;
}

@keyframes slideInBottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: calc(50% - 250px); /* 調整表單在垂直方向的位置 */
    opacity: 1;
  }
}

.center-button {
  display: flex;
  justify-content: center;
}

.shake-element {
  background-color: black;
  animation: shake 1s infinite;
}

@keyframes shake {
  0% {
    transform: translateX(-5px);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
