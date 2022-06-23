<script>
export default {
  name: "ListItem",
  props: {
    item: { id: Number, description: String },
    idx: Number,
  },
  emits: ["edit", "delete","done"],
  computed: {
    capitalize() {
      return (value) => {
        if (!value) return "";
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      };
    },
  },
};
</script>
<template>
  <li
    class="list-group-item d-flex align-items-center"
    :id="`task-${item.id + 1}`"
  >
    <button
      class="btn bi bi-check2-square me-3"
      @click="$emit('done', item)"
    ></button>
    <span class="pe-3 fw-bold">{{ idx + 1 }}</span>
    <span class="me-auto">{{ capitalize(item.description) }}</span>
    <div class="btn-group shadow-sm">
      <!-- edit button -->
      <button
        class="btn bi bi-pen-fill text-success"
        @click="$emit('edit', item)"
      ></button>
      <!-- delete button -->
      <button
        @click="$emit('delete', item)"
        class="btn bi bi-trash3-fill text-danger"
      ></button>
    </div>
  </li>
</template>
<style scoped>
button:hover::before {
  transform: scale(1.2);
  transition: all 250ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
button:hover.bi-check2-square {
  color: rgb(var(--bs-success-rgb));
  font-weight: bold !important;
}
</style>
