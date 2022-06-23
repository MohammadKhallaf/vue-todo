<script>
import TitleHeader from "../components/TitleHeader.vue";
import DoneImg from "../assets/img/thumbs-up.png";
export default {
  props: { items: { id: Number, description: String } },
  data() {
    return {
      imgs: {
        doneImg: DoneImg,
      },
    };
  },
  components: { TitleHeader },
};
</script>
<template>
  <section>
    <TitleHeader :img="imgs.doneImg" title="TO DO LIST" />
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, idx) in items" :key="idx">
        {{ item.description }}
      </li>
    </ul>
  </section>
</template>
<style></style>
