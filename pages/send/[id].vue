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
    case "babyClue":
      useSend.setBabyClue()
      router.push("/")
      break
  }
</script>