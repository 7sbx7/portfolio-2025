<template>
  <div class="flex items-start">
    <img class="w-14 h-14 rounded-full mr-6" :src="item.logo" :alt="item.company" />
    <div>
      <time class="text-xs text-gray-400">{{ item.period }}</time>
      <h2 class="font-semibold leading-none">{{ item.company }}</h2>
      <p class="text-sm text-gray-400">{{ item.position }}</p>
      <p class="text-sm">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { experienceItem } from '~/types/base';

defineProps<{
  item: experienceItem;
}>();
</script>
