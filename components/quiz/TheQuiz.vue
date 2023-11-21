<script setup>
const props = defineProps({
  steps: Array,
  results: Array,
  randomResults: {
    type: Boolean,
    default: false
  },
  startText: {
    type: String,
    default: "Start"
  },
  restartText: {
    type: String,
    default: "Restart"
  }
})

const selectedStepIndex = ref(-1)
const selectedStep = ref(props.steps[selectedStepIndex.value])
const totalQuestions = ref(props.steps.length)
const score = ref(0)
const correctResult = ref(null)
const resultImages = ref({})

const handleNext = (isRight = false) => {
  if (isRight && !props.randomResults) {
    score.value += 1
  }
  
  if (selectedStepIndex.value === totalQuestions.value - 1) {
    getResultValue()
    nextStep(-2, props.randomResults ? false : true)
  } else if (selectedStepIndex.value === -2) {
    score.value = 0
    nextStep(0)
  } else if (selectedStepIndex.value === -1) {
    nextStep(0)
  } else {
    nextStep(null, props.randomResults ? false : true)
  }
}

const nextStep = (step = null, delay = false) => {
  setTimeout(() => {
    const tempIndex = step !== null ? step : selectedStepIndex.value + 1;
    selectedStepIndex.value = -10
    selectedStep.value = null
    setTimeout(() => {
      selectedStepIndex.value = tempIndex
      selectedStep.value = props.steps[selectedStepIndex.value]
    }, 510)
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

// Load images
const img = useImage()
props.results.filter(elem => elem.image).forEach(result => {
  const testImage = img(result.image, {width: 500})
  resultImages.value[result.image] = testImage
})

</script>

<template>
  <div class="quiz">
    <Transition name="list">
      <div v-if="selectedStepIndex === -1">
        <div class="quizContent text">
          <slot name="start"></slot>
        </div>
        <div class="btnContainer">
          <button class="btn" @click="handleNext()">{{ startText }}</button>
        </div>
      </div>
      <div v-else-if="selectedStepIndex === -2">
        <div class="quizContent text">
          <slot name="end"></slot>
          <div class="text" v-html="correctResult.text"></div>
        </div>
        <img v-if="correctResult.image" :src="resultImages[correctResult.image]"  />
        <div class="btnContainer">
          <button class="btn" @click="handleNext()">{{ restartText }}</button>
        </div>
      </div>
      <template v-else>
        <Transition name="list">
          <QuizStep v-if="selectedStep" :key="selectedStepIndex" :options="selectedStep.options" :name="selectedStep.name" :question="selectedStep.question" :imageUrl="selectedStep.imageUrl" @next-question="handleNext" :validate="!randomResults"></QuizStep>
        </Transition>
      </template>
    </Transition>
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
}
</style>