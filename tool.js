export function setTrueState(stateProp) {
    return function () {
        onMounted(() => {
            this[stateProp] = true;
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

export function setNumTrueState(stateProp,numStateProp,num) {
    return function (){
        onMounted(()=>{
            this[stateProp] = true;
            this[numStateProp] = num;
            window.localStorage.setItem(stateProp,JSON.stringify(this[stateProp]));
            window.localStorage.setItem(numStateProp,JSON.stringify(this[numStateProp]));
        });
    };
}


// Function to check dependencies and set state
export function setDependentState(stateProp, dependencies,type=true) {
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
                dependencies.forEach((dep) => {
                    window.localStorage.removeItem(dep);
                });
            }
        });
    };
}

export function setDependentNumState(stateProp,dependencies,num){
    return function () {
        let depValues = {};
        onBeforeMount(()=>{
            dependencies.forEach((dep)=>{
                depValues[dep] = JSON.parse(window.localStorage.getItem(dep))
            });
        });
        onMounted(()=>{
            if(dependencies.every((dep)=>depValues[dep])){
                let depNum = depValues[Object.keys(depValues)]
                if(depNum >= num){
                    // console.log(depNum)
                    this[stateProp] = true;
                    window.localStorage.setItem(stateProp, JSON.stringify(this[stateProp]));
                    depNum -= num;
                    dependencies.forEach((dep) => {
                        window.localStorage.setItem(dep,JSON.stringify(depNum))
                        if(depNum <= 0){
                            window.localStorage.removeItem(dep);
                        }
                    });
                }
            }
        })
    }
}