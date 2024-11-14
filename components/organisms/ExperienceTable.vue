<template>
  <section class="max-w-4xl mx-auto my-24 animate-fadeUp">
    <FnTabs @tab-change="handleTabChange" :opened-tab="openedTab" />

    <div class="relative p-6 border rounded-lg border-gray-50 flex flex-col gap-8">
      <FnExperienceTableItem v-for="(item, index) in openedTabData" :key="index" :item="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { experienceType } from '~/types/base';
import { workExperience, education } from '~/utils/experience';

const openedTab = ref<experienceType>('work');
const handleTabChange = (type: experienceType) => {
  openedTab.value = type;
};

const openedTabData = computed(() => {
  if (openedTab.value === 'work') {
    return workExperience;
  } else {
    return education;
  }
});
</script>
