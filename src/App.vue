<template>
  <div class="app">
    <br />
    <Header />
    <Navbar />
    <Keyboard />
  </div>
</template>

<script>
import Header from "./componentes/Header.vue";
import Navbar from "./componentes/Navbar.vue";
import Keyboard from "./componentes/Keyboard.vue";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
    Keyboard,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},

  mounted() {
    this.$store.dispatch("restart");
  },
};
</script>

<style>
.app {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}
</style>
