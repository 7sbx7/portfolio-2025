<template>
  <div class="flex items-center bg-gray-50 p-2 rounded-lg text-gray-base w-fit">
    <img class="w-6 h-6 mr-2" :src="item.iconUrl" alt="" />
    <span>{{ item.name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { techItem } from '~/types/base';

defineProps<{
  item: techItem;
}>();
</script>
