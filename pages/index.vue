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
},
{
  options: [{
    value: "scupper",
    name: "Scupper Lake",
    isRight: false
  },
  {
    value: "lumber",
    name: "C&A Lumber",
    isRight: false
  },
  {
    value: "Reynard",
    name: "Reynard Mill & Lumber",
    isRight: false
  },
  {
    value: "catfish",
    name: "Catfish Grove",
    isRight: true
  }],
  name: "question6",
  question: "What is the name of this compound?",
  imageUrl: "/images/questions/question-6.webp"
},
{
  options: [{
    value: "pistol",
    name: "Caldwell Conversion Pistol",
    isRight: true
  },
  {
    value: "uppercut",
    name: "Caldwell Conversion Uppercut",
    isRight: false
  },
  {
    value: "rival",
    name: "Caldwell Rival 78",
    isRight: false
  },
  {
    value: "pax",
    name: "Caldwell Pax",
    isRight: false
  }],
  name: "question7",
  question: "What is the name of this weapon?",
  imageUrl: "/images/questions/question-7.webp"
},
{
  options: [{
    value: "compact",
    name: "Compact",
    isRight: false
  },
  {
    value: "medium",
    name: "Medium",
    isRight: true
  },
  {
    value: "long",
    name: "Long",
    isRight: false
  },
  {
    value: "special",
    name: "Special",
    isRight: false
  }],
  name: "question8",
  question: "For wich type of ammo is this box for?",
  imageUrl: "/images/questions/question-8.webp"
},
{
  options: [{
    value: "82",
    name: "82",
    isRight: false
  },
  {
    value: "90",
    name: "90",
    isRight: false
  },
  {
    value: "91",
    name: "91",
    isRight: true
  },
  {
    value: "97",
    name: "97",
    isRight: false
  }],
  name: "question9",
  question: "How much damage does the Nagant M1895 Silencer do?",
  imageUrl: "/images/questions/question-9.webp"
},
{
  options: [{
    value: "pitchfork",
    name: "Pitchfork Girl",
    isRight: false
  },
  {
    value: "shotgun",
    name: "Shotgun Guy",
    isRight: false
  },
  {
    value: "trade",
    name: "It's a trade",
    isRight: true
  },
  {
    value: "nobody",
    name: "Nobody",
    isRight: false
  }],
  name: "question9",
  question: "Who dies?",
  imageUrl: "/images/questions/question-10.jpg"
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
            <TheQuiz :steps="quizSteps" :results="results" :randomResults="true" startText="Start the quiz!" restartText="Retake the quiz!">
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