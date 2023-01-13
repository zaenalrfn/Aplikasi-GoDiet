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
          <input type="text" id="berat-badan" />
          <p>kg</p>
        </div>
        <h5>Tinggi Badan</h5>
        <div class="input-ideal d-flex align-items-center gap-2 mt-2">
          <input type="text" id="tinggi-badan" />
          <p>cm</p>
        </div>
        <h5>Umur</h5>
        <div class="input-ideal d-flex align-items-center gap-2 mt-2">
          <input type="text" id="umur" />
        </div>
        <div class="cek text-center border-bottom pb-5">
          <a href="#" class="btn text-white" onclick="Cek(true)">CEK</a>
        </div>
        <div class="bmi-ideal text-center">
          <h4>BMR Anda adalah<span id="bmi"> ......... kcal</span></h4>
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
