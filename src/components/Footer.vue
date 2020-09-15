<template>
  <div class="main">
    <div class="social" id="social">
      <ul class="flex social">
        <li>
          <a href="#" class="color">
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

    <div class="copyright">
      Created by Elvin Huseynov
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.main {
  width: 100%;
  height: 60px;
  background-color: rgb(131, 131, 131);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .social {
    display: flex;
    flex-direction: row;

    ul {
      list-style: none;

      li {
        margin-left: 5px;
        margin-right: 10px;
      }

      li:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>

<script>
export default {};
</script>