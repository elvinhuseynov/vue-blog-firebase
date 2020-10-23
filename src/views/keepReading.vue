<template>
  <div class="container">
    <div class="nav-div">
      <div class="brand">
        <strong><router-link to="/">Home</router-link></strong>
      </div>
    </div>
    <div class="main mt-4" v-if="testArr[0]">
      <div class="img">
        <img :src="testArr[0].imgUrl" :alt="testArr[0].contentHeader" />
      </div>
      <div class="contentHeader">
        <h1>{{ testArr[0].contentHeader }}</h1>
      </div>
      <div class="content">
        <h3>By: {{ testArr[0].author}}</h3>
      </div>
      <div class="content">
        <p>{{ testArr[0].content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      locData: window.location.href.split("/").pop(),
      cardArr: [],
      testArr: [],
    };
  },
  created() {
    axios
      .get("https://vue-blog-a0c51.firebaseio.com/cards.json")
      .then((response) => {
        let data = response.data;
        this.show = true;
        for (let key in data) {
          this.cardArr.push({ ...data[key], id: key });
          this.start();
        }
      })
      .catch((error) => console.error(error));
  },
  methods: {
    start() {
      for (let card in this.cardArr) {
        if (this.cardArr[card].postURLname === this.locData) {
          this.testArr.push(this.cardArr[card]);
          console.log(this.testArr);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap");
.nav-div {
  display: flex;
  justify-content: space-between;
  width: 88%;
  font-family: josefin;
  font-size: 17px;

  div {
    margin-top: 10px;

    a {
      color: black;
    }
    a:hover {
      opacity: 0.7;
    }
  }
}

h2 {
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  font-size: 36px;
}

p {
  font-family: "Lato", sans-serif;
}

.main {
  display: flex;
  flex-direction: column;
  width: 90%;

  h1 {
    margin-top: 20px;
    font-weight: 600;
    font-size: 30px;
  }

  p {
    margin-top: 20px;
  }
  img {
    height: 250px;
    width: auto;
  }
}

@media only screen and (max-width: 600px) {
  img {
    width: 100% !important;
    height: auto;
  }
  div {
    margin-right: 0px;
  }
}
</style>