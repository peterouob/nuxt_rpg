<template>
    <div>
        <v-dialog
            v-model="sclick"
            style="background-color: black"
            class="dialog_animation"
        >
            <div>
                <h3 style="color: white" v-if="j.woodCount">
                    木頭數量{{ woodCount }}
                </h3>
                <br /><br />
                <h3 style="color: white" v-if="j.yugi">諭吉數量{{ yugi }}</h3>
                <br /><br />
                <h3 style="color: white" v-if="e.originLiou">
                    原料數量{{ originLiou }}
                </h3>
            </div>
        </v-dialog>
        <v-container style="max-height: 800px; overflow-y: auto">
            <h3 @click="sclick = !sclick" style="color: #daa520">特殊背包</h3>
            <br />
            <v-btn
                @click="previousPage"
                :disabled="currentPage === 1"
                style="background-color: black"
                ><h3 style="color: #daa520">Prev</h3></v-btn
            >
            <v-btn
                @click="nextPage"
                :disabled="currentPage === pageCount"
                v-show="paginatedData.length >= itemsPerPage"
                style="background-color: black"
                ><h3 style="color: #daa520">Next</h3></v-btn
            >

            <v-row>
                <v-col cols="12">
                    <v-row>
                        <v-col
                            v-for="(data, i) in paginatedData"
                            :key="i"
                            cols="12"
                            lg="4"
                            sm="6"
                        >
                            <v-dialog v-model="dialogStates[i]" width="100%">
                                <v-card max-width="400">
                                    <v-card-title>
                                        {{ data.name }}
                                    </v-card-title>
                                    <v-card-text>
                                        {{ data.description }}
                                    </v-card-text>
                                    <template v-slot:actions>
                                        <v-btn
                                            class="ms-auto"
                                            text="Ok"
                                            @click="closeDialog(i)"
                                        ></v-btn>
                                    </template>
                                </v-card>
                            </v-dialog>

                            <!--            特殊背包-->
                            <!--            lg為大屏幕,sm為小-->
                            <v-card
                                style="
                                    background-color: rgba(255, 255, 255, 0.1);
                                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                                "
                                class="mx-auto pb-2 mt-15"
                                @click="openDialog(i)"
                            >
                                <v-img
                                    :src="data.img"
                                    provider="cloudflare"
                                    height="200px"
                                >
                                    <template v-slot:placeholder>
                                        <v-row
                                            align="center"
                                            class="fill-height ma-0"
                                            justify="center"
                                        >
                                        </v-row>
                                    </template>
                                </v-img>

                                <v-card-title
                                    class="text-capitalize"
                                    style="color: #daa520"
                                >
                                    {{ data.name }}
                                </v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
  <br><br><br><br><br>

</template>

<script setup>
import data from "../data/data.js";
import { computed } from "vue";
import { japanStore } from "~/store/japan_store.js";
import { europeStore } from "~/store/europe_store.js";
const dataList = ref(data);
const currentPage = ref(1);
const itemsPerPage = 10; // 每頁顯示數量
const dialog = ref(false);
const dialogStates = ref(Array(dataList.value.length).fill(false));
let sclick = ref(false);

const filteredData = dataList.value.filter((item) => item.displace === true);
const j = japanStore();
const e = europeStore();
const openDialog = (index) => {
    dialogStates.value[index] = true;
};

const closeDialog = (index) => {
    dialogStates.value[index] = false;
};

//返回計算結果數量
const paginatedData = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
});

// 計算總頁數
const pageCount = computed(() => {
    return Math.ceil(filteredData.length / itemsPerPage);
});

const previousPage = () => {
    currentPage.value--;
};

const nextPage = () => {
    currentPage.value++;
};

let originLiou;
let woodCount;
let yugi;
onMounted(()=>{
   originLiou = localStorage.getItem("originLiou")
   woodCount = localStorage.getItem("woodCount")
   yugi = localStorage.getItem("yugi")
})
</script>

<style scoped></style>
