<template>
  <div>
    <h1>{{ index }}</h1>
  </div>
</template>

<script setup>
const route = useRoute()
let index = route.params.id
console.log(index)
</script>