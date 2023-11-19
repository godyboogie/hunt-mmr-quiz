<script setup>
import TheQuiz from "@/components/quiz/TheQuiz.vue"

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('/images/background.jpg', { width: 1920 })
  return { backgroundImage: `url('${imgUrl}')` }
  // return { backgroundImage: 'url(/hunt-star-quiz/images/background.jpg)' }
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
    isRight: true
  },
  {
    value: "test2",
    name: "Test 2",
    isRight: false
  },
  {
    value: "test3",
    name: "Test 3",
    isRight: false
  }],
  name: "question1",
  question: "Voici la question 1",
  imageUrl: "/quiz-bg.jpg"
},
{
  options: [{
    value: "test1",
    name: "Test 1",
    isRight: false
  },
  {
    value: "test2",
    name: "Test 2",
    isRight: true
  },
  {
    value: "test3",
    name: "Test 3",
    isRight: false
  }],
  name: "question2",
  question: "Voici la question 2",
  imageUrl: "/quiz-bg.jpg"
}]

const results = [{
  value: 0,
  text: "<h3>0, really?</h3>",
  image: "/images/quiz-bg.jpg"
},
{
  value: 1,
  text: "<h3>1, not bad.</h3>"
}]
</script>

<template>
    <div class="home" :style="backgroundStyles">
        <QuizContainer>
            <div class="text text_centered">
                <h1>Hunt: Showdown skill test!</h1>
            </div>
            <TheQuiz :steps="quizSteps" :results="results" :randomResults="true">
              <template #start>
                <h2>In this quiz, you will find out your true Hunt: Showdown rating.</h2>
              </template>
            </TheQuiz>
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