<template>
  <div class="container">
    <div class="header">
      <div class="row justify-content-between mt-5 mb-4">
        <div class="col" id="title">
          <RouterLink to="/aktivitasKalori">
            <img src="/img/Vector 2.png" />
          </RouterLink>
          <div class="d-block text-center">
            <img :src="aktivitasId.gifUrl" alt="" :width="303" :height="519" />
          </div>
          <div>
            <h2>
              {{ aktivitasId.name }} <br />
              30 Detik <span class="text-warning">x 3</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>Berat Badan</p>
      <form class="row g-4 d-flex justify-content-center">
        <div class="col-4">
          <input
            type="number"
            class="form-control"
            id="inputPassword2"
            placeholder=""
          />
        </div>
        <div class="col-8">
          <a
            href="#"
            class="btn text-white mb-3 w-100"
            id="hitung"
            onclick="HitungKalori(true)"
          >
            Hitung
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      aktivitasId: [],
    };
  },
  mounted() {
    let self = this;
    let parameterId = this.$route.params.id;
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${parameterId}`,
      headers: {
        "X-RapidAPI-Key": "023f98117fmsh1c2705b6ac9a25fp11f719jsna2f7cf1eb86c",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        self.aktivitasId = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>
