<template>
  <div class="p-8 md:p-12 w-full h-full">
    <div class="max-w-[1366px] mx-auto w-full h-full">
      <div class="w-full h-full flex flex-col gap-8">
        <header
          class="max-w-[768px] mx-auto w-full border-4 border-primary-header rounded-lg md:rounded-3xl px-2 py-2 pl-4 md:p-5 flex justify-between items-center"
        >
          <client-only>
            <div>
              <img
                v-if="isBonusGame"
                class="block w-12 md:w-auto"
                src="/images/logo-bonus.svg"
                alt="Logo bonus"
              />
              <img
                v-else
                class="block w-28 md:w-auto"
                src="/images/logo.svg"
                alt="Logo"
              />
            </div>
          </client-only>
          <div
            class="bg-primary-light flex flex-col items-center justify-center rounded-lg py-1.5 md:py-4 px-6 md:px-14"
          >
            <div
              class="text-primary-score uppercase tracking-widest text-xs md:text-lg"
            >
              Score
            </div>
            <client-only>
              <div
                class="font-bold text-4xl md:text-7xl text-primary-dark"
                v-text="game.data.score"
              />
            </client-only>
          </div>
        </header>
        <client-only>
          <main
            class="flex-1 flex items-center justify-center p-10 pt-2 md:p-2"
          >
            <transition-slide group appear>
              <div
                v-if="!gameStore.data.data.player"
                key="stage1"
                class="relative"
              >
                <img
                  v-if="isBonusGame"
                  class="block"
                  src="/images/bg-pentagon.svg"
                  alt="BG pentagon"
                />
                <img
                  v-else
                  class="block"
                  src="/images/bg-triangle.svg"
                  alt="BG triangle"
                />
                <div
                  v-if="isBonusGame"
                  class="absolute -bottom-[15%] md:-bottom-[30%] -right-[0%] md:-right-[15%] flex items-center"
                >
                  <el-button :type="CardEnum.rock" />
                </div>
                <div
                  v-else
                  class="absolute bottom-0 left-0 right-0 flex items-center"
                >
                  <el-button :type="CardEnum.rock" />
                </div>
                <div
                  v-if="isBonusGame"
                  class="absolute top-[20%] md:top-[15%] -right-[15%] md:-right-[30%]"
                >
                  <el-button :type="CardEnum.paper" />
                </div>
                <div v-else class="absolute -top-[25%] -left-[15%]">
                  <el-button :type="CardEnum.paper" />
                </div>
                <div
                  v-if="isBonusGame"
                  class="absolute -top-[15%] md:-top-[25%] left-0 right-0 flex items-center"
                >
                  <el-button :type="CardEnum.scissors" />
                </div>
                <div v-else class="absolute -top-[25%] -right-[15%]">
                  <el-button :type="CardEnum.scissors" />
                </div>
                <template v-if="isBonusGame">
                  <div
                    class="absolute -bottom-[15%] md:-bottom-[30%] -left-[0%] md:-left-[15%] flex items-center"
                  >
                    <el-button :type="CardEnum.lizard" />
                  </div>
                  <div
                    class="absolute top-[20%] md:top-[15%] -left-[15%] md:-left-[30%]"
                  >
                    <el-button :type="CardEnum.spock" />
                  </div>
                </template>
              </div>
              <div v-else key="stage2">
                <div class="gap-12 items-center hidden lg:flex">
                  <div>
                    <div
                      class="text-2xl font-bold uppercase tracking-widest text-primary-light text-center"
                    >
                      You picked
                    </div>
                    <div class="mt-12">
                      <lazy-el-button
                        :large="true"
                        :type="gameStore.data.data.player"
                        :won="
                          gameStore.data.data.opponent &&
                          gameStore.data.data.state === GameEnum.won
                        "
                        :step="2"
                      />
                    </div>
                  </div>
                  <transition-slide>
                    <div
                      v-if="gameStore.data.data.opponent"
                      class="relative whitespace-nowrap"
                    >
                      <div
                        class="relative top-0 left-0 bottom-0 right-0 text-center"
                      >
                        <h2
                          class="text-6xl uppercase font-bold text-primary-light text-shadow"
                        >
                          <template
                            v-if="gameStore.data.data.state === GameEnum.draw"
                          >
                            Draw
                          </template>
                          <template
                            v-else-if="
                              gameStore.data.data.state === GameEnum.won
                            "
                          >
                            You win
                          </template>
                          <template v-else> You lose </template>
                        </h2>
                        <transition-scale>
                          <button
                            v-if="gameStore.data.data.finished"
                            class="mt-6 bg-primary-light text-lg py-2.5 w-full text-primary-dark hover:text-red-500 tracking-widest uppercase rounded-lg shadow-lg"
                            type="button"
                            @click="playAgain"
                          >
                            Play again
                          </button>
                        </transition-scale>
                      </div>
                    </div>
                  </transition-slide>
                  <div>
                    <div
                      class="text-2xl font-bold uppercase tracking-widest text-primary-light text-center"
                    >
                      <span
                        v-text="
                          timer && !gameStore.data.data.opponent
                            ? 'The house will pick in'
                            : 'The house picked'
                        "
                      />
                    </div>
                    <div class="mt-12">
                      <lazy-el-button
                        v-if="gameStore.data.data.opponent"
                        :large="true"
                        :type="gameStore.data.data.opponent"
                        :won="
                          gameStore.data.data.opponent &&
                          gameStore.data.data.state === GameEnum.lost
                        "
                        :step="2"
                      />
                      <lazy-el-button-placeholder
                        v-else
                        :large="true"
                        :step="2"
                      >
                        <div
                          v-if="timer"
                          class="text-lg text-primary-light text-center"
                        >
                          <div class="font-bold">
                            {{ timer }}
                          </div>
                          <div class="text-primary-light">
                            {{ pluralize(timer, "second") }}
                          </div>
                        </div>
                      </lazy-el-button-placeholder>
                    </div>
                  </div>
                </div>
                <div class="lg:hidden">
                  <div class="flex gap-12 items-center pointer-events-none">
                    <div
                      :class="{
                        'relative z-10':
                          gameStore.data.data.opponent &&
                          gameStore.data.data.state === GameEnum.lost,
                      }"
                    >
                      <div class="mb-8">
                        <lazy-el-button
                          :type="gameStore.data.data.player"
                          :won="
                            gameStore.data.data.opponent &&
                            gameStore.data.data.state === GameEnum.won
                          "
                          :step="2"
                        />
                      </div>
                      <div
                        class="font-bold uppercase tracking-widest text-primary-light text-center whitespace-nowrap"
                      >
                        You picked
                      </div>
                    </div>
                    <div>
                      <div class="mb-8">
                        <lazy-el-button
                          v-if="gameStore.data.data.opponent"
                          :type="gameStore.data.data.opponent"
                          :won="
                            gameStore.data.data.opponent &&
                            gameStore.data.data.state === GameEnum.lost
                          "
                          :step="2"
                        />
                        <lazy-el-button-placeholder v-else :step="2">
                          <div
                            v-if="timer"
                            class="text-sm text-primary-light text-center"
                          >
                            <div class="font-bold">
                              {{ timer }}
                            </div>
                            <div class="text-primary-light">
                              {{ pluralize(timer, "second") }}
                            </div>
                          </div>
                        </lazy-el-button-placeholder>
                      </div>
                      <div
                        class="font-bold uppercase tracking-widest text-primary-light text-center"
                      >
                        <span
                          v-text="
                            timer && !gameStore.data.data.opponent
                              ? 'The house picking'
                              : 'The house picked'
                          "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="max-w-[280px] w-full mx-auto mt-20">
                    <div
                      class="relative whitespace-nowrap duration-700"
                      :class="
                        gameStore.data.data.opponent
                          ? 'opacity-100'
                          : 'opacity-0'
                      "
                    >
                      <div
                        class="relative top-0 left-0 bottom-0 right-0 text-center"
                      >
                        <h2
                          class="text-6xl uppercase font-bold text-primary-light text-shadow"
                        >
                          <template
                            v-if="gameStore.data.data.state === GameEnum.draw"
                          >
                            Draw
                          </template>
                          <template
                            v-else-if="
                              gameStore.data.data.state === GameEnum.won
                            "
                          >
                            You win
                          </template>
                          <template v-else> You lose </template>
                        </h2>
                        <button
                          class="mt-6 bg-primary-light text-lg py-2.5 w-full text-primary-dark hover:text-red-500 tracking-widest uppercase rounded-lg shadow-lg duration-700"
                          :class="
                            gameStore.data.data.finished
                              ? 'opacity-100'
                              : 'opacity-0'
                          "
                          type="button"
                          @click="playAgain"
                        >
                          Play again
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition-slide>
          </main>
        </client-only>
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
</template>

<script lang="ts">
export default {
  name: "PageHomepage",
};
</script>

<script lang="ts" setup>
import { CardEnum, GameEnum, useGameStore } from "@/store/gameStore";

const showModal = ref(false);
const interval = ref<any>(null);
const timer = ref<any>(3);

const gameStore = useGameStore();
const { game, botPlay, pluralize, playAgain, isBonusGame } = useGame();

watch(
  () => gameStore.data.data.player,
  (type) => {
    if (type) {
      interval.value = setInterval(() => {
        if (timer.value === 0) {
          clearInterval(interval.value);
          timer.value = 3;
        } else if (timer.value === 1) {
          botPlay();
          timer.value--;
        } else {
          timer.value--;
        }
      }, 1000);
    }
  }
);
</script>
