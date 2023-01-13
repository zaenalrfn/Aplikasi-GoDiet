<template>
  <div class="container">
    <div class="header">
      <div class="row justify-content-between mt-5 mb-4">
        <div class="col-2 d-flex justify-content-center" id="title">
          <RouterLink to="/aktivitasKalori">
            <img src="/img/Vector 2.png" />
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="d-block text-center">
      <img src="/img/human.png" alt="" width="303" />
    </div>
    <div>
      <div>
        <h2>
          Loncat Bintang <br />
          30 Detik <span class="text-warning">x 3</span>
        </h2>
      </div>
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
