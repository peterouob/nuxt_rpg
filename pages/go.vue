<template>
  <div>
    <v-container>
      <h2>第一條線</h2>
      <v-progress-linear
          class="mt-6"
          v-model="knowledge"
          height="25"
          color="amber"
          rounded
      >
        <strong>{{ Math.ceil(knowledge) }}%</strong>
      </v-progress-linear>
      <br>
      <h2>第二條線</h2>
      <v-progress-linear
          class="mt-6"
          v-model="knowledge2"
          height="25"
          color="pink"
          rounded
      >
        <strong>{{ Math.ceil(knowledge2) }}%</strong>
      </v-progress-linear>
      <br>
      <h2>第三條線</h2>
      <v-progress-linear
          class="mt-6"
          v-model="knowledge3"
          height="25"
          color="indigo-darken-2"
          rounded
      >
        <strong>{{ Math.ceil(knowledge3) }}%</strong>
      </v-progress-linear>
      <br>
      <h2>第四條線</h2>
      <v-progress-linear
          class="mt-6"
          v-model="knowledge4"
          height="25"
          color="deep-purple-accent-2"
          rounded
      >
        <strong>{{ Math.ceil(knowledge4) }}%</strong>
      </v-progress-linear>

    </v-container>
  </div>
</template>

<script setup>
let knowledge = 40;
let knowledge2  = 10;
let knowledge3  = 70;
let knowledge4  = 100;
</script>

<style scoped>

</style>