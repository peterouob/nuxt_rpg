import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 10,
  duration: "30s",
  cloud: {
    // Project: nuxt_rpg
    projectID: 3697343,
    // Test runs with the same name groups test runs together.
    name: "Test (17/05/2024-02:10:55)",
  },
};

export default function () {
  http.get("https://rpg-nuxt-app.hellolinpeter.workers.dev/woodCount");
  sleep(1);
}
