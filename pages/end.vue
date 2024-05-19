<template>
  <div class="shake-element">
      <h1 class="endfont">
        商人請你盡快回去找他
      </h1>
    <v-btn @click="clickKnow">確認</v-btn>
  </div>
</template>
<script setup>
import {userStore} from "~/store/user.js";

const user = userStore()
const router = useRouter()
function clickKnow() {
  user.end = true;
  router.push("/")
}
</script>
<style scoped>
.shake-element {
  background-color: black;
  position: relative;
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
.endfont {
  color: red;
  position: absolute;
  right: 50%;
  font-size: 4rem;
}
</style>