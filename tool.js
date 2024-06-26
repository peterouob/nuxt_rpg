import { db } from "~/firebase.client.js";
import { collection, addDoc } from "firebase/firestore";
import { userStore } from "~/store/user.js";

export function setTrueState(stateProp, type = true) {
  return function () {
    onMounted(() => {
      if (typeof type === "number") {
        this[stateProp] += type;
      } else {
        this[stateProp] = type;
      }
      window.localStorage.setItem(stateProp, JSON.stringify(this[stateProp]));
    });
  };
}

export function removeState(stateProp) {
  return function () {
    onMounted(() => {
      window.localStorage.removeItem(stateProp);
    });
  };
}

export function setNumTrueState(stateProp, numStateProp, num) {
  return function () {
    onMounted(() => {
      this[stateProp] = true;
      this[numStateProp] = num;
      window.localStorage.setItem(stateProp, JSON.stringify(this[stateProp]));
      window.localStorage.setItem(
        numStateProp,
        JSON.stringify(this[numStateProp]),
      );
    });
  };
}

// Function to check dependencies and set state
export function setDependentState(
  stateProp,
  dependencies,
  type = true,
  anotherStateProp,
) {
  return function () {
    let depValues = {};
    onBeforeMount(() => {
      dependencies.forEach((dep) => {
        depValues[dep] = JSON.parse(window.localStorage.getItem(dep));
      });
    });
    onMounted(() => {
      if (dependencies.every((dep) => depValues[dep])) {
        this[stateProp] = type;
        window.localStorage.setItem(stateProp, JSON.stringify(this[stateProp]));
        if (anotherStateProp !== "undefined") {
          this[anotherStateProp] = type;
          window.localStorage.setItem(
            anotherStateProp,
            JSON.stringify(this[anotherStateProp]),
          );
        }
        dependencies.forEach((dep) => {
          window.localStorage.removeItem(dep);
        });
      }
    });
  };
}
export function setDependentNumState(
  stateProp,
  dependencies,
  num,
  anotherDependent = "undefined",
) {
  return function () {
    let depValues = {};
    let anotherdep = "";
    onBeforeMount(() => {
      dependencies.forEach((dep) => {
        depValues[dep] = JSON.parse(window.localStorage.getItem(dep));
      });
      if (anotherDependent !== "undefined") {
        anotherdep = JSON.parse(window.localStorage.getItem(anotherDependent));
      } else {
        anotherdep = true;
      }
    });
    onMounted(() => {
      if (dependencies.every((dep) => depValues[dep])) {
        let depNum = depValues[Object.keys(depValues)];
        if (depNum >= num && anotherdep === true) {
          // console.log(depNum)
          this[stateProp] = true;
          window.localStorage.setItem(
            stateProp,
            JSON.stringify(this[stateProp]),
          );
          depNum -= num;
          dependencies.forEach((dep) => {
            window.localStorage.setItem(dep, JSON.stringify(depNum));
            if (depNum <= 0) {
              window.localStorage.removeItem(dep);
            }
          });
        }
        window.localStorage.removeItem(anotherDependent);
      }
    });
  };
}

export function goBack() {
  const router = useRouter();
  setTimeout(async () => {
    await router.push("/");
    router.go(0);
  }, 750);
}

export async function insertData(n, t) {
  try {
    await addDoc(collection(db, "time"), {
      username: n,
      time: t,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function insertOneData(n, t) {
  try {
    await addDoc(collection(db, "baby"), {
      username: n,
      time: t,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
