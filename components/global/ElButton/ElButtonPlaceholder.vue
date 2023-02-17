<template>
  <div
    class="mx-auto bg-primary-light flex items-center justify-center rounded-full border-10"
    :class="[
      returnClass,
      props.large ? 'w-80 h-80' : 'md:w-40 md:h-40',
      props.step === 2 ? 'w-40 h-40' : 'w-32 h-32',
    ]"
  >
    <span
      class="bg-black bg-opacity-20 rounded-full flex items-center justify-center"
      :class="[
        props.large ? 'w-64 h-64' : 'md:w-32 md:h-32',
        props.step === 2 ? 'w-32 h-32' : 'w-24 h-24',
      ]"
    >
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  large?: boolean;
  step?: 1 | 2;
}>();

const returnClass = computed(() => {
  return `bg-transparent shadow-outerPlaceholder${props.large ? "Large" : ""}`;
});
</script>
