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
</template>
<script setup>
import {userStore} from "~/store/user.js";

const router = useRouter()

const login = userStore()
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
  },])
let miniVariant = ref(false);

</script>
