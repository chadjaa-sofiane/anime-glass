<template>
  <div id="List">
    <div id="head-block">
      <h1 id="List-title">{{ title }}</h1>
      <div id="arrows">
        <span v-show="getLeft != 0" @click="goLeft()" class="fas fa-long-arrow-alt-left"></span>
        <span @click="goRight()" class="fas fa-long-arrow-alt-right"></span>
      </div>
      <div id="All">All</div>
    </div>
    <div @scroll="scrolLeft" id="List-view">
       <div v-for="view in views" :key="view.id"> 
         <row class="row" :view="view" />
       </div> 
    </div>
    {{ getLeft }} 
  </div>
</template>

<script>
import row from "./row.vue";

export default {
  name: "List",
  data () {
    return {
      left:0
    }
  },
  props: {
    views: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
  },
  components: {
    row,
  },
  methods: {
    scrolLeft(){
      this.left = document.getElementById('List-view').scrollLeft
    },
    goLeft(){
      document.getElementById('List-view').scrollLeft -= 600
    },
    goRight(){
      document.getElementById('List-view').scrollLeft += 600
    }
  }
  ,
  computed: {
  getLeft(){
      return this.left; 
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main";
.row{
  position: relative;
  width: 200px;
  height: 350px;
  @media (max-width:720px){
    width: 160px;
    height: 280px;
  }
}
#List {
  margin: auto;
  width: 100%;
  margin: 50px 0;
  position: relative;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 4px;
  background: rgba($color: #FFF, $alpha: .03);
}
  #head-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    font-size: 1em;
    width: 100%;
    margin: auto;
    @media all and (max-width: 720px){
      font-size:.8rem;
    }
  }
#List-view {
  box-sizing: border-box;
  border-radius: 10px;
  padding: 5px;
  height: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  scroll-behavior:smooth;
  &::-webkit-scrollbar {
    display: none;
  }
}
#List-title{
  font-size: 1em;
}
#arrows{
  position: relative;
  height: 100%;
  width: 150px;
  @media (max-width:720px){
    width: 100px;
  }
  .fa-long-arrow-alt-right,.fa-long-arrow-alt-right{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .fa-long-arrow-alt-right{
    right: 0;
  }
  span{
    font-size: 2em;
    border: 1px solid #FFF;
    border-radius:5px;
    padding:0 10px;
    cursor: pointer;
    &:hover{
      background: yellowgreen;
      border: 1px solid #272c38;
    }
  }
}
#All {
  padding: 5px 15px;
  width: 25px;
  height: 50%;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: yellowgreen;
    color: black;
    border: 1px solid #272c38;
  }
}

</style>