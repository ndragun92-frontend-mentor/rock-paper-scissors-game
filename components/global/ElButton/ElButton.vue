<template>
  <button
    class="mx-auto bg-primary-light flex items-center justify-center rounded-full border-10"
    :class="[
      returnClass,
      props.large
        ? 'w-80 h-80'
        : 'w-32 md:w-40 h-32 md:h-40 hover:-translate-y-2 duration-200',
    ]"
    type="button"
    @click="props.large ? null : gameStore.setPlayer(props.type)"
  >
    <span
      class="bg-primary-light rounded-full flex items-center justify-center"
      :class="[
        props.large
          ? 'w-64 h-64 shadow-innerLarge'
          : 'w-24 md:w-32 h-24 md:h-32 shadow-inner',
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
import { useGameStore } from "~/store/gameStore";

const props = defineProps<{
  type: "scissors" | "paper" | "rock" | "lizard" | "cyan";
  large?: boolean;
}>();

const gameStore = useGameStore();

const returnClass = computed(() => {
  switch (props.type) {
    case "rock":
      return `bg-rock shadow-outerRock${props.large ? "Large" : ""}`;
    case "paper":
      return `bg-paper shadow-outerPaper${props.large ? "Large" : ""}`;
    case "scissors":
      return `bg-scissors shadow-outerScissors${props.large ? "Large" : ""}`;
    default:
      return "";
  }
});

const returnIcon = computed(() => {
  switch (props.type) {
    case "rock":
      return "icon-rock.svg";
    case "paper":
      return "icon-paper.svg";
    case "scissors":
      return "icon-scissors.svg";
    default:
      return "";
  }
});
</script>
