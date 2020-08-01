<template>
  <div id="List">
    <span id="All">All</span>
    <h1 id="List-title"> {{ title }} </h1>
    <div id="List-view">
      <row
        v-for="view in views" 
        :key="view.id" 
        :view="view" 
      />
      
    </div>
    <span class="fas fa-chevron-circle-left"></span>
    <span class="fas fa-chevron-circle-right"></span>
  </div>
</template>

<script>
import row from "./row.vue"

export default {
  name: "List",
  props:{
    views:{
      type:Array,
      default:()=>[]
    },
    title:{
      type:String,
      default:''
    }
  },
  components: {
    row
  }
    // scrollY(){
    //   return document.getElementById('#List-view').scrollLeft
    // }
    //  },
  
}
</script>

<style lang="scss" scoped>
@import "@/styles/main";
#List {
  margin: auto;
  width: 100%;
  margin: 50px 0;
  position: relative;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 4px;
  &:hover{
    .fa-chevron-circle-left,.fa-chevron-circle-right{
      transition: 300ms all ease;
      opacity: 1;
    }
  }
  #List-title{
    position: absolute;
    top: -20%;
    left: 0;
    font-size: 2em;
    padding: 0 15px;
    font-weight: bold;
    border-radius: 2px 2px 0 0;
  }
  .fa-chevron-circle-left,.fa-chevron-circle-right{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    color: rgba(173, 173, 173, 0.8);
    font-size: 4em;
    text-shadow:1px 1px 1px rgba(0, 0, 0, 0.3); 
    &:hover{
      transition: 100ms all ease;
      font-size: 5em;
      color: #FFF;
      text-shadow:1px 1px 1px rgba(0, 0, 0, 0.3); 
    }
  }
  .fa-chevron-circle-left{
    left:0;
  }
  .fa-chevron-circle-right{
    right: 0;
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
 &::-webkit-scrollbar{
   display: none;
 }
}
#All{
  position: absolute;
  right: 15px;
  top: -10%;
  padding:5px 15px;
  color: #FFF;
  border:1px solid #FFF;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.3em;
  cursor: pointer;
  &:hover {
      background: yellowgreen;
      color: black;
      border: none;
    }
}
</style>