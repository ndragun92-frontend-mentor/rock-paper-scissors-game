<template>
  <div
    class="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-20 flex items-center justify-center md:p-10"
  >
    <div
      ref="modalEl"
      class="bg-primary-light w-full md:max-w-[360px] md:rounded-lg px-10 py-14 md:py-8 shadow-xl h-screen md:h-auto flex flex-col"
    >
      <div class="flex items-center justify-between">
        <h3 class="text-primary-dark uppercase text-3xl font-bold mx-auto">
          Rules
        </h3>
        <button
          type="button"
          class="text-primary-close text-opacity-30 hover:text-red-500 duration-200 hidden md:block"
          @click="$emit('close')"
        >
          <lazy-el-icon-close />
        </button>
      </div>
      <div class="mt-10 flex-1 flex items-center justify-center">
        <img
          v-if="game.data.score >= 5"
          class="block mx-auto"
          src="/images/image-rules-bonus.svg"
          alt="Image rules - bonus"
        />
        <img
          v-else
          class="block mx-auto"
          src="/images/image-rules.svg"
          alt="Image rules"
        />
      </div>
      <div class="text-center md:hidden">
        <button
          type="button"
          class="text-primary-close text-opacity-30 hover:text-red-500 duration-200"
          @click="$emit('close')"
        >
          <lazy-el-icon-close />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
const { game } = useGame();

const emit = defineEmits(["close"]);

const modalEl = ref(null);

onClickOutside(modalEl, () => emit("close"));
</script>
