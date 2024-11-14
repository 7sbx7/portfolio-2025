<template>
  <div class="p-[1px] mb-2 rounded-lg bg-gray-base flex">
    <div @click="handleTabChange('work')" :class="{ active: openedTab === 'work' }" class="p-1 w-1/2 text-center cursor-pointer rounded-lg">
      Work
    </div>
    <div
      @click="handleTabChange('education')"
      :class="{ active: openedTab === 'education' }"
      class="p-1 w-1/2 text-center cursor-pointer rounded-lg"
    >
      Education
    </div>
  </div>
</template>

<script setup lang="ts">
import type { experienceType } from '~/types/base';

defineProps<{
  openedTab: experienceType;
}>();

const emit = defineEmits(['tabChange']);

const handleTabChange = (type: experienceType) => {
  emit('tabChange', type);
};
</script>

<style scoped lang="scss">
.active {
  @apply text-gray-base bg-gray-50;
}
</style>
