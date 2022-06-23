<script>
export default {
  name: "ListItem",
  props: {
    inputRef: HTMLInputElement,
    isEdit: Boolean,

    items: Array,
    item: { id: Number, description: String },
    idx: Number,

    editState: Function,
    updateInputText: Function,
    updateCurrentItem: Function,
    deleteItem: Function,
    updateItem: Function,
    focusOnInput: Function,
  },
  date() {
    return {};
  },
  methods: {
    editBtnHandler() {
      this.editState(true);
      this.updateCurrentItem(this.item);

      this.updateInputText(
        this.items[this.items.findIndex((_) => _.id === this.item.id)]
          .description
      );
      this.focusOnInput();
    },
    delBtnHandler() {
      this.deleteItem(this.item);
    },
  },
};
</script>
<template>
  <li>
    <span class="pe-3 fw-bold">{{ idx + 1 }}</span>
    <span class="me-auto">{{ item.description }}</span>
    <div class="btn-group shadow-sm">
      <!-- edit button -->
      <button
        class="btn bi bi-pen-fill text-success"
        @click="editBtnHandler"
      ></button>
      <!-- delete button -->
      <button
        @click="delBtnHandler"
        class="btn bi bi-trash3-fill text-danger"
      ></button>
    </div>
  </li>
</template>
<style></style>
