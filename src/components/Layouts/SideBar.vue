<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {},
});
</script>
<template>
  <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#staticBackdrop"
    aria-controls="staticBackdrop"
  >
    Toggle static offcanvas
  </button>

  <div
    class="offcanvas offcanvas-start"
    data-bs-backdrop="true"
    tabindex="-1"
    id="staticBackdrop"
    aria-labelledby="staticBackdropLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Task Manager App</h5>
      <button
        type="button"
        class="btn-close position-relative"
        style="right: -20%"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>I will not close if you click outside of me.</div>
    </div>
  </div>
</template>
<style lang="scss">
.offcanvas {
  --bs-offcanvas-width: fit-content;
  visibility: visible;
}
</style>
