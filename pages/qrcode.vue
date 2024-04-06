<template>
  <StreamBarcodeReader
      @decode="onDecode"
  ></StreamBarcodeReader>
</template>

<script setup>
import { StreamBarcodeReader } from "vue-barcode-reader";
let onDecode = (text) =>{
  alert(`Decode text from QR code is ${text}`)
}
</script>
