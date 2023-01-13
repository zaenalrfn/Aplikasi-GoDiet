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
          <div class="card-aktivitas d-flex align-items-center" id="satu">
            <div class="card-body">
              <RouterLink to="/aktivitasGerak">
                <h4 class="text-white">Locat Bintang 30 Detik</h4>
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card-aktivitas d-flex align-items-center" id="dua">
            <div class="card-body">
              <h4 class="text-white">Berlari jarak 15km</h4>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card-aktivitas d-flex align-items-center" id="tiga">
            <div class="card-body">
              <h4 class="text-white">Jump squat 15 menit/hari</h4>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-aktivitas d-flex align-items-center" id="empat">
            <div class="card-body">
              <h4 class="text-white">Lompat Tali 10 menit/hari</h4>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-aktivitas d-flex align-items-center" id="lima">
            <div class="card-body">
              <h4 class="text-white">High kness 10 menit/hari</h4>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-aktivitas d-flex align-items-center" id="enam">
            <div class="card-body">
              <h4 class="text-white">Butt Kicks 15 menit/hari</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
