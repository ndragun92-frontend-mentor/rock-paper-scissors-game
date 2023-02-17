<template>
  <div
    class="mx-auto bg-primary-light flex items-center justify-center rounded-full border-10"
    :class="[
      returnClass,
      props.large ? 'w-80 h-80' : 'w-32 md:w-40 h-32 md:h-40',
    ]"
  >
    <span
      class="bg-black bg-opacity-20 rounded-full flex items-center justify-center"
      :class="[props.large ? 'w-64 h-64' : 'w-24 md:w-32 h-24 md:h-32']"
    >
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  large?: boolean;
}>();

const returnClass = computed(() => {
  return `bg-transparent shadow-outerPlaceholder${props.large ? "Large" : ""}`;
});
</script>
