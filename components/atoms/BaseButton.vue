<template>
  <a :href="link" :class="{ 'shine': shine }"><slot></slot></a>
</template>

<script setup lang="ts">
defineProps<{
  link: string;
  shine?: boolean;
}>();
</script>

<style scoped lang="scss">

</style>
