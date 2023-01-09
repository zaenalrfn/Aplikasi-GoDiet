// BAGIAN POPUP LOGOUT
let popup = document.querySelector(".popup");

const Logout = () => {
  popup.style.display = "flex";
  document.body.style.overflow = "hidden";
};
const Tidak = () => {
  popup.style.display = "";
  document.body.style.overflow = "";
};

// BAGIAN ALERT INPUT
let InputBb = document.getElementById("berat-badan"),
  InputTb = document.getElementById("tinggi-badan"),
  InputUmur = document.getElementById("umur");

const Cek = () => {
  if (InputBb.value == "" && InputTb.value == "") {
    InputBb.classList.add("input-alert");
    InputTb.classList.add("input-alert");
    InputUmur.classList.add("input-alert");
  } else {
    InputBb.classList.remove("input-alert");
    InputTb.classList.remove("input-alert");
    InputUmur.classList.remove("input-alert");
  }
};
