<script setup>
const props = defineProps({
  options: Array,
  name: String,
  question: String,
  imageUrl: String,
  correctOption: String,
  validate: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['nextQuestion'])

const optionsObject = ref(Object.assign({}, ...props.options.map((x) => ({[x.value]: null}))))
const disabledAnswers = ref(false)

const handleClick = (option) => {
  if (props.validate) {
    disabledAnswers.value = true;
    optionsObject.value[option.value] = option.isRight ? "btn_right" : "btn_wrong"

    if (option.isRight) {
      emit("nextQuestion", true)
    } else {
      emit("nextQuestion", false)
    }
  } else {
    emit("nextQuestion")
  }
}
</script>

<template>
  <div class="step">
    <div class="quizContent">
      <div class="text">
        <h2>{{ question }}</h2>
      </div>

      <img class="questionImage" :src="imageUrl" />
    </div>
    <div class="btnContainer">
      <button v-for="option in options" :key="option.value" :class="['btn', optionsObject[option.value]]" :disabled="disabledAnswers" @click="handleClick(option)">{{ option.name }}</button>
    </div>
  </div>
</template>

<style lang="scss">
.questionImage {
  margin: 0 auto;

  &:not(:first-child) {
    margin-top: 2rem;
  }
}
</style>