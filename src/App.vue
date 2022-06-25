<script>
// setup =>  will execute every time an instance of the component is created.
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import ListItem from "./components/ListItem.vue";
import DoneList from "./components/DoneList.vue";
import TitleHeader from "./components/TitleHeader.vue";

import ToDoImg from "./assets/img/24-hours.png";
import TaskFieldSet from "./components/TaskFieldSet.vue";

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
    formSubmit(itemText) {
      this.isEdit
        ? this.updateItem({
            id: this.currentItem.id,
            description: itemText,
          })
        : this.items.push({
            id: this.items[this.items.length - 1].id + 1,
            description: itemText,
          });
      this.itemInputText = "";
    },
    //
    taskDoneHandler(item) {
      const itemIdx = this.items.findIndex((_) => _.id === item.id);
      this.items[itemIdx].done = true;
      console.log(item);
    },
    toggleEdit(mode) {
      this.isEdit = !!mode;
    },
    updateInputText(text) {
      console.dir(text);
      this.itemInputText = text;
    },
  },
  computed: {
    done() {
      return this.items.filter((item) => item.done);
    },
  },
  components: { ListItem, DoneList, TitleHeader, TaskFieldSet },
};
</script>

<template>
  <main class="container m-5 p-5 shadow rounded-3 mx-auto">
    <section>
      <TitleHeader :img="imgs.toDoImg" title="TO DO LIST" />
      <TaskFieldSet
        :is-edit="isEdit"
        :currentText="itemInputText"
        @form-submit="formSubmit"
        @esc="toggleEdit"
        @input-change="updateInputText"
      />
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
