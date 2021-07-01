<template>
  <section class="src-componentes-navbar">
    <button id="reset" @click="restart()">{{ getRestartButton }}</button>
    <span id="message"> {{ getMessageDisplay }} </span>

    <button id="easy" @click="easyMode()" :class="getMode ? '' : 'selected'">
      easy
    </button>
    <button id="hard" @click="hardMode()" :class="getMode ? 'selected' : ''">
      hard
    </button>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {
    
      }
    },
    methods: {
      easyMode(){
        this.$store.dispatch('changeMode', false)
        this.restart()
      },
    
      hardMode(){
      this.$store.dispatch('changeMode', true)
      this.restart()  
      },

      restart(){
        this.$store.dispatch('restart')
      }

    },
    computed: {
      getMode(){
        return this.$store.state.isHard
      },
      getMessageDisplay(){
        return this.$store.state.messageDisplay
      },
      getRestartButton(){
        return this.$store.state.restartButton
      }

    }
}


</script>

<style scoped lang="css">
.src-componentes-navbar {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}

#message {
  color: #000000;
  display: inline-block;
  width: 20%;
}

button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}

.selected {
  background-color: steelblue;
  color: white;
}
</style>
