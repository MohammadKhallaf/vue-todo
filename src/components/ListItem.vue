<template>
  <ul class="list-group">
    <template v-for="(item, idx) in list" :key="item.id">
      <li
        class="list-group-item align-items-center"
        :id="`task-${item.id + 1}`"
        :class="{ 'd-flex': !item.done }"
        v-show="!item.done"
      >
        <button
          class="btn bi bi-check2-square me-3"
          @click="$emit('done', item)"
        ></button>
        <span class="me-3 fw-bold">{{ idx + 1 }}</span>
        <span class="me-auto">{{ capitalize(item.description) }}</span>
        <div class="btn-group shadow-sm">
          <!-- edit button -->
          <button
            class="btn bi bi-pen-fill text-success"
            text="edit"
            @click="$emit('edit', item)"
          ></button>
          <!-- delete button -->
          <button
            type="button"
            @click="$emit('delete', item)"
            text="delete"
            class="btn bi bi-trash3-fill text-danger"
          ></button>
        </div>
      </li>
    </template>
  </ul>
</template>
<script>
export default {
  name: "ListItem",
  props: {
    list: Array,
  },
  emits: ["edit", "delete", "done"],
  computed: {
    capitalize() {
      return (value) => {
        if (!value) return "";
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      };
    },
  },
  beforeUpdate() {
    console.log("List Item Before Updated");
  },
  updated() {
    console.log("List Item Updated");
  },
  created() {
    console.log("List Item Created");
  },
};
</script>

<style scoped>
button::before {
  transition: all 250ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
button:hover::before {
  transform: scale(1.2);
}
button[text]::after {
  margin-inline: 3px;
  max-width: 0;
  overflow: hidden;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  content: attr(text);
  font-weight: bolder;
  font-size: 0.5em;
  transition: all 250ms ease-in-out;
}
button:hover::after {
  max-width: 4rem;
  /* outline: 1px solid; */
}
button:hover.bi-check2-square {
  color: rgb(var(--bs-success-rgb));
  font-weight: bold !important;
}
</style>
