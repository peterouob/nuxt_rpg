<template>
  <v-container class="container" v-if="!login.isLogin">
      <v-card>
        <v-card-title>
          <span class="text-h5">User Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    class="username"
                    name="username"
                    label="Username*"
                    required
                    variant="solo"
                    v-model="username"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    name="password"
                    label="Password*"
                    type="password"
                    required
                    variant="solo"
                    v-model="password"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn
              color="blue-darken-1"
              variant="text"
              @click="login.login(username,password)"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>
<script setup>
import {userStore} from "../store/user.js";
const username = ref("")
const password = ref("")
const login = userStore()
</script>
<style scoped>

</style>