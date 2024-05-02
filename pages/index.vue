<template>
  <v-app>
    <v-main>
      <v-container fluid class="container">
        <Image />
        <v-card class=" form-card"  v-if="!login">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      name="username "
                      label="Username*"
                      required
                      variant="solo"
                      v-model="username"
                      style="
                          box-shadow: rgba(0, 0, 0, 12); "
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="center-button">
            <v-btn
                variant="text"
                @click="login.login(username)"
                class="login-button v-text-field"
            >
            <h2>Login</h2>
            </v-btn>
          </v-card-actions>
        </v-card>


        <v-card class=" glass-panel"  v-else>
          <v-card-text>
            <v-container style="max-height: 600px; overflow-y: auto;">
              <v-row dense  class="mb-5">
                <v-col cols="12" class="mb-15">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="Bag"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="GO"
                          variant="outlined"
                          block
                          @click="router.push('/bag')"
                      ></v-btn>
                    </template>
                  </v-card>
                </v-col>

                <v-col cols="12" class="mb-15">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="Map"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="GO"
                          variant="outlined"
                          block
                      ></v-btn>
                    </template>
                  </v-card>
                </v-col>

                <v-col cols="12" class="mb-15">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="progress"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="GO"
                          variant="outlined"
                          block
                      ></v-btn>
                    </template>
                  </v-card>
                </v-col>

                <v-col cols="12" class="mb-15">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="NPC introduction"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="Go"
                          variant="outlined"
                          block
                          @click="router.push('/inspire')"
                      ></v-btn>
                    </template>
                  </v-card>
                </v-col>

                <v-col cols="12" class="mb-15">
                  <v-card
                      class="mx-auto"
                      color="surface-variant"
                      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                      max-width="340"
                      title="Legend of ruins"
                  >
                    <template v-slot:actions>
                      <v-btn
                          append-icon="mdi-chevron-right"
                          text="Go"
                          variant="outlined"
                          block
                          @click="router.push('https://rpg-nuxt-app.hellolinpeter.workers.dev/legend')"
                      ></v-btn>
                    </template>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>


    </v-main>
  </v-app>
</template>

<script setup>
import { userStore } from "~/store/user";

let username = ref();
const login = userStore();
const router = useRouter()
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;

}


html, body {
  height: 100%;
  overflow: hidden; /* 防止網頁內容滾動 */
}



.form-card {
  width: 400px;
  padding: 60px;
  position: absolute;
  bottom: -100px; /* 初始位置在底部之外 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: slideInFromBottom 3.5s forwards; /* 使用動畫效果將表單從底部移動到正中間 */
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

@keyframes slideInFromBottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: calc(50% - 50px); /* 調整表單在垂直方向的位置 */
    opacity: 1;
  }
}

.container{
  padding: 0;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center; align-items: center;
  overflow: hidden; /* 防止網頁內容滾動 */
}

.glass-panel {
  width: 400px;
  //padding: 300px;
  height: 550px;
  position: absolute;
  bottom: -100px; /* 初始位置在底部之外 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: slideInBottom 4s forwards; /* 使用動畫效果將表單從底部移動到正中間 */
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  border-radius: 15px;
}

@keyframes slideInBottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: calc(50% - 250px); /* 調整表單在垂直方向的位置 */
    opacity: 1;
  }
}
/* 需要額外的樣式來設置文字框和整體佈局 */


.center-button {
  display: flex;
  justify-content: center;
}


</style>
