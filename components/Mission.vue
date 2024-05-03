<template>
  <div class="image-container">
    <v-img src="/images/mission/bronnze.png" width="300" height="200" @click="dialogB = !dialogB"></v-img>
    <br>
    <v-dialog v-model="dialogB" style="background-color: black" class="dialog_animation">
      <div v-if="useEu.bronze">
        <h3 style="color: #FFFFFF;">
          最近占卜未來的次數太多了<br />需要補充占卜材料了<br /><br/>
          尋找沙漠哺乳動物的體毛並交給先知
        </h3>
      </div>
    </v-dialog>
    <v-img src="/images/mission/iron.png" width="300" height="200" @click="dialogI = !dialogI"></v-img>
    <br>
    <v-dialog v-model="dialogI" style="background-color: black" class="dialog_animation">
      <div v-if="useEu.iron">
        <h3 style="color: #7B7B7B;">
          精神有點差 <br /> 聽說東方有種叫"丹藥"的東西可以提神<br /><br/>
          尋找丹藥並交給國王
        </h3>
      </div>
      <div v-else>
        <v-alert
            density="compact"
            text="等級還不夠！"
            title="警告"
            type="error">
        </v-alert>
      </div>
    </v-dialog>
    <v-img src="/images/mission/gold.png" width="300" height="200" @click="dialogG = !dialogG"></v-img>
  </div>
  <v-dialog v-model="dialogG" style="background-color: black" class="dialog_animation">
    <div v-if="useEu.gold">
      <h3 style="color: #DAA520;">
        黃金任務：國家級委託 <br /><br />
        一、討伐巨龍並帶回戰利品<br /><br />
        二、解決作物收成問題，並在完成後找農民確認作物狀況<br /><br />
        三、限定黃金冒險者可參與<br /><br />
        完成任務後將巨龍戰利品與作物恢復的證據交回就可獲得報酬<br /><br />
        報酬：王宮邀請函<br /><br />
        補充說明：<br />
        王宮邀請函可找國王換取報酬。
      </h3>
    </div>
    <div v-else>
      <v-alert
          density="compact"
          text="等級還不夠！"
          title="警告"
          type="error">
      </v-alert>
    </div>
  </v-dialog>
  <br><br>
  <div class="button-container" v-if="useEu.stone">
    <button class="floating-button" style="background-color: black" @click="dialog = !dialog"><h3 style="color: #DAA520">遺跡石板</h3></button>
  </div>
  <v-dialog v-model="dialog" style="background-color: black" class="dialog_animation">
      <div>
        <h3 style="color: #DAA520;">
          注意！<br /><br />
          牛頭人是天生的鍛造鬼才。<br /><br />
          收集足夠的鍛造原料給他敲會讓你們的關係變得更好。<br /><br />
          展示你們友誼的象徵並一次給予夠多鍛造原料，說不定會把他收藏的寶貝贈與給你喔。<br /><br />
          如果想離開遺跡，牛頭人是這裡領路人找他就對了，不過他只會幫助他的朋友。<br /><br />
        </h3>
      </div>
  </v-dialog>
</template>

<script setup>

import {europeStore} from "~/store/europe_store.js";
let dialog = ref()
let dialogB = ref()
let dialogI = ref()
let dialogG = ref()
const useEu = europeStore()
</script>

<style scoped>
.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.button-container {
  display: flex;
  justify-content: center;
}

.floating-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  animation: floatAnimation 2s infinite alternate;
}

@keyframes floatAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
