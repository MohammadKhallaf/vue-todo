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
      <ListItem
        :list="unDone"
        @done="taskDoneHandler"
        @edit="editBtnHandler"
        @delete="delBtnHadler"
      />
    </section>
    <hr />
    <DoneList :items="done" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ListItem from "@/components/ListItem.vue";
import DoneList from "@/components/DoneList.vue";
import TitleHeader from "@/components/TitleHeader.vue";
import TaskFieldSet from "@/components/TaskFieldSet.vue";

import ToDoImg from "@/assets/img/24-hours.png";
import Task from "@/models/task";

const item_1 = new Task({
  title: "Some title 1 ",
  description: "An item ",
  done: false,
  project: "Project 1",
  state: 1,
});
const item_2 = new Task({
  title: "Some title 2 ",
  description: "A second item",
  done: true,
  project: "Project 2",
  state: 2,
});
const item_3 = new Task({
  title: "Some title 3 ",
  description: "A third item",
  done: false,
  project: "Project 3",
  state: 3,
});
const item_4 = new Task({
  title: "Some title 4",
  description: "A fourth item",
  done: true,
  project: "Project 1",
  state: 1,
});
const item_5 = new Task({
  title: "Some title 5",
  description: "And a fifth one",
  done: false,
  project: "Project 3",
  state: 3,
});
interface Item {
  id: number;
  description: string;
}
interface TaskType {
  id: number;
  title: string;
  description: string;
  done: boolean;
  project: string;
  state: number;
}
export default defineComponent({
  data: () => {
    return {
      items: [...Task.all] as Array<TaskType>,
      imgs: {
        toDoImg: ToDoImg,
      },
      itemInputText: "",
      isEdit: false,
      currentItem: {} as Item,
    };
  },

  methods: {
    updateItemsList() {
      this.unDone = [...Task.all];
    },
    editBtnHandler(item: Item) {
      this.isEdit = true;
      this.currentItem = item;
      this.itemInputText =
        this.items[this.items.findIndex((_) => _.id === item.id)].description;
    },
    delBtnHadler(item: Item) {
      Task.remove(item.id);
      this.updateItemsList();
    },

    updateItem(item: Item) {
      Task.get(item.id).update(item);
      this.isEdit = false;
      this.updateItemsList();
    },
    formSubmit(itemText: string) {
      this.isEdit
        ? this.updateItem({
            id: this.currentItem.id,
            description: itemText,
          })
        : new Task({ description: itemText });
      this.itemInputText = "";
      this.updateItemsList();
    },
    taskDoneHandler(item: Item) {
      Task.get(item.id).makeDone();
      this.updateItemsList();
    },
    toggleEdit(mode: boolean) {
      this.isEdit = !!mode;
    },
    updateInputText(text: string) {
      this.itemInputText = text;
    },
  },
  computed: {
    done() {
      return this.items.filter((item) => item.done);
    },
    unDone: {
      get() {
        return this.items.filter((item) => !item.done);
      },
      set(list: Array<TaskType>) {
        console.log(this.items);
        console.log(list);
        this.items = list;
      },
    },
  },
  components: { ListItem, DoneList, TitleHeader, TaskFieldSet },
});
</script>
<style lang="scss">
body {
  main {
    // background-color: red;
  }
}
</style>
