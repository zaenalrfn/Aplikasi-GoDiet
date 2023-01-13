<template>
  <div class="container">
    <div class="header">
      <div class="row justify-content-between mt-5 mb-4">
        <div class="col-2" id="title">
          <RouterLink to="/">
            <img src="/img/Vector 2.png" />
          </RouterLink>
        </div>
        <div class="col-8" id="title">
          <h1 class="titleHU text-center">Aktivitas Kalori</h1>
        </div>
        <div class="col-2" id="title">
          <!-- <img src="asset/img/Frame 14.png" /> -->
        </div>
      </div>
    </div>

    <div id="fiturMenu-aktivitas">
      <div class="row justify-content-center gap-3 mb-3">
        <div class="col-md-4">
          <div
            v-for="aktivi in aktivitas"
            v-bind:key="aktivi.id"
            class="card-aktivitas d-flex align-items-center mb-3"
            id="satu"
          >
            <div class="card-body">
              <RouterLink v-bind:to="/aktivitasGerak/ + aktivi.id">
                <h4 class="text-white">{{ aktivi.name }}</h4>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      aktivitas: [],
    };
  },
  mounted() {
    let self = this;
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio",
      headers: {
        "X-RapidAPI-Key": "023f98117fmsh1c2705b6ac9a25fp11f719jsna2f7cf1eb86c",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        self.aktivitas = response.data;
        console.log(self.aktivitas);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>
