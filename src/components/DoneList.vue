<script>
export default {
  props: { items: { id: Number, description: String } },
};
</script>
<template>
  <section>some text</section>
  <ul>
    <li v-for="(item, idx) in items" :key="idx">{{ item.description }}</li>
  </ul>
</template>
<style></style>
