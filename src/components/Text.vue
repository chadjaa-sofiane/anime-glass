<template>
  <div id="desc">
    <h2> {{ TEXT }} </h2>
  </div>
</template>

<script>
export default {
  name: "Text",
  props:{
      TEXT:{
        type:String,
        default:""
      }
  }
};
</script>

<style lang="scss" >
@import "@/styles/main";
#desc {
  position: relative;
  margin: auto;
  color: #fff;
  background: rgba(105, 105, 105, 0.3);
  padding: 30px;
  text-align: justify;
  font-size: 0.8em;
  box-shadow: 1px 1px 10px 1px rgba(8, 27, 2, 0.4);
  border-radius: 3px;
  overflow: hidden;
  @include boxStyleGlass(.5em,rgba(255,255,255,.2));
}
</style>