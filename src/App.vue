<script>
// setup =>  will execute every time an instance of the component is created.
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./components/ListItem.vue";
import ListItem from "./components/ListItem.vue";
export default {
  data() {
    return {
      items: [
        { id: 0, description: "An item " },
        { id: 1, description: "A second item" },
        { id: 2, description: "A third item" },
        { id: 3, description: "A fourth item" },
        { id: 4, description: "And a fifth one" },
      ],
      itemInputText: "",
      isEdit: false,
      currentItem: { id: Number, description: String },
    };
  },
  methods: {
    focusOnInput() {
      this.$refs.taskInput.focus();
    },
    updateCurrentItem(item) {
      this.currentItem = item;
    },
    updateItem(item) {
      const itemIdx = this.items.findIndex((_) => _.id === item.id);
      console.log(item);
      this.items[itemIdx] = { id: item.id, description: item.description };
      this.isEdit = false;
    },
    deleteItem(item) {
      this.items = this.items.filter((_) => _.id != item.id);
    },
    updateEditState(state) {
      this.isEdit = state;
    },
    updateInputText(text) {
      this.itemInputText = text;
    },
    formSubmit() {
      console.dir(this.currentItem);
      this.isEdit
        ? this.updateItem({
            id: this.currentItem.id,
            description: this.itemInputText,
          })
        : this.items.push({
            id: this.items[this.items.length - 1].id + 1,
            description: this.itemInputText,
          });
      this.itemInputText = "";
      console.log(this.items);
    },
  },
  mounted() {
    this.$refs.taskInput.focus();
  },
  components: { ListItem },
};
</script>

<template>
  <main class="container m-5 p-5 shadow rounded-3 mx-auto">
    <header>
      <h1 class="fw-bold text-center">TO DO LIST</h1>
    </header>
    <section>
      <form class="d-flex gap-2 py-3" @submit.prevent="formSubmit">
        <input
          class="form-control border-secondary"
          type="text"
          placeholder="Add a task"
          v-model="itemInputText"
          required
          minlength="3"
          ref="taskInput"
        />

        <button
          v-if="!isEdit"
          class="btn btn-outline-primary bi bi-plus-square-fill"
        ></button>
        <button
          v-if="isEdit"
          class="btn btn-outline-primary bi bi-pen-fill"
        ></button>
      </form>
    </section>
    <section>
      <ul class="list-group">
        <ListItem
          v-for="(item, idx) in items"
          class="list-group-item d-flex align-items-center"
          :key="item.id"
          :items="items"
          :item="item"
          :idx="idx"
          :isEdit="isEdit"
          :editState="updateEditState"
          :updateInputText="updateInputText"
          :deleteItem="deleteItem"
          :inputRef="this.$refs.taskInput"
          :focusOnInput="focusOnInput"
          :updateItem="updateItem"
          :updateCurrentItem="updateCurrentItem"
        />
      </ul>
    </section>
  </main>
</template>

<style></style>
