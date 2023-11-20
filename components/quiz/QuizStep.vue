<script setup>
const props = defineProps({
  options: Array,
  name: String,
  question: String,
  imageUrl: String,
  correctOption: String
})

const emit = defineEmits(['nextQuestion'])

const optionsObject = ref(Object.assign({}, ...props.options.map((x) => ({[x.value]: null}))))
const disabledAnswers = ref(false)

const handleClick = (option) => {
  disabledAnswers.value = true;
  optionsObject.value[option.value] = option.isRight ? "btn_right" : "btn_wrong"

  if (option.isRight) {
    emit("nextQuestion", true)
  } else {
    emit("nextQuestion", false)
  }
}
</script>

<template>
  <div class="step">
    <h2>{{ question }}</h2>
    <button v-for="option in options" :key="option.value" :class="['btn', optionsObject[option.value]]" :disabled="disabledAnswers" @click="handleClick(option)">{{ option.name }}</button>
  </div>
</template>
