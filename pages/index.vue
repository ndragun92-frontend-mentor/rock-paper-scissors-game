<template>
  <div class="p-12 w-full h-full">
    <div class="max-w-[1366px] mx-auto w-full h-full">
      <div class="max-w-[768px] mx-auto w-full h-full flex flex-col gap-8">
        <header
          class="border-4 border-primary-header rounded-3xl p-5 flex justify-between items-center"
        >
          <div>
            <img class="block" src="/images/logo.svg" alt="Logo" />
          </div>
          <div
            class="bg-primary-light flex flex-col items-center justify-center rounded-lg py-4 px-14"
          >
            <div class="text-primary-score uppercase tracking-widest text-lg">
              Score
            </div>
            <div class="font-bold text-7xl text-primary-dark">12</div>
          </div>
        </header>
        <main class="flex-1 flex items-center justify-center">
          <div class="relative">
            <img src="/images/bg-triangle.svg" alt="BG triangle" />
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
    <div class="fixed bottom-8 right-12 z-10">
      <el-button-rules @click="showModal = true" />
    </div>
  </div>
  <teleport to="body">
    <transition-slide>
      <lazy-el-modal-rules v-if="showModal" @close="showModal = false" />
    </transition-slide>
  </teleport>
</template>

<script lang="ts">
export default {
  name: "PageHomepage",
};
</script>

<script lang="ts" setup>
const showModal = ref(false);
</script>
