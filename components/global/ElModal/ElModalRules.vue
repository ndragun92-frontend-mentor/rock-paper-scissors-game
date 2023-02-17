<template>
  <div
    class="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-20 flex items-center justify-center p-10"
  >
    <div
      ref="modalEl"
      class="bg-primary-light w-full max-w-[360px] rounded-lg px-10 py-8 shadow-xl"
    >
      <div class="flex items-center justify-between">
        <h3 class="text-primary-dark uppercase text-3xl font-bold">Rules</h3>
        <button
          type="button"
          class="text-primary-close text-opacity-30 hover:text-red-500 duration-200"
          @click="$emit('close')"
        >
          <lazy-el-icon-close />
        </button>
      </div>
      <div class="mt-10">
        <img class="block" src="/images/image-rules.svg" alt="Image rules" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits(["close"]);

const modalEl = ref(null);

onClickOutside(modalEl, () => emit("close"));
</script>
