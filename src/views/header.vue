<template>
  <header :style="{background: backColor}" :class="{showBorder :getScrollY>200}">
    <span  id="nav-btn" @click="openNav" class="fas fa-bars"></span>
    <!-- <div id="searsh">
      <input id="seq " type="text" />
      <span class="fas fa-search"></span>
    </div>-->
    <div id="Sign-in" @click="Sign_in">Sign in</div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-page",
  computed: {
    ...mapGetters(["getScrollY"]),
    backColor(){
      return `rgba(30,37,48,${this.getScrollY/200})`
    }
  },
  methods: {
    ...mapActions(["openNav", "closeNav"]),
    Sign_in() {
      if (window.location.pathname != "/Sign_in") this.$router.push("/Sign_in");
    }
  }
};
</script>
<style lang="scss" scoped>

@mixin floating() {
   position: absolute;
   top: 50%;
   transform:translateY(-50%);
}
.showBorder{
  border-bottom: 1px solid #fff;
}
header {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 3em;
  transition: 0.5s all ease;
  text-align: center;
}
/* #searsh {
    position: relative;
    font-weight: bold;
    color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px 1px rgb(0, 0, 0,.5);
    span {
      position: absolute;
      top: 50%;
      right: 0.7em;
      transform: translateY(-50%);
      font-size: 1.2em;
    }
    input {
      color: #fff;
      background: rgba(240, 236, 236, 0.246);
      padding: 10px;
      border: none;
      outline: none;
      width: 25rem;
      font-size: 1.2em;
      font-weight: bold;
    }
    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 15%;
    }
    &::after {
      bottom: 0;
      background: linear-gradient(
        360deg,
        rgba(255, 254, 254, 0.3),
        transparent
      );
    }
    &::before {
      top: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 254, 254, 0.3),
        transparent
      );
    }
  } */
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