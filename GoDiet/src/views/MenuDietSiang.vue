<template>
  <div class="container">
    <div class="header">
      <div class="row justify-content-between mt-5 mb-3">
        <div class="col-2" id="title">
          <RouterLink to="/menuDiet">
            <img src="/img/kembali.png" />
          </RouterLink>
        </div>
        <div class="col-8" id="title">
          <h1 class="titleHU text-center">MENU SIANG</h1>
        </div>
        <div class="col-2" id="title">
          <!-- <img src="/img/Frame 14.png" /> -->
        </div>
      </div>
    </div>

    <!-- bagianalergi -->
    <div class="opsiMenu" v-if="menuAlergi">
      <div class="row justify-content-center gap-4 mb-3 pb-3">
        <div
          class="cardMenu"
          v-for="alergi1 in menuAlergi_1"
          v-bind:key="alergi1.food.foodId"
          v-if="menuAlergi_1.length > 0"
        >
          <div class="d-flex justify-content-center">
            <img :src="alergi1.food.image" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ alergi1.food.label }}</h4>
            <p>Informasi Nutrisi</p>
          </div>
          <div class="row justify-content-center text-center" id="info">
            <div class="col-3">
              <h3>{{ nutrisiAlergi[0].menu_1.calories }}</h3>
              <p>Kalori</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiAlergi[0].menu_1.carbo }}</h3>
              <p>Karbo</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiAlergi[0].menu_1.protein }}</h3>
              <p>Protein</p>
            </div>
            <div class="col-3">
              <h3>1</h3>
              <p>Porsi</p>
            </div>
          </div>
        </div>
        <div v-else>
          <loader />
        </div>
      </div>
      <div class="row justify-content-center gap-4 mb-3 pb-3 border-top pt-4">
        <div
          class="cardMenu"
          v-for="alergi2 in menuAlergi_2"
          v-bind:key="alergi2.food.foodId"
          v-if="menuAlergi_2.length > 0"
        >
          <div class="d-flex justify-content-center">
            <img :src="alergi2.food.image" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ alergi2.food.label }}</h4>
            <p>Informasi Nutrisi</p>
          </div>
          <div class="row justify-content-center text-center" id="info">
            <div class="col-3">
              <h3>{{ nutrisiAlergi[0].menu_2.calories }}</h3>
              <p>Kalori</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiAlergi[0].menu_2.carbo }}</h3>
              <p>Karbo</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiAlergi[0].menu_2.protein }}</h3>
              <p>Protein</p>
            </div>
            <div class="col-3">
              <h3>1</h3>
              <p>Porsi</p>
            </div>
          </div>
        </div>
        <div v-else>
          <loader />
        </div>
      </div>
      <div class="row justify-content-center gap-4 mb-3 pb-3 border-top pt-4">
        <div
          class="cardMenu"
          v-for="alergi_3 in menuAlergi_3"
          v-bind:key="alergi_3.idDrink"
          v-if="menuAlergi_3.length > 0"
        >
          <div class="d-flex justify-content-center">
            <img :src="alergi_3.strDrinkThumb" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ alergi_3.strDrink }}</h4>
            <p>Informasi Nutrisi</p>
          </div>
          <div class="row justify-content-center text-center" id="info">
            <div class="col-3">
              <h3>{{ nutrisiAlergi[0].menu_3.calories }}</h3>
              <p>Kalori</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiAlergi[0].menu_3.carbo }}</h3>
              <p>Karbo</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiAlergi[0].menu_3.protein }}</h3>
              <p>Protein</p>
            </div>
            <div class="col-3">
              <h3>1</h3>
              <p>Porsi</p>
            </div>
          </div>
        </div>
        <div v-else>
          <loader />
        </div>
      </div>
    </div>
    <!-- bagian alergi -->

    <div class="opsiMenu" v-else>
      <div v-if="menuDietSiang_1.length > 0">
        <div class="row justify-content-center gap-4 mb-3 pb-3">
          <div
            class="cardMenu"
            v-for="makanan in menuDietSiang_1"
            v-bind:key="makanan.idMeal"
          >
            <div class="d-flex justify-content-center">
              <img :src="makanan.strMealThumb" />
            </div>
            <div class="lh-sm" id="text">
              <h4 class="mt-2">{{ makanan.strMeal }}</h4>
              <p>Informasi Nutrisi</p>
            </div>
            <div class="row justify-content-center text-center" id="info">
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_1.calories }}</h3>
                <p>Kalori</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_1.carbo }}</h3>
                <p>Karbo</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_1.protein }}</h3>
                <p>Protein</p>
              </div>
              <div class="col-3">
                <h3>1</h3>
                <p>Porsi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center gap-4 mb-3 pb-3 pt-4 border-top">
          <div
            class="cardMenu"
            v-for="makanan_2 in menuDietSiang_2"
            v-bind:key="makanan_2.idMeal"
          >
            <div class="d-flex justify-content-center">
              <img :src="makanan_2.strMealThumb" />
            </div>
            <div class="lh-sm" id="text">
              <h4 class="mt-2">{{ makanan_2.strMeal }}</h4>
              <p>Informasi Nutrisi</p>
            </div>
            <div class="row justify-content-center text-center" id="info">
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_2.calories }}</h3>
                <p>Kalori</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_2.carbo }}</h3>
                <p>Karbo</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_2.protein }}</h3>
                <p>Protein</p>
              </div>
              <div class="col-3">
                <h3>1</h3>
                <p>Porsi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center gap-4 mb-3 pb-3 pt-4 border-top">
          <div
            class="cardMenu"
            v-for="makanan_3 in menuDietSiang_3"
            v-bind:key="makanan_3.food.foodId"
          >
            <div class="d-flex justify-content-center">
              <img :src="makanan_3.food.image" />
            </div>
            <div class="lh-sm" id="text">
              <h4 class="mt-2">{{ makanan_3.food.label }}</h4>
              <p>Informasi Nutrisi</p>
            </div>
            <div class="row justify-content-center text-center" id="info">
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_3.calories }}</h3>
                <p>Kalori</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_3.carbo }}</h3>
                <p>Karbo</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_3.protein }}</h3>
                <p>Protein</p>
              </div>
              <div class="col-3">
                <h3>1</h3>
                <p>Porsi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center gap-4 mb-3 pb-3 pt-4 border-top">
          <div
            class="cardMenu"
            v-for="makanan_4 in menuDietSiang_4"
            v-bind:key="makanan_4.idMeal"
          >
            <div class="d-flex justify-content-center">
              <img :src="makanan_4.strMealThumb" />
            </div>
            <div class="lh-sm" id="text">
              <h4 class="mt-2">{{ makanan_4.strMeal }}</h4>
              <p>Informasi Nutrisi</p>
            </div>
            <div class="row justify-content-center text-center" id="info">
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_4.calories }}</h3>
                <p>Kalori</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_4.carbo }}</h3>
                <p>Karbo</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_4.protein }}</h3>
                <p>Protein</p>
              </div>
              <div class="col-3">
                <h3>1</h3>
                <p>Porsi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center gap-4 mb-3 pb-3 pt-4 border-top">
          <div
            class="cardMenu"
            v-for="makanan_5 in menuDietSiang_5"
            v-bind:key="makanan_5.idMeal"
          >
            <div class="d-flex justify-content-center">
              <img :src="makanan_5.strMealThumb" />
            </div>
            <div class="lh-sm" id="text">
              <h4 class="mt-2">{{ makanan_5.strMeal }}</h4>
              <p>Informasi Nutrisi</p>
            </div>
            <div class="row justify-content-center text-center" id="info">
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_4.calories }}</h3>
                <p>Kalori</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_4.carbo }}</h3>
                <p>Karbo</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_4.protein }}</h3>
                <p>Protein</p>
              </div>
              <div class="col-3">
                <h3>1</h3>
                <p>Porsi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center gap-4 mb-3 pb-3 pt-4 border-top">
          <div
            class="cardMenu"
            v-for="makanan_6 in menuDietSiang_6"
            v-bind:key="makanan_6.food.foodId"
          >
            <div class="d-flex justify-content-center">
              <img :src="makanan_6.food.image" />
            </div>
            <div class="lh-sm" id="text">
              <h4 class="mt-2">{{ makanan_6.food.label }}</h4>
              <p>Informasi Nutrisi</p>
            </div>
            <div class="row justify-content-center text-center" id="info">
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_6.calories }}</h3>
                <p>Kalori</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_6.carbo }}</h3>
                <p>Karbo</p>
              </div>
              <div class="col-3">
                <h3>{{ nutrisiMenu[0].menu_6.protein }}</h3>
                <p>Protein</p>
              </div>
              <div class="col-3">
                <h3>1</h3>
                <p>Porsi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <loader />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import loader from "../components/loaderMenu.vue";
