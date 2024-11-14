<template>
  <div class="flex justify-center md:justify-start gap-8 mt-6 md:mt-4">
    <FnIconButton v-for="(item, index) in linksSet" :key="index" :item="item" class="animate-fadeUp" :style="{ animationDelay: `${index * 75}ms` }"/>
  </div>
</template>

<script setup lang="ts">
import type { LinkIcon } from '~/types/base';

const linksSet = ref<Array<LinkIcon>>([
  { icon: ['fab', 'linkedin'], link: 'https://www.linkedin.com/in/sebastian-k%C5%82ad%C5%BA-bb7506216/' },
  { icon: ['fab', 'github'], link: 'https://github.com/7sbx7' },
  { icon: ['far', 'file-lines'], link: '/pdf/resume.pdf' },
]);
</script>
