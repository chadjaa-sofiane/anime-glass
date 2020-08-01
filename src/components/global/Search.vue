<template>
  <div id="Search">
    <div id="Search-block">
      <input size=15 type="text" id="S" autocomplete="false" />
      <label for="S">
        <span class="fas fa-search"></span>
      </label>
    </div>
    <br>
        <br>
        <br>
        <br>
    <div id="resault">
        <row class="row" />
        <row class="row" />
        <row class="row" />
        <row class="row" />
        <row class="row" />
        <row class="row" />
        <row class="row" />
        <row class="row" />
        <row class="row" />
    </div>
  </div>
</template>

<script>
import row from '../row.vue'
export default {
  name: "Search",
  components: {
      row
  }
}
</script>

<style lang="scss" scoped>
#Search {
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 10px;
}
#Search-block {
  position: relative;
  width: 350px;
  height: 40px;
  margin: auto;
  input {
    background: none;
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 5px;
    font-size: 1.3em;
    font-weight: bold;
    color: #fff;
    outline: none;
    box-sizing: border-box;
  }
  span {
    position: absolute;
    top: 50%;
    font-size: 1.5em;
    font-weight: 700;
    right: 5%;
    transform: translateY(-50%);
    &:hover{
        color: greenyellow;
        cursor: pointer;
        font-size: 1.7em;
    }
  }
}
#resault{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    .row{
        margin: 15px 15px 0 0;
        @media (max-width:720px) {
            margin: 15px 0 0 0;
        }
    }
}
</style>