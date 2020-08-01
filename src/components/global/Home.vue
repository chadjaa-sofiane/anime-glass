<template>
  <div>
    <div id="Home">
      <!-- <list :views="views" title="here is title the list"/> -->
      <ul id="HomeNav">
        <li>All</li>
        <li>Series</li>
        <li>Movie</li>
      </ul>

      <br />
      <list :views="anime" title="Recent uploads" />
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
import List from "../ListView.vue";
import { mapActions } from "vuex";
import row from '../row.vue'
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
      anime: [
        {
          id: 2,
          title: "one piece",
          url: "https://live.staticflickr.com/6142/5986912410_682fed19e2_z.jpg"
        },
        {
          id: 3,
          title: "kimitsu no yaiba",
          url:
            "https://www.nautiljon.com/images/anime/00/87/mini/kimetsu_no_yaiba_7878.jpg?11592942516"
        },
        {
          id: 4,
          title: "one punch man",
          url:
            "https://fr.web.img3.acsta.net/c_216_288/pictures/17/02/27/17/41/046707.jpg"
        },
        {
          id: 5,
          title: "attack on 3aryan",
          url:
            "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg"
        },
        {
          id: 6,
          title: "fulmetal alchemist brotherhood",
          url:
            "https://fr.web.img6.acsta.net/pictures/19/07/29/15/50/2364027.jpg"
        },
        {
          id: 7,
          title: "dororo",
          url:
            "https://media.senscritique.com/media/000018334735/source_big/Dororo.jpg"
        },
        {
          id: 8,
          title: "jojo bizzare adventure",
          url:
            "https://i.pinimg.com/originals/9e/19/49/9e1949f1e3b8b668ba0d7feea595eb30.jpg"
        }
      ]
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
#Home {
  border: 1px solid rgba(255, 255, 255, 0.7);
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  padding: 20px 5px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
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
    border-radius: 15px;
    cursor: pointer;
    &:hover {
      background: yellowgreen;
      color: black;
      border: none;
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

