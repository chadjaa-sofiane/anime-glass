<template>
<!-- @scroll="updateSrollTop" -->
  <div @scroll="UPDATE_SCROLL_TOP()" id="app">
    <div class="divs_fixed">
      <Head-P />
      <Navapp />
    </div>
    <section @click="closeNav">
      <router-view />
    </section>
  </div>
</template>

<script>
import Navapp from "@/views/navbar.vue";
import HeadP from "@/views/header.vue";
import { mapActions , mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    Navapp,
    HeadP
  },
  methods: {
    ...mapActions(["closeNav", "updateSrollTop"]),
    ...mapMutations(['UPDATE_SCROLL_TOP'])
  }
};
console.log(document.scrollY);
</script>
<style lang="scss">
//i make this div buy fix problem the relative zindex 

.divs_fixed{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
#app {
  z-index: -1;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: 500;
  background: #272c38;
  // background: #1d9cdf;
  overflow-y: scroll;
  overflow-x: hidden;
  color: #FFF;
  scroll-behavior:smooth;
}
section {
  padding: 0 5px;
  min-height: 100%;
  padding-top: 5em;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
  --webkit-transition: all 2s ease-in-out;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.52);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(110, 110, 110);
}
::-webkit-scrollbar-corner {
  display: none;
}
</style>
