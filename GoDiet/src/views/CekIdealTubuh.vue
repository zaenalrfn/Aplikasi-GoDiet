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
          <input type="text" id="berat-badan" />
          <p>kg</p>
        </div>
        <h5>Tinggi Badan</h5>
        <div class="input-ideal d-flex align-items-center gap-2 mt-2">
          <input type="text" id="tinggi-badan" />
          <p>cm</p>
        </div>
        <div class="cek text-center">
          <a href="#" class="btn text-white" onclick="Cek(true)">CEK</a>
        </div>
        <div class="bmi-ideal">
          <h4>BMI(kg/m2): <span id="bmi">20.1</span></h4>
          <img src="/img/img-bmi.png" alt="bmi" width="330" height="59.67" />
          <p id="bmi-deskripsi" class="text-center mt-3">
            Berat badan yang sehat
          </p>
        </div>
      </div>
      <div class="col grafik-ideal-tubuh">
        <div class="grafik mt-4">
          <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
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
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
          {
            backgroundColor: "rgba(250, 184, 62, 0.5)",
            borderColor: "#FAB83E",
            borderWidth: 1,
            data: [50, 48, 42],
          },
        ],
      },
    };
  },
};
</script>
