<template>
  <div>
    <div id="Player-Block">
          <div id="player">
              <div class="video-player"></div>
              <div class="view-info"></div>
              <div class="view-att"></div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Palyer",
  props:['title'],
};
</script>

<style lang="scss" scoped>
#Player-Block {
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px 0;
  padding-top: 50px;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: black;
}
#player{
  background: rgba(0, 0, 255, 0.5);
  width: 100%;height: 100Vh;
  margin: auto;
  padding: 5px;
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-gap:10px;
  div:nth-child(odd){
    border: 1px solid #FFF;
  }
}
</style>