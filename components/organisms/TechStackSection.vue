<template>
  <section class="max-w-4xl  animate-fadeUp flex flex-wrap gap-2 mx-auto my-24">
    <h2 class="block w-full text-3xl mb-4 font-extralight">Tech Stack</h2>
    <FnTechItem v-for="(item, index) in techStack" :key="index" :item="item" />
  </section>
</template>
