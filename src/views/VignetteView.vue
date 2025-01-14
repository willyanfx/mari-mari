<template>
  <h1>{{ vignette?.title }}</h1>
   <p>{{ vignette?.description }}</p>
   <div v-if="!showResults && currentQuestion" class="question">
     <h2>Question {{ currentQuestionIndex + 1 }}</h2>
     <p>{{ currentQuestion.text }}</p>
     <ol>
       <li v-for="(option, letter) in currentQuestion.options" :key="letter">
         <button
           @click="submitAnswer(letter)"
           :class="{ selected: userAnswers[currentQuestionIndex] === letter }"
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
     </div>

     <nav  class="back-to-vignettes">

       <RouterLink :to="{ name: 'exam-detail', params: {id: examId}}"> 👈 Back</RouterLink>
      </nav>

   </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import vignettesData from '../data/vignettes.json'

const route = useRoute()
const examId = Number(route.params.examId)
const vignetteId = Number(route.params.vignetteId)

const vignette = computed(() =>
 vignettesData.vignettes.find(v => v.id === vignetteId)
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
