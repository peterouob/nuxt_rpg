<template>
    <!--    menu list-->
    <v-app-bar
      fixed
      app
      style=" background-color: rgba(255, 255, 255, 0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)"
      @click="router.push('/')"
    >
      <v-img src="/images/LOGO.png"></v-img>
      <h3 style="color:#DAA520 ">永世不解的王國資謎</h3>
      <v-spacer></v-spacer>
    </v-app-bar>

</template>
<script setup>


const router = useRouter()

</script>
