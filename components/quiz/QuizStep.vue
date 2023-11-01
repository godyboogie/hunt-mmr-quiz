<script setup>
defineProps({
  options: [],
  name: String,
  question: String,
  imageUrl: String,
  correctOption: String
})
</script>

<template>
  <div class="step">
    <label v-for="option in options" :key="option.value" :for="option.value" class="radio">
      <input type="radio" :value="option.value" :id="option.value" :name="name" class="radio-input">
      <span class="radio-fakeInput"></span>
      {{ option.name }}
    </label>
  </div>
</template>