<template>
  <div>
   
    <div id="row">
      <div id="row-block">
        <div id="view-image">
          <img :src="view.url" />
          <div id="storey">{{ view.title ? view.title : '404' }}</div>
        </div>     
        <h4 class="title-view">{{view.title ? view.title : '404'}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "row",
  props: {
    view: {
      type: Object,
      default: function() {
        return {
          title: "",
          name: ""
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main";
#row {
  position: relative;
  margin-left: 5px;
  width: 12em;
  height: 21em;
  border-radius:5px;
  @media (max-width:720px){
    width: 9em;
    height: 15em;
  }
}
#row-block {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:5px 5px 1px 1px;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    #storey {
      top: 0;
    }
  }
}
#view-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 85%;
  z-index: -1;
  overflow: hidden;
  @include boxStyleGlass(0.3em, rgba(3, 0, 0, 0.3));
  img {
    width: 100%;
    height: 100%;
  }
}
.title-view {
  position: absolute;
  bottom: -5%;
  background: rgba(255, 0, 0, 0.5)a(255, 0, 0, 0.644);
  // background: rgba(170, 169, 169,.5);
  text-align: left;
  padding: 15px;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
}
#storey {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 100%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.349);
  box-sizing: border-box;
  padding: 10px;
  transition: 300ms all ease;
  @include boxStyleGlass(0.3em, rgba(3, 0, 0, 0.3));
}
</style>