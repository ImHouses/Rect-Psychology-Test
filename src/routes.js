import ExerciseMenu from "./components/ExerciseMenu.vue";
import Instructions from "./components/Instructions.vue";
import PersonalDataForm from "./components/PersonalDataForm.vue";
import ExerciseExample from "./components/ExerciseExample.vue";
import Test from "./components/Test.vue";
import Wait from "./components/Wait.vue";
import Finish from "./components/Finish.vue";

const routes = [
  {
    path: "",
    redirect: "/instructionsText"
  },
  { 
    path: "/chooseExercise",
    name: "ExerciseChoose",
    component: ExerciseMenu
  },
  {
    path: "/instructionsText",
    name: "Instructions",
    component: Instructions
  },
  {
    path: "/form",
    name: "PersonalDataForm",
    component: PersonalDataForm
  },
  {
    path: "/exerciseExample",
    name: "ExerciseExample",
    component: ExerciseExample
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/wait",
    name: "Wait",
    component: Wait
  },
  {
    path: "/finish",
    name: "Finish",
    component: Finish
  }
];

export { routes };