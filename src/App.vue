<script>
// setup =>  will execute every time an instance of the component is created.
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
      newItem: "",
      isEdit: false,
      currentItem: { id: Number, description: String },
    };
  },
  methods: {
    editListItem(item) {
      this.currentItem.id = item.id;
      this.currentItem.description = item.description;
    },
    updateItem(item) {
      const itemIdx = this.items.findIndex((_) => _.id === item.id);
      this.items[itemIdx] = { id: item.id, description: item.description };
    },
  },
};
</script>

<template>
  <main class="container m-5 p-5 shadow rounded-3 mx-auto">
    <header>
      <h1 class="fw-bold text-center">TO DO LIST</h1>
    </header>
    <section>
      <form
        class="d-flex gap-2 py-3"
        @submit.prevent="
          isEdit
            ? updateItem({ id: currentItem.id, description: newItem })
            : items.push({
                id: items[items.length - 1].id + 1,
                description: newItem,
              });
          newItem = '';
        "
      >
        <input
          class="form-control border-secondary"
          type="text"
          placeholder="Add a task"
          v-model="newItem"
          required
          minlength="3"
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
        <li
          v-for="(item, idx) in items"
          class="list-group-item d-flex align-items-center"
          :key="item.id"
        >
          <span class="pe-3 fw-bold">{{ idx + 1 }}</span>
          <span class="me-auto">{{ item.description }}</span>
          <div class="btn-group shadow-sm">
            <!-- edit button -->
            <button
              class="btn bi bi-pen-fill text-success"
              @click="
                isEdit = true;
                currentItem = item;
                newItem =
                  items[items.findIndex((_) => _.id === item.id)].description;
              "
            ></button>
            <!-- delete button -->
            <button
              @click="items = items.filter((_) => _.id != item.id)"
              class="btn bi bi-trash3-fill text-danger"
            ></button>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<style></style>
