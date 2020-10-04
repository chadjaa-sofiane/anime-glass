<template>
  <div id="Search">
    <br />
    <br />
    <div id="filter">
      <div id="filter-types">
        <p @click="rat_block_open = !rat_block_open" :class="{active :rat_block_open}">Ratings</p>
      </div>
      <div id="filter_block">
        <transition name="filter_block">
          <div id="Ratings-list" v-if="rat_block_open">
            <span
              v-for="Rating in Ratings"
              :key="Rating.name"
              :class="{rat_active :Rating.validate}"
              @click="Rating.validate = !Rating.validate"
            >{{ Rating.name }}</span>
          </div>
        </transition>
      </div>
    </div>
    <br />
    <br />  
      <transition-group id="resault" name="row">
        <row class="row" v-for="anime in getNewArray" :key="anime.id" :view="anime" />
      </transition-group>
      <transition name="error">
        <div id="E" v-if="getNewArray.length == 0">
          <p>not found</p>
        </div>
      </transition>
  </div>
</template>

<script>
import row from "../row.vue";
import { mapGetters } from "vuex";
import { animes } from "../anime.json";
export default {
  name: "Search",
  components: {
    row,
  },
  data() {
    return {
      animes,
      rat_block_open: false,
      Ratings: [
        { name: "ichi", validate: false },
        { name: "horror", validate: false },
        { name: "romance", validate: false },
        { name: "chonin", validate: false },
        { name: "senin", validate: false },
        { name: "fantazy", validate: false },
        { name: "demons", validate: false },
        { name: "game", validate: false },
      ],
    };
  },
  computed: {
    ...mapGetters(["getSearch"]),
    getNewArray() {
      const Search = new RegExp(this.getSearch);
      return this.animes.filter((view) => Search.test(view.title));
    },
  },
};
</script>

<style lang="scss" scoped>
#Search {
  border-radius: 5px;
  padding: 60px 10px;
}
#filter {
  width: 100%;
  box-sizing: border-box;
}
#filter-types {
  display: flex;
  justify-content: space-around;
  p {
    padding: 5px;
    font-size: 1.5rem;
    padding: 5px 15px;
    border-radius: 5px;
  }
  cursor: pointer;
}
#Ratings-list {
  width: 80%;
  display: grid;
  padding: 20px;
  border: 1px solid greenyellow;
  box-shadow: 5px 5px 10px 1px rgba(172, 255, 47, 0.5);
  border-radius: 5px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: minmax(10px, auto);
  grid-row-gap: 10px;
  margin: auto;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 1.2em;
  span {
    padding: 10px 0;
    text-align: center;
    border-radius: 10px;
    margin: 5px 0 0 10px;
    border: 1px solid greenyellow;
    cursor: pointer;
    transition: 100ms all ease-in-out;
  }
  @media (max-width: 720px) {
    width: 90%;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 420px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
}
.active {
  border: 1px solid greenyellow;
}
.filter_block-leave-active,
.filter_block-enter-active {
  transition: 100ms all ease-in;
}
.filter_block-enter-active {
  transition-delay: 200ms;
}
.filter_block-enter,
.filter_block-leave-to {
  opacity: 0;
}
.filter_block-enter-to,
.filter_block-leave {
  opacity: 1;
}

.rat_active {
  background: greenyellow;
}
.row-enter-active,
.row-leave-active {
  transition: opacity 50ms all ease, transform 100ms all ease-in-out;
}
.row-enter-active {
  transition-delay: 200ms;
}
.row-enter,
.row-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.row-enter-to,
.row-leave {
  opacity: 1;
  transform: scale(1);
}
#resault {
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 20rem;
  transition: 1s;
  .row {
    margin-left: 10px;
    transition: 100ms all ease;
  }
  @media (max-width: 1080px) {
    width: 85%;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 15rem;
  }
  @media (max-width: 460px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-auto-rows: 15rem;
  }
}
#E {
  font-size: 2rem;
  position: relative;
  padding: 20px 0;
  text-align: center;
  font-weight: bold;
  background: rgba(255, 47, 47, 0.4);
}
.error-enter-active {
  transition: opacity 100ms all ease-in;
  transition-delay: 300ms;
}
.error-enter {
  opacity: 0;
}
.error-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>