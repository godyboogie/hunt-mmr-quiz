<script setup>
const props = defineProps({
  steps: Array,
  results: Array,
  randomResults: {
    type: Boolean,
    default: false
  }
})

const selectedStepIndex = ref(-1)
const selectedStep = ref(props.steps[selectedStepIndex.value])
const totalQuestions = ref(props.steps.length)
const score = ref(0)
const correctResult = ref(null)

const handleNext = (isRight = false) => {
  if (isRight) {
    score.value += 1
  }
  
  if (selectedStepIndex.value === totalQuestions.value - 1) {
    getResultValue()
    nextStep(-2, true)
  } else if (selectedStepIndex.value === -2) {
    score.value = 0
    nextStep(0)
  } else if (selectedStepIndex.value === -1) {
    nextStep(0)
  } else {
    nextStep(null, true)
  }
}

const nextStep = (step = null, delay = false) => {
  setTimeout(() => {
      selectedStepIndex.value = step !== null ? step : selectedStepIndex.value + 1
      selectedStep.value = props.steps[selectedStepIndex.value]
  }, delay ? 1500 : 0)
}

const getResultValue = () => {
  if (props.randomResults) {
    correctResult.value = props.results[Math.floor(Math.random() * props.results.length)]
  } else {
    props.results.sort((a,b) => a.value - b.value).reverse().every(elem => {
      if (score.value <= elem.value) {
        correctResult.value = elem
        return true
      } else {
        return false
      }
    })  
  }
}

</script>

<template>
  <div class="quiz">
    <div v-if="selectedStepIndex === -1">
      <slot name="start"></slot>
      <button class="btn" @click="handleNext()">Start!</button>
    </div>
    <div v-else-if="selectedStepIndex === -2">
      <slot name="end"></slot>
      <div class="text" v-html="correctResult.text"></div>
      <NuxtImg v-if="correctResult.image" :src="correctResult.image" />
      <button class="btn" @click="handleNext()">Restart!</button>
    </div>
    <template v-else>
      {{ score }}/{{ totalQuestions }}
      <QuizStep v-if="selectedStep" :key="selectedStepIndex" :options="selectedStep.options" :name="selectedStep.name" :question="selectedStep.question" :imageUrl="selectedStep.imageUrl" @next-question="handleNext"></QuizStep>
    </template>
  </div>
</template>

<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>