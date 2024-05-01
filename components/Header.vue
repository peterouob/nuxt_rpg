<template>
    <!--    menu list-->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      location="right"
    >

    <v-list>
      <v-list-item>
        <v-list-item-title @click="dialog = !dialog">特殊背包</v-list-item-title>
      </v-list-item>
      <v-list-item
          v-for="(item,i) in items"
          :key="i"
          :value="item"
          :href="item.to"
      >
        <v-list-item-title >
          {{item.title}}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title @click="router.push('/')">永世不解的亡國資謎</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>

  <v-dialog v-model="dialog">
    <v-card>
      <v-card-text v-if="useJapan.woodCount >= 0"><h3>
        木頭數量：{{ woodNum }}
      </h3></v-card-text>
      <v-card-text v-if="useJapan.yugi >= 0"><h3>
        諭吉數量：{{yugiNum}}
      </h3></v-card-text>
      <v-card-text v-if="useEurope.originLiou >=0">
        <h3>
          原料數量：{{originLiou}}
        </h3>
      </v-card-text>
    </v-card>
  </v-dialog>

</template>
<script setup>
import {userStore} from "~/store/user.js";
import {japanStore} from "~/store/japan_store.js";
import {europeStore} from "~/store/europe_store.js";

const router = useRouter()
const useJapan = japanStore()
const useEurope = europeStore()
let dialog = ref(false)
// const login = userStore()
let woodNum = ref();
let yugiNum = ref();
let originLiou = ref()
let clipped = ref(false);
let drawer = ref(false);
let items = reactive([{
    icon: 'mdi-apps',
    title: '背包',
    to: '/bag'
  },
  {
    icon: 'mdi-chart-bubble',
    title: 'NPC介紹',
    to: '/inspire'
  },
  {
    icon: 'mdi-apps',
    title: '進度',
    to: '/go'
  },
  {
    icon: 'mdi-apps',
    title: '掃碼',
    to: '/qrcode'
  },
  {
    title: '線索',
    to:'/clue'
  },
])
let miniVariant = ref(false);
onMounted(()=>{
  woodNum = localStorage.getItem("woodCount");
  if(woodNum === null ) woodNum = 0;
  yugiNum = localStorage.getItem("yugi");
  if(yugiNum === null ) yugiNum = 0;
  originLiou = localStorage.getItem("originLiou");
  if(originLiou === null ) originLiou = 0;

})
</script>
