<template>
  <div class="container">
    <div class="header">
      <div class="row justify-content-between mt-5 mb-4">
        <div class="col" id="title">
          <RouterLink to="/aktivitasKalori">
            <img src="/img/Vector 2.png" />
          </RouterLink>
          <div class="d-block text-center">
            <img
              :src="aktivitasId.gifUrl"
              alt="mohon tunggu"
              :width="303"
              :height="519"
            />
          </div>
          <div>
            <h2>
              {{ aktivitasId.name }} <br />
              30 Detik {{ waktu }}<span class="text-warning">x 3</span>
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
            @click="() => TogglePopup('buttonTrigger')"
          >
            Hitung
          </a>
        </div>
      </form>
    </div>
  </div>
  <!-- bagian popup aktivitas gerak -->
  <div></div>
  <popUpAktivitasGerak
    v-if="popupTriggers.buttonTrigger"
    :TogglePopup="() => TogglePopup('buttonTrigger')"
  />
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import counter from "../views/ben.js";
import popUpAktivitasGerak from "../components/popUpAktivitasGerak.vue";
export default {
  components: {
    popUpAktivitasGerak,
  },
  data() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      aktivitasId: [],
      popupTriggers,
      TogglePopup,
      waktu: counter(),
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

<!-- Total Kalori yang Dibakar = Durasi (menit) x [METs x 3,5 x Berat Badan (kg)] / 200 -->
