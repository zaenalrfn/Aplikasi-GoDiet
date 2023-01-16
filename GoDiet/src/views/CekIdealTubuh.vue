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
          <a href="#" @click.prevent="kalkulatorBmi" class="btn text-white"
            >CEK</a
          >
        </div>
        <div class="bmi-ideal">
          <h4>
            BMI(kg/m2): <span id="bmi">{{ hasilBmi }}</span>
          </h4>
          <div class="img-bmi position-relative">
            <div class="indikator-img-bmi position-absolute"></div>
          </div>
          <p id="bmi-deskripsi" class="text-center mt-3">
            {{ textBmi }}
          </p>
        </div>
      </div>
      <div class="col grafik-ideal-tubuh">
        <div class="grafik mt-4">
          <!-- bagian chart js -->
          <Bar id="myChart" :options="chartOptions" :data="chartData" />
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
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  components: { Bar },
  data() {
    return {
      beratBadan: "",
      tinggiBadan: "",
      hasilBmi: "",
      textBmi: "",
      bmiHistory: [],
      bmiMp: [],
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  methods: {
    kalkulatorBmi() {
      let InputBb = document.getElementById("berat-badan"),
        InputTb = document.getElementById("tinggi-badan"),
        indikatorBmi = document.querySelector(".indikator-img-bmi"),
        textBmi = document.getElementById("bmi-deskripsi");
      const bmi = (
        this.beratBadan / Math.pow(this.tinggiBadan / 100, 2)
      ).toFixed(2);
      if (this.beratBadan === "" || this.tinggiBadan === "") {
        InputBb.classList.add("input-alert");
        InputTb.classList.add("input-alert");
      } else if (this.beratBadan <= 0 || this.tinggiBadan <= 0) {
        alert("Inputs can not be negative");
      } else {
        InputBb.classList.remove("input-alert");
        InputTb.classList.remove("input-alert");
      }

      if (bmi < 18.5 && bmi > 0) {
        this.textBmi = "Underweight";
        textBmi.style.color = "#3f51b5";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        this.textBmi = "Normal";
        textBmi.style.color = "#74dd78";
      } else if (bmi >= 24.9 && bmi < 29.9) {
        this.textBmi = "Overweight";
        textBmi.style.color = "#f44336";
      } else if (bmi >= 29.9) {
        this.textBmi = "Obesity";
        textBmi.style.color = "#b71c1c";
      }
      if (bmi <= 15) {
        indikatorBmi.style.width = "0%";
      } else if (bmi >= 29.9) {
        indikatorBmi.style.width = "100%";
      } else {
        indikatorBmi.style.width = ((bmi - 15) * 100) / 35 + "%";
      }
      this.hasilBmi = bmi;

      // bagian history bmi
      this.bmiHistory.push(this.beratBadan);
      if (this.bmiHistory.length > 7) {
        this.bmiHistory.pop();
      }
      const parsed = JSON.stringify(this.bmiHistory);
      localStorage.setItem("history-bmi", parsed);
    },
  },
  mounted() {
    if (localStorage.getItem("history-bmi")) {
      try {
        this.bmiMp = JSON.parse(localStorage.getItem("history-bmi"));
      } catch (e) {
        localStorage.removeItem("history-bmi");
      }
    }
  },
};
</script>
