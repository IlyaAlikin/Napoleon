<template>
  <div class="biography__slide">
    <img :src="props.path" />
    <p class="descripton">{{ path.descripton }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  path: String,
  descripton: String,
});
</script>
<style scoped>
.biography__slide {
  max-width: 100%;
  background-color: var(--white-color);
  border-radius: 20px;
  padding: 10px;
}

.biography__slide img {
  border-radius: 20px;
}
</style>
