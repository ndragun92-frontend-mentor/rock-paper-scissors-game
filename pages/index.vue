<template>
  <div class="p-8 md:p-12 w-full h-full">
    <div class="max-w-[1366px] mx-auto w-full h-full">
      <div class="max-w-[768px] mx-auto w-full h-full flex flex-col gap-8">
        <header
          class="border-4 border-primary-header rounded-3xl px-5 py-4 md:p-5 flex justify-between items-center"
        >
          <div>
            <img
              class="block w-28 md:w-auto"
              src="/images/logo.svg"
              alt="Logo"
            />
          </div>
          <div
            class="bg-primary-light flex flex-col items-center justify-center rounded-lg py-2.5 md:py-4 px-6 md:px-14"
          >
            <div
              class="text-primary-score uppercase tracking-widest md:text-lg"
            >
              Score
            </div>
            <div
              class="font-bold text-5xl md:text-7xl text-primary-dark"
              v-text="gameStore.data.score"
            />
          </div>
        </header>
        <main class="flex-1 flex items-center justify-center p-6 md:p-2">
          <div class="relative">
            <img
              class="block"
              src="/images/bg-triangle.svg"
              alt="BG triangle"
            />
            <div class="absolute bottom-0 left-0 right-0 flex items-center">
              <el-button type="rock" />
            </div>
            <div class="absolute -top-[25%] -left-[15%]">
              <el-button type="paper" />
            </div>
            <div class="absolute -top-[25%] -right-[15%]">
              <el-button type="scissors" />
            </div>
          </div>
        </main>
      </div>
    </div>
    <div
      class="fixed bottom-16 md:bottom-8 right-12 z-10 flex items-center justify-center left-8 md:left-[initial]"
    >
      <el-button-rules @click="showModal = true" />
    </div>
  </div>
  <teleport to="body">
    <transition-slide>
      <lazy-el-modal-rules v-if="showModal" @close="showModal = false" />
    </transition-slide>
  </teleport>
  <!--  <pre>-->
  <!--    {{ gameStore.data }}-->
  <!--  </pre>-->
</template>

<script lang="ts">
export default {
  name: "PageHomepage",
};
</script>

<script lang="ts" setup>
import { useGameStore } from "~/store/gameStore";

const showModal = ref(false);

const gameStore = useGameStore();
</script>
