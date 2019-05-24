import Welcome from "./components/Welcome.vue";

const routes = [
  {
    path: "",
    redirect: "/welcome"
  },
  { 
    path: "/welcome",
    name: "Welcome",
    component: Welcome 
  }
];

export { routes };