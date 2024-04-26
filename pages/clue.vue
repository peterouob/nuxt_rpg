<template>
  <div>
<!--    <h1>Hello</h1>-->
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col
                v-for="(data,i) in filteredData"
                :key="i"
                cols="12"
                lg="4"
                sm="6"
            >
              <!--            lg為大屏幕,sm為小-->
              <v-card
                  class="mx-auto pb-2">
                <v-img :src="data.img" height="200px">
                  <template v-slot:placeholder>
                    <v-row
                        align="center"
                        class="fill-height ma-0"
                        justify="center"
                    >
                      <!--                    載入條-->
                      <v-progress-circular
                          color="grey lighten-5"
                          indeterminate
                      ></v-progress-circular>
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
    </v-container>
  </div>
</template>
<script setup>
import data from "~/data/clue.js";
const clueData = ref(data)
const filteredData = clueData.value.filter(item=>item.displace === true);
console.log(filteredData)
</script>