<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script setup>

let msg = ""
const route = useRoute()
const router = useRouter()
let index = route.params.id

console.log(index)
switch (index) {
  case "hello" :
    msg = "hello"
      router.push("/")
    break
  case "hi" :
    msg = "hi"
    break
}
</script>