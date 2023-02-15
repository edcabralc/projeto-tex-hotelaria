import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AboutView from "../views/About/AboutView.vue";
import RoomsView from "../views/Rooms/RoomsView.vue";
import BookView from "../views/Book/BookView.vue";
import ContactView from "../views/Contact/ContactView.vue";
import SignView from "../views/Sign/SignView.vue";
import RegisterView from "../views/Register/RegisterView.vue";
import DeluxeView from "../views/Feedback/DeluxeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: AboutView,
  },
  {
    path: "/acomodacoes",
    name: "acomodacoes",
    component: RoomsView,
  },
  {
    path: "/reservar",
    name: "reservar",
    component: BookView,
  },
  {
    path: "/contato",
    name: "contato",
    component: ContactView,
  },
  {
    path: "/acessar",
    name: "acessar",
    component: SignView,
  },
  {
    path: "/cadastrar",
    name: "cadastro",
    component: RegisterView,
  },
  {
    path: "/feedback",
    name: "feedback",
    component: DeluxeView,
  },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
