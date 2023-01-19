<template>
  <div class="container">
    <div class="row" id="cek-ideal-tubuh">
      <div class="title-ideal d-flex align-items-center">
        <RouterLink to="/idealTubuh">
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
        <h2 class="text-center">Kebutuhan Kalori</h2>
      </div>
      <div class="col cek-input">
        <h5>Berat Badan</h5>
        <div class="input-ideal d-flex align-items-center gap-2">
          <input type="text" id="berat-badan" v-model="bB_bmr" />
          <p>kg</p>
        </div>
        <h5>Tinggi Badan</h5>
        <div class="input-ideal d-flex align-items-center gap-2 mt-2">
          <input type="text" id="tinggi-badan" v-model="tB_bmr" />
          <p>cm</p>
        </div>
        <h5>Umur</h5>
        <div class="input-ideal d-flex align-items-center gap-2 mt-2">
          <input type="text" id="umur" v-model="u_bmr" />
        </div>
        <div class="cek text-center border-bottom pb-5">
          <a href="#" class="btn text-white" @click.prevent="kalkulatorBmr"
            >CEK</a
          >
        </div>
        <div class="bmi-ideal text-center">
          <h4>
            BMR Anda adalah<span id="bmi" class="hasil-bmr"> ......... </span
            >kcal
          </h4>
          <img
            src="/img/img-kebutuhan-kalori.png"
            alt="bmr"
            width="340"
            class="img-bmr"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bB_bmr: null,
      tB_bmr: null,
      u_bmr: null,
    };
  },
  methods: {
    kalkulatorBmr() {
      let hasilBmr = document.querySelector(".hasil-bmr"),
        beratBadanBmr = 9.6 * this.bB_bmr,
        tinggiBadanBmr = 1.8 * this.tB_bmr,
        umurBmr = 4.7 * this.u_bmr;

      let bmr = 655 + beratBadanBmr + tinggiBadanBmr - umurBmr;
      hasilBmr.textContent = Math.round(bmr * 100) / 100.0;
    },
  },
};
</script>

<!-- 
BMR Wanita = 655 + (9,6 × berat badan) + (1,8 × tinggi badan) – (4,7 × usia)
655.1 + (9.563 * weight [kg]) + (1.85 * size [cm]) − (4.676 * age

  Little/no exercise: BMR * 1.2 = Total Calorie Need
Light exercise: BMR * 1.375 = Total Calorie Need
Moderate exercise (3-5 days/wk): BMR * 1.55 = Total Calorie Need
Very active (6-7 days/wk): BMR * 1.725 = Total Calorie Need
Extra active (very active & physical job): BMR * 1.9 = Total Calorie Need
 -->
