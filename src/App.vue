<template>
  <side-bar></side-bar>

  <router-view></router-view>
</template>

<script lang="ts">
// setup =>  will execute every time an instance of the component is created.
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle'
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from "./components/Layouts/SideBar.vue";

export default {
  computed: {},
  components: { SideBar },
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
