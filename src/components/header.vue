<template>
  <div class="main">
    <div class="brand" id="home">Blog</div>
    <div
      class="lorem"
    >Vestibulum feugiat ultrices risus sed vestibulum. Nam aliquam fringilla neque.</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Varela+Round&display=swap");

.brand {
  display: flex;
  justify-content: center;
  margin-right: 0px;
}

.main {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: "Playfair Display", serif;
  font-weight: 800;
  background-size: cover;
  font-size: 50px;

  img {
    width: 100%;
    height: 700px;
  }

  .lorem {
    font-weight: 200;
    text-align: center;
    margin-top: 15vh;
  }
}
</style>