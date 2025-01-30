<template>
  <h1>{{ vignette?.title }}</h1>
   <p>{{ vignette?.vignette }}</p>
   <div v-if="!showResults && currentQuestion" class="question">
     <h2>Question {{ currentQuestionIndex + 1 }}</h2>
     <p>{{ currentQuestion.text }}</p>
     <ol class="options">
       <li v-for="(option, letter) in currentQuestion.options" :key="letter">
         <button
           @click="submitAnswer(letter)"
           :class="{ selected: userAnswers[currentQuestionIndex] === letter }"
           class="no-button-style  choice-button"
         >
           {{ letter }}. {{ option }}
         </button>
       </li>
     </ol>
   </div>
   <div v-if="showResults" class="results">
     <h2>Quiz Results</h2>
     <p>Your score: {{ score }} / {{ vignette?.questions.length }}</p>
     <div v-for="(question, index) in vignette?.questions" :key="index">
       <h3>Question {{ index + 1 }}</h3>
       <p>{{ question.text }}</p>
       <p :class="{ 'right': question.correctAnswer === userAnswers[index]}" >Your answer: Option {{ userAnswers[index] }} - {{ getAnswerText(question, userAnswers[index]) }}</p>
       <p v-if="question.correctAnswer !== userAnswers[index]" :class="{ 'wrong': question.correctAnswer !== userAnswers[index]}">Correct answer: <strong>Option {{ question.correctAnswer }}</strong> - {{ getAnswerText(question, question.correctAnswer) }}</p>
       <p v-html='question.explanation' class="explanation">
       </p>
     </div>

     <nav  class="back-to-vignettes">

       <RouterLink :to="{ name: 'exam-detail', params: {id: examId}}"> 👈 Back</RouterLink>
      </nav>

   </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { test3 } from '@/data/vignettes_3'
import { test1 } from '@/data/vignettes_1'

const route = useRoute()
const examId = Number(route.params.examId)
const vignetteId = Number(route.params.vignetteId)

const vignettes = examId === 1 ? test1 : test3;

const vignette = computed(() =>
 vignettes.find(v => v.id === vignetteId)
)

const currentQuestionIndex = ref(0)
const userAnswers = ref([])
const showResults = ref(false)

const currentQuestion = computed(() => vignette.value?.questions[currentQuestionIndex.value])

const getAnswerText = (question, answerKey) => {
 return question.options[answerKey] || 'No answer selected'
}

const submitAnswer = (letter) => {
 if (currentQuestion.value) {
   userAnswers.value[currentQuestionIndex.value] = letter
   if (currentQuestionIndex.value < (vignette.value?.questions.length || 0) - 1) {
     currentQuestionIndex.value++
   } else {
     showResults.value = true
   }
 }
}

const score = computed(() => {
 if(!vignette.value) return 0

 return vignette.value.questions.reduce((acc, question, index) => {
   return acc + (question.correctAnswer === userAnswers.value[index] ? 1 : 0)
 }, 0)
})
</script>

<style>
@media (min-width: 1024px) {
 .about {
   min-height: 100vh;
   display: flex;
   align-items: center;
 }
}

.no-button-style {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
}

.options{
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
ol.options > li {
    list-style: none;
    padding: 0;
    margin: 0;

}

.choice-button {
  -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    --rem: 16;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    color-scheme: light;
    font-synthesis-weight: none;

    --radius: 0.5rem;
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
    border-color: hsl(var(--border));
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    margin: 0;
    background-image: none;
    cursor: pointer;
    display: inline-flex;
    /* height: 2.5rem; */
    align-items: center;
    justify-content: center;
    gap: .5rem;
    white-space: wrap;
    border-radius: calc(var(--radius) - 2px);
    background-color: hsl(var(--secondary));
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-size: .875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: hsl(var(--secondary-foreground));
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
}

.explanation{
  --radius: 0.5rem;
  background: #f4f4f4;
  padding-left: 1rem;
    padding-right: 1rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
  border-radius: calc(var(--radius) - 2px);
  font-size: .875rem;
  margin-bottom: 16px;
}

.right {
  margin: 12px 0;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #10b981;
  background: #a7f3d0;
  color: #064e3b;
}
.wrong {
  margin: 12px 0;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #f87171;
  background: #fee2e2;
  color: #991b1b;
}

.back-to-vignettes {
  margin-bottom: 28px;
  margin-top: 28px;
  font-size: 1.6rem;
  text-align: center;
}
.selected {
 background-color: #e0e0e0;
}
</style>
