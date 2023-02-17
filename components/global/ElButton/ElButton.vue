<template>
  <button
    class="relative z-[2] mx-auto bg-primary-light flex items-center justify-center rounded-full border-10"
    :class="[
      returnClass,
      props.large
        ? 'w-80 h-80'
        : 'md:w-40 md:h-40 hover:-translate-y-2 duration-200',
      props.step === 2 ? 'w-40 h-40' : 'w-32 h-32',
      {
        large: props.large,
        won: props.won,
      },
    ]"
    type="button"
    @click="props.large ? null : gameStore.setPlayer(props.type)"
  >
    <span
      class="bg-primary-light rounded-full flex items-center justify-center"
      :class="[
        props.large
          ? 'w-64 h-64 shadow-innerLarge'
          : 'md:w-32 md:h-32 shadow-inner',
        props.step === 2 ? 'w-32 h-32' : 'w-24 h-24',
      ]"
    >
      <img
        class="block object-contain"
        :class="[props.large ? 'w-28 h-28' : 'w-12 md:w-16 h-12 md:h-16']"
        :src="`/images/${returnIcon}`"
        :alt="`Icon ${props.type}`"
      />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { CardEnum, useGameStore } from "~/store/gameStore";

const props = defineProps<{
  type:
    | CardEnum.scissors
    | CardEnum.paper
    | CardEnum.rock
    | CardEnum.lizard
    | CardEnum.spock;
  large?: boolean;
  won?: boolean;
  step?: 1 | 2;
}>();

const gameStore = useGameStore();

const returnClass = computed(() => {
  const largeClass = props.large ? "Large" : "";
  switch (props.type) {
    case CardEnum.rock:
      return `bg-rock shadow-outerRock${largeClass}`;
    case CardEnum.paper:
      return `bg-paper shadow-outerPaper${largeClass}`;
    case CardEnum.scissors:
      return `bg-scissors shadow-outerScissors${largeClass}`;
    case CardEnum.lizard:
      return `bg-lizard shadow-outerLizard${largeClass}`;
    case CardEnum.spock:
      return `bg-spock shadow-outerSpock${largeClass}`;
    default:
      return "";
  }
});

const returnIcon = computed(() => {
  switch (props.type) {
    case CardEnum.rock:
      return "icon-rock.svg";
    case CardEnum.paper:
      return "icon-paper.svg";
    case CardEnum.scissors:
      return "icon-scissors.svg";
    case CardEnum.lizard:
      return "icon-lizard.svg";
    case CardEnum.spock:
      return "icon-spock.svg";
    default:
      return "";
  }
});
</script>

<style lang="scss" scoped>
button {
  &:after {
    content: "";
    @apply absolute top-0 right-0 bottom-0 left-0 pointer-events-none rounded-full z-[1] shadow-won;
    @apply opacity-0 duration-700;
  }
  &.large {
    &:after {
      @apply shadow-wonLarge;
    }
  }
  &.won {
    &:after {
      @apply opacity-100;
    }
  }
}
</style>
