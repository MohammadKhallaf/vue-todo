<script>
export default {
  name: "ListItem",
  props: {
    item: { id: Number, description: String },
    idx: Number,
  },
  emits: ["editEvent", "deleteEvent"],
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
    <span class="pe-3 fw-bold">{{ idx + 1 }}</span>
    <span class="me-auto">{{ capitalize(item.description) }}</span>
    <div class="btn-group shadow-sm">
      <!-- edit button -->
      <button
        class="btn bi bi-pen-fill text-success"
        @click="$emit('editEvent', item)"
      ></button>
      <!-- delete button -->
      <button
        @click="$emit('deleteEvent', item)"
        class="btn bi bi-trash3-fill text-danger"
      ></button>
    </div>
  </li>
</template>
<style></style>
