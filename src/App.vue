<template>
  <MainPage />
</template>

<script>
// setup =>  will execute every time an instance of the component is created.
import MainPage from "./views/MainPage.vue";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
 
  computed: {
   
  },
  components: {  MainPage },
};
</script>

<style>
main {
  transition: all 1s ease-in-out;
}
select {
  width: fit-content !important;
}
</style>
