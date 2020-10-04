<template>
  <div>
    <!--  <h1 v-for="episode in episodes" :key="episode._id">
        {{ episode.title }}
        {{ episode.date_released }}    
    </h1>-->
    <!-- <apolloQuery
      :query="gql => gql`
      query {
        episodes {
          _id
          title
          date_released
        }
      }
     `"
    > -->
    <apolloQuery
      :query="require('../../graphql/episode.gql')"
      :variables="{title}"
    >
      <template v-slot="{ result:{ loading , error, data } }">
        <div v-if="loading"> loding ... </div>
        <div v-if="data">
          <h2 v-for="episode in data.episode" :key="episode._id">
            {{ episode.title }}
            {{ episode.date_released }}
          </h2>
        </div>
        <div v-else>{{ error }}</div>
      </template>
    </apolloQuery>
  </div>
</template>

<script>
//import gql from "graphql-tag";
export default {
  name: "Season",
  data () {
      return {
          title: "a"
      }
  }
  /*apollo: {
    episodes: gql`
      query {
        episodes(_limit : 2) {
          _id
          title
          date_released
        }
      }
    `,
  }*/
};
</script>

<style lang="scss" scoped>

</style>