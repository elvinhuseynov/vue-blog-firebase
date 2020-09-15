<template>
  <div class="main" id="about">
    <div class="about">
      <h2>About</h2>
    </div>
    <div class="p">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam magni sed?</p>
    </div>
    <div class="cards">
      <div class="card-div">
        <img src="../assets/nature.jpg" alt />
        <h4>Nature</h4>
        <p>lorem ipsum dolor sit amet</p>
      </div>
      <div class="card-div">
        <img src="../assets/traditions.jpg" alt />
        <h4>Traditions</h4>
        <p>lorem ipsum dolor sit amet</p>
      </div>
      <div class="card-div">
        <img src="../assets/culture.jpg" alt />
        <h4>Culture</h4>
        <p>lorem ipsum dolor sit amet</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  .about {
    margin-bottom: 20px;
    border-bottom: 1px solid black;
  }

  .p {
    width: 100%;
    text-align: center;
  }

  .cards {
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .card-div {
      width: 30%;
      display: flex;
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }
  }
}

@media only screen and (max-width: 900px) {
 .card-div {
    width: 45% !important;
  }
}
@media only screen and (max-width: 500px) {
  .card-div {
    width: 100% !important;
  }
}
</style>