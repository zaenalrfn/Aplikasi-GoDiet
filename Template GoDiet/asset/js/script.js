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

// BAGIAN POPUP CEK HALAMAN UTAMA
let popupCek = document.querySelector(".popup-cek");
window.onload = () => {
  setTimeout(function () {
    popupCek.style.display = "flex";
    document.body.style.overflow = "hidden";
  }, 500);
};
const CekHu = () => {
  popupCek.style.display = "";
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

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "023f98117fmsh1c2705b6ac9a25fp11f719jsna2f7cf1eb86c",
//     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//   },
// };

// fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
