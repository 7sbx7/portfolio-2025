<template>
  <FnBaseButton
    :link="item.link"
    class="hover:scale-105 transition w-10 h-10 md:w-14 md:h-14 border border-gray-50 rounded-full flex justify-center items-center"
    shine
  >
    <font-awesome class="text-xl" :icon="item.icon" />
  </FnBaseButton>
</template>

<script setup lang="ts">
import type { LinkIcon } from '~/types/base';

defineProps<{
  item: LinkIcon;
}>();
</script>
