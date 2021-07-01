import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      colorCount: 6,
      isHard: true,
      colors: [],
      pickedColor: 0,
      colorDisplay: "",
      headerColor: "",
      restartButton: "",
      messageDisplay: "",
    },
     methods: {
        /*setAllColorsTo(color) {
        let newColors = [];
        for (let i = 0; i < this.state.colorCount; i++) {
            newColors.push(color);
        }
        this.state.colors = newColors;
        },
        PickColor() {
        let quantity;
        if (this.state.isHard) {
            quantity = 6;
        } else {
            quantity = 3;
        }
        return Math.floor(Math.random() * quantity);
        },
        createNewColors(numbers) {
        let arr = [];
        for (let i = 0; i < numbers; i++) {
            arr.push(this.createRandomStringColor());
        }
        return arr;
        },
        createRandomStringColor() {
        let newColor =
            "rgb(" +
            this.randomInt() +
            ", " +
            this.randomInt() +
            ", " +
            this.randomInt() +
            ")";
        return newColor;
        },
        randomInt() {
        return Math.floor(Math.random() * 256);
        },*/
    
    },
    actions: {
     changeMode({commit}, estado){
            commit('changeMode',estado)
        },
     restart({commit}){
         commit('restart')
     },
     evalChoice({commit},index){
         commit('evalChoice',index)
     }
    },
    mutations: {
        changeMode(state, estado){
        console.log(estado)
        state.isHard = estado;
        state.colorCount = estado ? 6 : 3;
         },
        restart(state){
            let arr = [];
            for (let i = 0; i < state.colorCount; i++) {
                let newColor ="rgb(" + Math.floor(Math.random() * 256) + ", " +Math.floor(Math.random() * 256) +   ", " +   Math.floor(Math.random() * 256) +   ")"
                arr.push(newColor)
            }
            state.colors = arr;
            let quantity;
                if (this.state.isHard) {
                quantity = 6;
                } else {
                quantity = 3;
                }
            let resultado = Math.floor(Math.random() * quantity)
            state.pickedColor = state.colors[resultado];
            state.colorDisplay = state.pickedColor;
            state.textContent = "Pick New Colors!";
            state.headerColor = "steelblue";
            state.messageDisplay = "";
            state.restartButton = "New Colors!";
        },
        evalChoice(state,index) {
            let colorChosen = state.colors[index];
            if (colorChosen === state.pickedColor) {
                state.messageDisplay = "You Picked Right!";
                let newColors = [];
                    for (let i = 0; i < state.colorCount; i++) {
                        newColors.push(state.pickedColor);
                    }
                state.headerColor = state.pickedColor;
                state.colors = newColors;
                state.restartButton = "Play Again!";
            } else {
                state.colors.splice(index, 1, "#232323");
                state.messageDisplay = "Try Again!";
                //this.colorDisplay = "#000000";
      }
    },
    }
})