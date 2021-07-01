<template>
  <section class="src-componentes-header" :style="getBackgroundColor">
    <h1>
      The Great <br />
      <span id="colorDisplay">{{ getHeaderNameColor }}</span>
      <br />
      Guessing Game
    </h1>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-header',
    props: [],
    mounted () {

    },
    data () {
      return {
      
      }
    },
    methods: {
    
   
    },
    computed: {
       getBackgroundColor(){
        return this.$store.state.headerColor
      },
      getHeaderNameColor(){
        return this.$store.state.colorDisplay
      },
      
    }
}


</script>

<style scoped lang="css">
.src-componentes-header {
  transition: all 0.3s;
  background: steelblue none !important;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}

#colorDisplay {
  font-size: 200%;
}

h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}
</style>
