<template>
  <div>
    <navComponent/>
    <br />
    <headerComp/>
    <br />
    <cards/>
    <br />
    <About/>
    <br />
    <footerComp/>
  </div>
</template>

<script>
import navComponent from "../components/NavComponent";
import headerComp from "../components/header";
import cards from "../components/cards";
import About from "../components/About";
import footerComp from "../components/Footer";

export default {
    name: "Home",
  components: {
    navComponent,
    headerComp,
    cards,
    About,
    footerComp
  },
};
</script>