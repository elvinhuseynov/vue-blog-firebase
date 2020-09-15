<template>
  <div class="main-div">
    <!-- navbar component -->
    <div class="main">
      <div class="nav-main josefin-font flex container">
        <!-- social media elements -->
        <div class="social">
          <ul class="flex">
            <li>
              <a href="#">
                <unicon name="facebook-f"></unicon>
              </a>
            </li>
            <li>
              <a href="#">
                <unicon name="instagram"></unicon>
              </a>
            </li>
            <li>
              <a href="#">
                <unicon name="twitter"></unicon>
              </a>
            </li>
            <li>
              <a href="#">
                <unicon name="at"></unicon>
              </a>
            </li>
          </ul>
        </div>

        <!-- nav items -->
        <div class="list-div">
          <ul class="flex list-items">
            <li>
              <a href="#home" v-smooth-scroll="{duration:1000}">Home</a>
            </li>
            <li><a href="#about" v-smooth-scroll="{duration:1000}">About</a></li>
            <li>
              <a href="#social" v-smooth-scroll="{duration:1000}">Contact us</a>
            </li>
          </ul>
        </div>

        <!-- new post router -->
        <div class="post flex">
          <router-link class="color" to="/newCard">
            <span>Create a new post</span>
          </router-link>
        </div>

        <div class="ham-menu">
          <hamComponent />
        </div>

        <div class="responsive-items">
          <div class="brand">Blog</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap");

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

.color {
  color: black;
}

.color:hover{
  border-bottom: 1px solid black;
}

.icon {
  width: 10px;
}

.josefin-font {
  font-family: "Josefin Sans", sans-serif;
}

.flex {
  display: flex;
}

.main-div {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.main {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(212, 212, 212);
}

.nav-main {
  width: 85%;
  height: 45px;
  justify-content: space-between;
  align-items: center;
}

.social {
  width: 8%;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      cursor: pointer;
    }

    a:hover {
      opacity: 0.7;
    }
  }
}

.list-div {
  width: 20%;
  margin-left: 50px;

  .list-items {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;

    li {
      height: 100%;
    }
    li:hover {
      border-bottom: 1px solid black;
      margin-top: -1px;
    }
  }
}

.ham-button,
.responsive-items,
.ham-menu {
  display: none;

  button {
    border: none;
    background-color: white;
    outline: 0;
  }
}

@media only screen and (max-width: 600px) {
  .social,
  .list-div,
  .post {
    display: none;
  }

  .responsive-items {
    margin-left: 10px;
  }

  .ham-button,
  .ham-menu,
  .responsive-items {
    display: block;
  }
}

@media only screen and (max-width: 900px) {
  .social {
    width: 12%;
  }
  .list-div {
    width: 40%;
  }
}
</style>

<script>
import hamComponent from "./ham-component";

export default {
  components: {
    hamComponent,
  },
};
</script>