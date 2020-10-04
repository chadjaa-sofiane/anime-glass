<template>
  <div>
    <div id="description">
       <img class="desc-image" src="#" alt="fuck you">
       <p>
          this is description
       </p>
    </div>
    <div id="Home">
      <!-- <list :views="views" title="here is title the list"/> -->
      <ul id="HomeNav">
        <li>All</li>
        <li>Series</li>
        <li>Movie</li>
      </ul>

      <br />
      <list :views="animes" title="Recent uploads" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <row></row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <ul id="footer">
        <li>
          <span class="fab fa-facebook-f"></span>
        </li>
        <li>
          <span class="fab fa-twitter"></span>
        </li>
        <li>
          <span class="fab fa-google"></span>
        </li>
        <li>
          <span class="fab fa-instagram"></span>
        </li>
        <li>
          <span title="ahmed fycel" class="fas fa-poo"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import List from "../ListView.vue"
import { mapActions } from "vuex"
import row from '../row.vue'
import {animes} from '../anime.json'
export default {
  name: "Home",
  components: {
    List,
    row
  },
  created() {
    this.fetchViews();
  },
  data() {
    return {
      animes
    };
  },
  computed: {
    views() {
      return this.$store.getters.getdata(10);
    }
  },
  methods: {
    ...mapActions(["fetchViews"])
  }
};
</script>
<style lang="scss" scoped>
#description{
  position: relative;
  padding: 5em 30px 0 30px;
  width: 100%;
  box-sizing: border-box;
  height: 300px;
  font-size: 2em;
  text-align: center;
  &::after{
    content: ' ';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5em;
    background: linear-gradient(180deg,transparent,#272c38);
  }
  .desc-image{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    z-index: -1;
  }
}
#Home {
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  padding: 20px 5px;
}
#HomeNav {
  display: flex;
  font-size: 1.4em;
  width: 40%;
  margin: auto;
  list-style: none;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  li {
    padding: 5px 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: yellowgreen;
      border: 1px solid #272c38;
      color: black;
    }
  }
  @media(max-width:720px){
    width: 100%;
  }
}
#footer {
  list-style: none;
  display: flex;
  border-top: 1px solid #fff;
  padding: 15px 0;
  width: 60%;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  font-size: 2.5em;
  @media all and (max-width: 720px){
    width: 100%;
  }
  li {
    padding: 10px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    cursor: pointer;
    &:nth-child(1) {
      padding: 10px 20px;
      &:hover {
        background: blue;
      }
    }
    &:nth-child(2):hover {
      background: blueviolet;
    }
    &:nth-child(3):hover {
      background: red;
    }
    &:nth-child(4):hover {
      background: linear-gradient(45deg, yellow, red, blue);
    }
    &:nth-child(5):hover {
      background: brown;
    }
  }
}
</style>

