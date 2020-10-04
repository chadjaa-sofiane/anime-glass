<template>
    <div id="row">
      <div id="row-block">
        <div id="view-image">
          <img :src="view.url "/>
        </div>     
      </div>
      <h4 class="title-view">{{view.title ? view.title : '404'}}</h4>
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
          title: "sofiane  king the world",
          name: "sofiane ",
          url:"https://banner2.cleanpng.com/20180717/bs/kisspng-vimeo-youtube-logo-video-logo-de-vimeo-5b4e0d5757b1a6.2483298115318418793592.jpg"
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main";
#row {
  margin-left: 5px;
  border-radius:5px;
}
#row-block {
  position: relative;
  width: 100%;
  height: 85%;
  box-sizing: border-box;
  display: inline-block;
  margin:0px;
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
  height: 100%;
  z-index: -1;
  overflow: hidden;
  border-radius: 5px;
  @include boxStyleGlass(0.3em, rgba(3, 0, 0, 0.3));
  img {
    width: 100%;
    height: 100%;
  }
}
.title-view {
  // background: rgba(170, 169, 169,.5);
  height: 20%;
  text-align: left;
  margin:0px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  display: inline-block;
}
</style>