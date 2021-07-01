<template>
  <section class="src-componentes-keyboard">
    <div
      class="square"
      v-for="(color, index) in getSquareColors"
      :key="index"
      :style="{ backgroundColor: color }"
      @click="evalChoice(index)"
    ></div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-keyboard',
    props: [],
    mounted () {

    },
    data () {
      return {
        
      }
    },
    methods: {
      evalChoice(index){
        this.$store.dispatch('evalChoice',index)
        console.log(index)
      }
    },
    computed: {
      getSquareColors(){
        return this.$store.state.colors
      }
    }
}


</script>

<style scoped lang="css">
.src-componentes-keyboard {
  margin: 20px auto;
  max-width: 600px;
}

.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
