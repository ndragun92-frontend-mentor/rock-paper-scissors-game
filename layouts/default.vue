<template>
  <slot />
  <footer
    class="text-primary-light text-sm text-center md:text-left opacity-75 hover:opacity-100"
  >
    <div class="p-3">
      Challenge by
      <a
        class="text-blue-500 hover:underline"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        >Frontend Mentor</a
      >
      & Coded by
      <a
        class="text-blue-500 hover:underline"
        href="https://ndragun92.github.io/portfolio/"
        target="_blank"
        >Nemanja Dragun</a
      >
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "LayoutDefault",
};
</script>
