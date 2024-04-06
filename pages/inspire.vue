<template>
  <div>
    <v-select
        v-model="selectedRegion"
        :items="regions"
        label="選擇地區"
        outlined
        dense
    ></v-select>

    <div v-for="(group, index) in paginatedGroups" :key="index">
      <v-row>
        <v-col v-for="(item,i) in group.items" :key="item.id" cols="12" md="4">

          <v-dialog
              v-model="dialogStates[i]"
              width="100%"
          >
            <v-card max-width="400">
              <v-card-title>
                {{item.name}}
              </v-card-title>
              <v-card-text>
                {{item.description}}
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

          <v-card class="mx-auto pb-2" @click="openDialog(i)">
            <v-img :src="item.img" height="200px">
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
              {{item.name}}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import data from "~/data";

const items = ref(data);
const dialogStates = ref(Array(items.value.length).fill(false));
const currentPage = ref(0);
const itemsPerPage = 1;
const selectedRegion = ref('');

const regions = computed(() => {
  const uniqueRegions = new Set(items.value.map(item => item.district));
  return Array.from(uniqueRegions);
});

const groupedItems = computed(() => {
  const groups = {};
  items.value.forEach(item => {
    if (!groups[item.district]) {
      groups[item.district] = [];
    }
    groups[item.district].push(item);
  });
  return Object.keys(groups).map(region => ({
    region,
    items: groups[region],
  }));
});

const filteredGroups = computed(() => {
  if (!selectedRegion.value) return groupedItems.value;
  return groupedItems.value.filter(group => group.region === selectedRegion.value);
});

const paginatedGroups = computed(() => {
  const start = currentPage.value * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredGroups.value.slice(start, end);
});

const openDialog = (index)=>{
  dialogStates.value[index] = true;
};

const closeDialog = (index) => {
  dialogStates.value[index] = false;
};
</script>
