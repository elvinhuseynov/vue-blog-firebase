<template>
  <div class="container main flex">
    <div class="latest">Latest updates</div>
    <hr />
    <div class="card-div flex main">
      <!-- Post cards -->
      <div class="card-box flex" v-for="(card, index) in cardArr" :key="index">
        <!-- Image -->
        <div class="image">
          <img :src="card.imgUrl" alt />
        </div>

        <!-- Header -->
        <div class="header">{{ card.contentHeader }}</div>

        <!-- Publisher -->
        <div v-if="show" class="author">Posted by {{ card.author }}</div>

        <!-- Date -->
        <div v-if="show" class="author">Posted on {{ card.date }}</div>

        <!-- Content Preview -->
        <div v-if="show" class="preview">{{ card.contentSmall }}....</div>

        <div class="button-div">
          <router-link
            :to="{name: 'keepReading' , params: {id: card.postURLname} }"
          >
            <button class="button" v-if="show">Read this post</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show: false,
      cardArr: [],
    };
  },
  created() {
    axios
      .get("https://blog-with-vue-f17e7.firebaseio.com/cards.json")
      .then((response) => {
        let data = response.data;
        this.show = true;
        for (let key in data) {
          this.cardArr.unshift({ ...data[key], id: key });
        }
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap");

.flex {
  display: flex;
}

hr {
  border: 0;
  display: block;
  width: 20%;
  background-color: #be9656;
  height: 1px;
}

.main {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  .latest {
    color: #be9656;
  }
}

img {
  width: 100%;
  height: 240px;
}

.card-box {
  margin-top: 20px;
  width: 40%;
  flex-direction: column;
  font-family: "Lato", sans-serif;

  .header {
    margin-top: 13px;
    text-align: center;
    font-size: 20px;
  }

  .author {
    text-align: center;
    color: gray;
    margin-top: 6px;
  }

  .preview,
  .button-div {
    margin-top: 14px;
    text-align: center;
  }

  .button {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  .button:hover {
    background-color: black;
    color: white;
  }
}

.card-div {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
  .card-box {
    width: 100%;
  }
}
</style>