<template>
  <div class="row align-items-center justify-content-center mt-5">
    <h3 class="col-7" style="color: gray">Enter the movie details:</h3>
    <form class="col-7 card" v-on:submit.prevent="sendMovieHandler">
      <div class="mb-3">
        <label for="TITLE" class="form-label">Title</label>
        <input
          type="text"
          name="title"
          class="form-control"
          id="TITLE"
          v-model="title"
        />
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Image source</label>
        <input
          type="text"
          name="poster_path"
          class="form-control"
          id="image"
          v-model="image"
        />
      </div>
      <div class="mb-3 input-group">
        <label class="input-group-text">Description</label>
        <textarea
          class="form-control"
          name="overview"
          aria-label="Description"
          v-model="overview"
        ></textarea>
      </div>
      <button type="submit" class="mb-3 btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addMovie",
  data() {
    return {
      overview: "",
      image: "",
      title: "",
    };
  },
  methods: {
    sendMovieHandler(e) {
      e.preventDefault();
      const newarr = {
        overview: this.overview,
        poster_path:
          "https://image.tmdb.org/t/p/original/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg",
        title: this.title,
      };
      axios
        .post("http://localhost:3000/movies", newarr)
        .then(() => {
          alert("added successfully!");
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
  },
};
</script>

<style></style>
