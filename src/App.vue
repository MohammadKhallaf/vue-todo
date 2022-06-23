<script>
// setup =>  will execute every time an instance of the component is created.
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import ListItem from "./components/ListItem.vue";
import DoneList from "./components/DoneList.vue";
import TitleHeader from "./components/TitleHeader.vue";

import ToDoImg from "./assets/img/24-hours.png";

export default {
  data() {
    return {
      items: [
        { id: 0, description: "An item ", done: false },
        { id: 1, description: "A second item", done: true },
        { id: 2, description: "A third item", done: false },
        { id: 3, description: "A fourth item", done: true },
        { id: 4, description: "And a fifth one", done: false },
      ],
      imgs: {
        toDoImg: ToDoImg,
      },
      itemInputText: "",
      isEdit: false,
      currentItem: { id: Number, description: String },
    };
  },
  methods: {
    editBtnHandler(item) {
      this.isEdit = true;
      this.currentItem = item;
      this.itemInputText =
        this.items[this.items.findIndex((_) => _.id === item.id)].description;
      this.$refs.taskInput.focus();
    },
    delBtnHadler(item) {
      this.items = this.items.filter((_) => _.id != item.id);
    },
    //
    updateItem(item) {
      const itemIdx = this.items.findIndex((_) => _.id === item.id);
      this.items[itemIdx] = { id: item.id, description: item.description };
      this.isEdit = false;
    },
    //
    formSubmit() {
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
    },
    //
    taskDoneHandler(item) {
      const itemIdx = this.items.findIndex((_) => _.id === item.id);
      this.items[itemIdx].done = true;
    },
    //
    escapeHandler(e) {
      if (e.key !== "Escape") return false;
      this.isEdit = false;
      this.itemInputText = "";
    },
  },
  mounted() {
    this.$refs.taskInput.focus();
  },
  computed: {
    done() {
      return this.items.filter((item) => item.done);
    },
  },
  components: { ListItem, DoneList, TitleHeader },
};
</script>

<template>
  <main class="container m-5 p-5 shadow rounded-3 mx-auto">
    <section>
      <TitleHeader :img="imgs.toDoImg" title="TO DO LIST" />
      <form class="d-flex gap-2 py-3" @submit.prevent="formSubmit">
        <input
          class="form-control border-secondary"
          type="text"
          placeholder="Add a task"
          v-model="itemInputText"
          required
          minlength="3"
          ref="taskInput"
          @keydown="escapeHandler"
        />
        <select class="form-select border-secondary">
          <option>G1</option>
          <option>G2</option>
          <option>G3</option>
        </select>
        <div class="vr"></div>
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
          :key="item.id"
          :item="item"
          :idx="idx"
          @done="taskDoneHandler"
          @edit="editBtnHandler"
          @delete="delBtnHadler"
        />
      </ul>
    </section>
    <hr />
    <DoneList :items="done" />
  </main>
</template>

<style>
main {
  transition: all 1s ease-in-out;
}
select {
  width: fit-content !important;
}
</style>
