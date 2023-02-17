<template>
  <button
    class="mx-auto bg-primary-light w-40 h-40 flex items-center justify-center rounded-full border-10 hover:-translate-y-2 duration-200"
    :class="returnClass"
    type="button"
  >
    <span
      class="bg-primary-light w-32 h-32 rounded-full flex items-center justify-center shadow-inner"
    >
      <img
        class="block w-16 h-16 object-contain"
        :src="`/images/${returnIcon}`"
        :alt="`Icon ${props.type}`"
      />
    </span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  type?: "scissors" | "paper" | "rock" | "lizard" | "cyan";
}>();

const returnClass = computed(() => {
  switch (props.type) {
    case "rock":
      return "bg-rock shadow-outerRock";
    case "paper":
      return "bg-paper shadow-outerPaper";
    case "scissors":
      return "bg-scissors shadow-outerScissors";
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
