<template>
  <div class="p-12 w-full h-full">
    <div class="max-w-[1366px] mx-auto w-full h-full">
      <div class="max-w-[768px] mx-auto w-full h-full flex flex-col gap-8">
        <header
          class="border-4 border-primary-header rounded-3xl p-5 flex justify-between items-center"
        >
          <div>
            <img src="/images/logo.svg" alt="Logo" />
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
              <button
                class="mx-auto bg-primary-light w-40 h-40 flex items-center justify-center rounded-full border-10 bg-rock shadow-outerRock"
                type="button"
              >
                <span
                  class="bg-primary-light w-32 h-32 rounded-full flex items-center justify-center shadow-inner"
                >
                  <img src="/images/icon-rock.svg" alt="Icon Rock" />
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PageHomepage",
};
</script>