export default {
  components: {
    loader,
  },
  data() {
    return {
      menuAlergi: localStorage.getItem("menu-alergi"),
      // bagian menu alergi
      menuAlergi_1: [],
      menuAlergi_2: [],
      menuAlergi_3: [],
      // bagian menu alergi
      menuDietSiang_1: [],
      menuDietSiang_2: [],
      menuDietSiang_3: [],
      menuDietSiang_4: [],
      menuDietSiang_5: [],
      menuDietSiang_6: [],
      nutrisiMenu: [
        {
          menu_1: {
            carbo: "58",
            calories: "259",
            protein: "5",
          },
          menu_2: {
            carbo: "4",
            calories: "260.7",
            protein: "22.8",
          },
          menu_3: {
            carbo: "35",
            calories: "130",
            protein: "1",
          },
          menu_4: {
            carbo: "43",
            calories: "313.5",
            protein: "14.3",
          },
          menu_5: {
            carbo: "12",
            calories: "303",
            protein: "30",
          },
          menu_6: {
            carbo: "25",
            calories: "95",
            protein: "1",
          },
        },
      ],
      nutrisiAlergi: [
        {
          menu_1: {
            carbo: "25",
            calories: "95",
            protein: "1",
          },
          menu_2: {
            carbo: "26",
            calories: "112",
            protein: "2",
          },
          menu_3: {
            carbo: "36.8",
            calories: "151.9",
            protein: "3.9",
          },
        },
      ],
    };
  },

  mounted() {
    let self = this;
    if (this.menuAlergi) {
      // bagian api alergi
      const alergi_1 = {
        method: "GET",
        url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
        params: { ingr: "apple" },
        headers: {
          "X-RapidAPI-Key":
            "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      };
      const alergi_2 = {
        method: "GET",
        url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
        params: { ingr: "boiled yams" },
        headers: {
          "X-RapidAPI-Key":
            "023f98117fmsh1c2705b6ac9a25fp11f719jsna2f7cf1eb86c",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      };
      const alergi_3 = {
        method: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ginger",
      };
      axios
        .request(alergi_1)
        .then(function (response) {
          const menu = response.data.hints;
          self.menuAlergi_1 = menu.filter((item, index) => index == 0);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(alergi_2)
        .then(function (response) {
          const menu = response.data.hints;
          self.menuAlergi_2 = menu.filter((item, index) => index == 2);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(alergi_3)
        .then(function (response) {
          const menu = response.data.drinks;
          self.menuAlergi_3 = menu.filter((item, index) => index == 0);
        })
        .catch(function (error) {
          console.error(error);
        });
      // bagian api alergi
    } else {
      const menuSiang_1 = {
        method: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/search.php?s=rice",
      };
      const menuSiang_2 = {
        method: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/search.php?s=salad",
      };
      const menuSiang_3 = {
        method: "GET",
        url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
        params: { ingr: " fruit sandwiches" },
        headers: {
          "X-RapidAPI-Key":
            "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      };
      const menuSiang_4 = {
        method: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/search.php?s=soup",
      };
      const menuSiang_5 = {
        method: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/search.php?s=fish",
      };
      const menuSiang_6 = {
        method: "GET",
        url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
        params: { ingr: "apple" },
        headers: {
          "X-RapidAPI-Key":
            "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      };
      axios
        .request(menuSiang_1)
        .then(function (response) {
          const menu = response.data.meals;
          self.menuDietSiang_1 = menu.filter((item, index) => index == 0);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(menuSiang_2)
        .then(function (response) {
          const menu = response.data.meals;
          self.menuDietSiang_2 = menu.filter((item, index) => index == 0);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(menuSiang_3)
        .then(function (response) {
          const menu = response.data.hints;
          self.menuDietSiang_3 = menu.filter((item, index) => index == 4);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(menuSiang_4)
        .then(function (response) {
          const menu = response.data.meals;
          self.menuDietSiang_4 = menu.filter((item, index) => index == 0);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(menuSiang_5)
        .then(function (response) {
          const menu = response.data.meals;
          self.menuDietSiang_5 = menu.filter((item, index) => index == 3);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(menuSiang_6)
        .then(function (response) {
          const menu = response.data.hints;
          self.menuDietSiang_6 = menu.filter((item, index) => index == 0);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  },
};
</script>
