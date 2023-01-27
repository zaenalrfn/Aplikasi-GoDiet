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
      <div class="row justify-content-center mb-3">
        <div class="card aktivitas">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <!-- <div class="col-md-4">
          <div class="card-aktivitas d-flex align-items-center mb-3" id="satu">
            <div class="card-body">
              <RouterLink to="/aktivitasGerak">
                <h4 class="text-white">sfddf</h4>
              </RouterLink>
            </div>
          </div>
        </div> -->
        <!-- <div class="col-md-4">
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import counter from "../views/ben.js";
export default {
  data() {
    return {
      aktivitas: [],
      counterAk: 0,
    };
  },
  mounted() {
    // let self = this;
    // const options = {
    //   method: "GET",
    //   url: `https://zylalabs.com/api/392/exercise+database+api/310/list+exercise+by+body+part?bodypart=cardio`,
    //   headers: {
    //     Authorization: "Bearer 639|dwzLZuBqnS0ZgiGLjMBa1VTPpHoFYnVBlgxwpLQa",
    //   },
    // };
    // axios(options)
    //   .then(function (response) {
    //     self.aktivitas = response.data;
    //     console.log(self.aktivitas);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  },
};
</script>
