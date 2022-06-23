<script>
export default {
  props: { items: { id: Number, description: String } },
};
</script>
<template>
  <section>
    <header class="d-flex flex-row justify-content-center align-items-center">
      <img
        src="../assets/thumbs-up.png"
        class="img-fluid me-3"
        style="height: 35px"
      />
      <h1 class="fw-bold">DONE LIST</h1>
    </header>

    <ul class="list-group">
      <li class="list-group-item" v-for="(item, idx) in items" :key="idx">
        {{ item.description }}
      </li>
    </ul>
  </section>
</template>
<style></style>
