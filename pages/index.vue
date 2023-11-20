<script setup>
import TheQuiz from "@/components/quiz/TheQuiz.vue"

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('/images/background.jpg', { width: 1920 })
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
    value: "winfield-m1873",
    name: "Winfield M1873",
    isRight: false
  },
  {
    value: "winfield-m1873-aperture",
    name: "Winfield M1873 Aperture",
    isRight: true
  },
  {
    value: "winfield-m1876-centennial",
    name: "Winfield M1876 Centennial",
    isRight: false
  },{
    value: "winfield-m1873-swift",
    name: "Winfield M1873 Swift",
    isRight: false
  }],
  name: "question1",
  question: "What is the name of this weapon?",
  imageUrl: "/images/questions/question-1.webp"
},
{
  options: [{
    value: "146",
    name: "146",
    isRight: false
  },
  {
    value: "135",
    name: "135",
    isRight: false
  },
  {
    value: "132",
    name: "132",
    isRight: true
  },
  {
    value: "129",
    name: "129",
    isRight: false
  }],
  name: "question2",
  question: "How much damage does the Lebel 1886 do?",
  imageUrl: "/images/questions/question-2.webp"
},
{
  options: [{
    value: "north-star",
    name: "North Star",
    isRight: false
  },
  {
    value: "zhong-kui",
    name: "Zhong Kui",
    isRight: false
  },
  {
    value: "the-spirited",
    name: "The Spirited",
    isRight: false
  },
  {
    value: "the-sovereign",
    name: "The Sovereign",
    isRight: true
  }],
  name: "question3",
  question: "What is the name of this legendary hunter?",
  imageUrl: "/images/questions/question-3.png"
},
{
  options: [{
    value: "iron-sharpshooter",
    name: "Iron Sharpshooter",
    isRight: true
  },
  {
    value: "iron-repeater",
    name: "Iron Repeater",
    isRight: false
  },
  {
    value: "iron-devastator",
    name: "Iron Devastator",
    isRight: false
  },
  {
    value: "steady-aim",
    name: "Steady Aim",
    isRight: false
  }],
  name: "question4",
  question: "What is the name of this trait?",
  imageUrl: "/images/questions/question-4.webp"
},
{
  options: [{
    value: "70",
    name: "Prestige 70",
    isRight: false
  },
  {
    value: "80",
    name: "Prestige 80",
    isRight: true
  },
  {
    value: "90",
    name: "Prestige 90",
    isRight: false
  },
  {
    value: "100",
    name: "Prestige 100",
    isRight: false
  }],
  name: "question5",
  question: "What is the prestige level of this badge?",
  imageUrl: "/images/questions/question-5.webp"
}]

const results = [{
  value: 0,
  text: "<h3>1 star player!</h3><p>Do not worry, you will be better... someday!</p>",
  image: "/images/results/1-star.jpg"
},
{
  value: 1,
  text: "<h3>2 star player</h3><p>You think you are good? Think again!</p>",
  image: "/images/results/2-star.jpg"
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