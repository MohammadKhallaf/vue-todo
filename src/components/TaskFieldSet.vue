<script>
export default {
  props: {
    isEdit: Boolean,
    currentText: String,
  },
  data() {
    return { itemInputText: "" };
  },
  methods: {
    escapeHandler(e) {
      if (e.key !== "Escape") return false;
      this.$emit("esc", false);
      this.itemInputText = "";
      this.$refs.taskInput.blur();
    },
  },
  mounted() {
    this.itemInputText = this.currentText;
    this.$refs.taskInput.focus();
  },
  emits: ["formSubmit", "esc", "inputChange"],
};
</script>
<template>
  <form
    class="d-flex gap-2 py-3"
    @submit.prevent="$emit('formSubmit', $refs.taskInput.value)"
  >
    <input
      class="form-control border-secondary"
      type="text"
      placeholder="Add a task"
      :value="currentText"
      @input="$emit('inputChange', $event.target.value)"
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
      type="submit"
      v-if="!isEdit"
      class="btn btn-outline-primary bi bi-plus-square-fill"
    ></button>
    <button
      type="submit"
      v-if="isEdit"
      class="btn btn-outline-primary bi bi-pen-fill"
    ></button>
  </form>
</template>
<style></style>
