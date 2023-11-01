<script setup>
defineProps({
  steps: Array
})
</script>

<template>
  <div class="quiz">
    <slot></slot>
    <QuizStep v-for="step in steps" :options="step.options" :name="step.name" :question="step.question" :imageUrl="step.imageUrl"></QuizStep>
  </div>
</template>