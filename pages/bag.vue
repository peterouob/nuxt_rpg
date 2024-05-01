<template>
  <div>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col
              v-for="(data,i) in paginatedData"
              :key="i"
              cols="12"
              lg="4"
              sm="6"
          >

            <v-dialog
                v-model="dialogStates[i]"
                width="100%"
            >
              <v-card
                  max-width="400"
              >
                <v-card-title>
                  {{data.name}}
                </v-card-title>
                <v-card-text>
                  {{data.description}}
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
                class="mx-auto pb-2"
                @click="openDialog(i)">
              <v-img :src="data.img" height="200px">
                <template v-slot:placeholder>
                  <v-row
                      align="center"
                      class="fill-height ma-0"
                      justify="center"
                  >
                  </v-row>
                </template>
              </v-img>

              <v-card-title class="text-capitalize">
                {{data.name}}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="me-auto"
          cols="right"
      >
        <v-sheet class="pa-2 ma-2">
          <v-btn @click="previousPage" :disabled="currentPage === 1">Prev</v-btn>
        </v-sheet>
      </v-col>
      <v-col cols="left">
        <v-sheet class="pa-2 ma-2 ml-16">
          <v-btn @click="nextPage" :disabled="currentPage === pageCount" v-show="paginatedData.length >= itemsPerPage">Next</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  </div>
</template>

<script setup>
import data from "../data/data.js";
import {computed} from "vue";
import {sendStore} from "~/store/send_store";
import {userStore} from "~/store/user.js";
import {japanStore} from "~/store/japan_store.js";
const dataList = ref(data);
const currentPage = ref(1);
const itemsPerPage = 4; // 每頁顯示數量
const dialog = ref(false);
const dialogStates = ref(Array(dataList.value.length).fill(false));


const filteredData = dataList.value.filter(item => item.displace === true);

const openDialog = (index)=>{
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


</script>

<style scoped>

</style>