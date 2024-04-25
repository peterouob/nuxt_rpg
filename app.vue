<template>
  <v-app>
    <v-main>
      <v-container>
        <Header v-if="login.isLogin"></Header>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import {userStore} from "~/store/user";

const login = userStore()

</script>