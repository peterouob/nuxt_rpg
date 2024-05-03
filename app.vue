<template>
  <v-app>
    <v-main>
      <v-container class="pa-0">
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import {userStore} from "~/store/user";

const login = userStore()

</script>

<style scoped>


*{
  padding: 0;
  margin: 0;
  font-family: cursive;
  font-optical-sizing: auto;
  font-weight: 550;
  font-style: normal;
}

.dialog_animation{
  animation: popup 0.5s;
}
@keyframes popup {
  0% {transform: scale(0);}
  50% {transform: scale(0.95);}
  100% {transform: scale(1);}
}

@media only screen and (max-width: 600px) {
  .form-card {
    width: 90%; /* 調整表單寬度以適應較小的螢幕 */
    padding: 20px; /* 調整表單內邊距 */
  }

  .glass-panel {
    width: 90%; /* 調整玻璃面板寬度以適應較小的螢幕 */
    height: auto; /* 自動調整高度以避免 overflow */
  }
}
</style>