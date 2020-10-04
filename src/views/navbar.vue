<template>
  <div id="nav" :class="{navclose :!NavDraw,navopen :NavDraw}">
    <div id="nav_body">
      <!-- General NAVBAR -->
      <div class="link">
        <router-link v-for="list in ginNav" :key="list.name" :to="list.url" tag="li">
          <a>
            <li @click="openNav">
              <i :class="list.icon"></i>
              <span>{{ list.name }}</span>
            </li>
          </a>
        </router-link>
      </div>
      <!-- USER NAVBAR -->
      <div class="link">
        <router-link v-for="list in userNav" :key="list.name" :to="list.url" tag="li">
          <a>
            <li @click="openNav">
              <i :class="list.icon"></i>
              <span>{{ list.name }}</span>
            </li>
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "nav-page",
  data() {
    return {
      ginNav: [
        { name: "Home", url: "/", icon: "fas fa-home" },
        { name: "Search", url: "/search", icon: "fas fa-search" },
        { name: "Season", url: "/season", icon: "fas fa-tree" },
        { name: "Help", url: "/help", icon: "fas fa-question" },
        { name: "Info", url: "/info", icon: "fas fa-info" }
      ],
      userNav: [
        { name: "Favorite", url: "/favorite", icon: "fas fa-star" },
        { name: "Histoire", url: "/histoire", icon: "fas fa-search" },
        { name: "PlayList", url: "/playlist", icon: "fas fa-cat" },
        { name: "News", url: "/news", icon: "fas fa-dog" }
      ]
    };
  },
  computed: {
    ...mapGetters(["NavDraw"])
  },
  methods: {
    ...mapActions(["openNav"])
  }
};
</script>

<style lang="scss" scoped>
.navclose {
  left: -100%;
  transition: all ease 1s;
}
.navopen {
  left: 0;
}
#nav {
  transition: 250ms all ease;
  position: fixed;
  top: 0;
  padding-top: 4em;
  width: 17%;
  background:  #1e2530;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
  #nav_body {
    overflow-y: scroll;
    overflow-x: hidden;
    /* width */
    &::-webkit-scrollbar {
      width: .3em;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: rgb(71, 71, 71);
    }
    &::-webkit-scrollbar-track {
      box-shadow: none;
      display: inline;
    }
  }
}
.link {
  position: relative;
  font-weight: bold;
  font-size: 1.3em;
  color: #2c3e50;
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid #FFF;
  li {
    position: relative;
    color: #fff;
    font-weight: bold;
    width: 100%;
    padding: .5em 0;
    padding-left: 2.5em;
    list-style: none;
    i {
      position: absolute;
      left: -0.2em;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.2em;
    }
    &.router-link-exact-active {
      background: rgba($color: #fff, $alpha: 0.5);
      li{
        color: greenyellow;
      }
    }
    a {
      text-decoration: none;
      background: #fff;
    }
    &:hover {
      color: greenyellow;
    }
   @media (max-width:720px){
      padding: .3em  0;
      font-size: 0.9em;
      i{
        left: -1em;
      }
    }
  }
}
@media all and (min-width: 1080px) {
  #nav {
    width: 25%;
  }
}
@media all and (min-width: 720px) and (max-width: 1080px) {
  #nav {
    width: 35%;
  }
}
@media all and (max-width: 720px) {
  #nav {
    width: 60%;
    font-size: 1.2em;
    #nav_body{
      &::-webkit-scrollbar {
      display: none;
    }
    }
  }
  .link{
    li{
      padding-left: 2.5em;
    }
  }
}
</style>