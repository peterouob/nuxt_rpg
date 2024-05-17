<template>
    <StreamBarcodeReader @decode="onDecode"></StreamBarcodeReader>
</template>

<script setup>
import { StreamBarcodeReader } from "vue-barcode-reader";
const router = useRouter();
let onDecode = (text) => {
    onMounted(() => {
        alert(`Decode text from QR code is ${text}`);
    });
    router.push(`/${text}`);
};
</script>
