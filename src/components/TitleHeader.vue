<script>
export default {
  props: {
    img: String,
    title: String,
  },
};
</script>
<template>
  <header class="d-flex flex-row justify-content-center align-items-center">
    <img :src="img" class="img-fluid me-3" style="height: 35px" />
    <h1 class="fw-bold">{{ title }}</h1>
  </header>
</template>
<style></style>
