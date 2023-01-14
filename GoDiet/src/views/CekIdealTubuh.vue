<template>
  <div class="container">
    <div class="row" id="cek-ideal-tubuh">
      <div class="title-ideal d-flex align-items-center">
        <RouterLink to="/">
          <a href="#">
            <!-- <h3 class="fs-1"><i class="bi bi-arrow-left"></i></h3> -->
            <img
              src="/img/icon-kembali.png"
              alt="kembali"
              width="8"
              height="17"
            />
          </a>
        </RouterLink>
        <h2 class="text-center">Cek ideal tubuh</h2>
      </div>
      <div class="col cek-input border-bottom pb-2">
        <h5>Berat Badan</h5>
        <div class="input-ideal d-flex align-items-center gap-2">
          <input v-model="beratBadan" type="number" id="berat-badan" />
          <p>kg</p>
        </div>
        <h5>Tinggi Badan</h5>
        <div class="input-ideal d-flex align-items-center gap-2 mt-2">
          <input v-model="tinggiBadan" type="number" id="tinggi-badan" />
          <p>cm</p>
        </div>
        <div class="cek text-center">
          <a
            href="#"
            @click.prevent="kalkulatorBmi"
            class="btn text-white"
            onclick="Cek(true)"
            >CEK</a
          >
        </div>
        <div class="bmi-ideal">
          <h4>
            BMI(kg/m2): <span id="bmi">{{ hasilBmi }}</span>
          </h4>
          <img src="/img/img-bmi.png" alt="bmi" width="330" height="59.67" />
          <p id="bmi-deskripsi" class="text-center mt-3">
            {{ textBmi }}
          </p>
        </div>
      </div>
      <div class="col grafik-ideal-tubuh">
        <div class="grafik mt-4">
          <!-- <Bar id="my-chart-id" :options="chartOptions" :data="chartData" /> -->
          <div class="d-flex gap-3 align-items-center">
            <div class="d-flex align-items-center gap-3">
              <div class="Bb-icon"></div>
              <p>Berat Badan</p>
            </div>
            <div class="d-flex align-items-center gap-3">
              <div class="Tb-icon"></div>
              <p>Per Minggu</p>
            </div>
          </div>
        </div>
        <div class="cek-kebutuhan-kalori text-center">
          <RouterLink to="/kebutuhanKalori">
            <a href="#" class="btn text-white">LIHAT KEBUTUHAN KALORI</a>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// bagian chart js
const ctx = document.getElementById("grafikBmi");

export default {
  data() {
    return {
      beratBadan: "",
      tinggiBadan: "",
      hasilBmi: "",
      textBmi: "",
    };
  },
  methods: {
    kalkulatorBmi() {
      const bmi = (
        this.beratBadan / Math.pow(this.tinggiBadan / 100, 2)
      ).toFixed(2);
      if (this.beratBadan === "" || this.tinggiBadan === "") {
        alert("Inputs can not be empty");
      } else if (this.beratBadan <= 0 || this.tinggiBadan <= 0) {
        alert("Inputs can not be negative");
      }

      if (bmi < 18.5 && bmi > 0) {
        this.textBmi = "Underweight";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        this.textBmi = "Normal";
      } else if (bmi >= 24.9 && bmi < 29.9) {
        this.textBmi = "Overweight";
      } else if (bmi >= 29.9) {
        this.textBmi = "Obesity";
      }
      this.hasilBmi = bmi;
    },
  },
};
</script>
