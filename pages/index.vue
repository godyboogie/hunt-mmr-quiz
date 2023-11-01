<script setup>
import TheQuiz from "@/components/quiz/TheQuiz.vue"

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/background.jpg', { width: 1920 })
  return { backgroundImage: `url('${imgUrl}')` }
})

useHead({
  title: 'Hunt: Showdown Skill Test',
  meta: [
    { name: 'description', content: 'Find out how good you are at Hunt: Showdown!' }
  ],
})

const quizSteps = [{
  options: [{
    value: "test1",
    name: "Test 1",
  },
  {
    value: "test2",
    name: "Test 2",
  },
  {
    value: "test3",
    name: "Test 3",
  }],
  name: "question1",
  question: "Voici la question 1",
  imageUrl: "/quiz-bg.jpg",
  correctOption: "test1"
}]
</script>

<template>
    <div class="home" :style="backgroundStyles">
        <QuizContainer>
            <div class="text">
                <h1>Test</h1>
            </div>
            <TheQuiz :steps="quizSteps"></TheQuiz>
        </QuizContainer>
    </div>
</template>

<style lang="scss">
.home {
    min-height: 100%;
    background-color: $black;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>