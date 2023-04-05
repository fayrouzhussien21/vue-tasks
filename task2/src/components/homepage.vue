<template>
  <div class="row">
    <div
      class="card mt-3 mx-3 col-8"
      v-for="movie in movies"
      :key="movie.id"
      style="width: 18rem"
    >
      <img
        class="card-img-top mt-3"
        v-bind:src="movie.poster_path"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.overview }}</p>
        <router-link :to="`Moviesdetails/${movie.id}`" class="btn btn-primary"
          >Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "homePage",
  data() {
    return {
      movies: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/movies")
      .then((movie) => {
        console.log(movie.data);
        this.movies = [...movie.data];
        console.log(this.movies[0].poster_path);
      })
      .catch((e) => {
        console.log(e.message);
      });
  },
};
</script>
<style></style>
