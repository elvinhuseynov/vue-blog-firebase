import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import CardBoxRouter from "../views/Card-box-router";
import keepReading from "../views/keepReading";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/newCard",
    name: "newCard",
    component: CardBoxRouter,
  },
  {
    path: "/keepReading/:id",
    name: "keepReading",
    component: keepReading,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
