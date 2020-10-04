<template>
  <header :style="{background: backColor}" :class="{showBorder :getScrollY>200}">
    <span id="nav-btn" @click="openNav" class="fas fa-bars"></span>
    <div id="Search">
      <input v-model="Search" @focus="goToSearch()" type="text" id="text" autocomplete="off" />
      <span class="fas fa-search"></span>
    </div>
    <span class="fas fa-plus" id="Sign-in" @click="Sign_in"></span>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-page",
  computed: {
    ...mapGetters(["getScrollY","getSearch"]),
    Search: {
      get() {
        return this.getSearch;
      },
      set(value) {
        this.$store.commit("updateSearch", value);
      },
    },
    backColor() {
      return `rgba(30,37,48,${this.getScrollY / 200})`;
    },
  },
  methods: {
    ...mapActions(["openNav", "closeNav"]),
    Sign_in() {
      if (window.location.pathname != "/Sign_in") this.$router.push("/Sign_in");
    },
    goToSearch() {
      if (window.location.pathname != "/search") this.$router.push("/search");
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin floating() {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.showBorder {
  border-bottom: 1px solid #fff;
}
header {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 4em;
  transition: 0.5s all ease;
  text-align: center;
  font-size: 1.1em;
}
#nav-btn {
  @include floating();
  font-size: 2em;
  color: #fff;
  left: 0.5em;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.3em;
  transition: 50ms all ease;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 1px 1px 10px 5px rgb(255, 255, 255, 0.2);
  }
  &:active {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 1px 1px 10px 5px rgb(255, 255, 255, 0.4);
  }
}
#Search {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid greenyellow;
  border-radius: 5px;
  margin: auto;
  width: 400px;
  height: 35px;
  box-sizing: border-box;
  input {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    outline: none;
    color: greenyellow;
    font-weight: 700;
    padding: 0 10px;
    font-size: 1.3em;
  }
  span {
    position: absolute;
    color: greenyellow;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 1.2em;
    cursor: pointer;
    &:hover {
      font-size: 1.4em;
    }
  }
  @media (max-width: 720px) {
    width: 60%;
  }
}
#Sign-in {
  @include floating();
  right: 1rem;
  font-size: 1.5em;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: greenyellow;
  }
  &:active {
    color: chartreuse;
  }
}
@media all and (max-width: 1080px) {
  #nav-btn {
    &:hover {
      background: none;
      box-shadow: none;
    }
  }
  #searsh {
    display: none;
  }
}
@media all and (max-width: 720px) {
  header {
    min-height: 4em;
  }
  #searsh {
    display: none;
  }
}
</style>