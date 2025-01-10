<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
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

const submitAnswer = answerIndex =>{
  userAnswers.value[currentQuestionIndex] = answerIndex
  if (currentQuestionIndex.value < (vignette.value?.questions.length || 0) - 1) {
    currentQuestionIndex.value++
  } else {
    showResults.value = true
  }
}

const score = computed(() => {
  if(!vignette.value) return 0

  return vignette.value.questions.reduce((acc, question, index) => {
    return acc + (question.correntAnswer === userAnswers.value[index] ? 1 : 0)
  }, 0)
})



</script>

<template>
   <h1>{{ vignette?.title }}</h1>
    <p>{{ vignette?.description }}</p>
    <div v-if="!showResults && currentQuestion" class="question">
      <h2>Question {{ currentQuestionIndex + 1 }}</h2>
      <p>{{ currentQuestion.text }}</p>
      <ul>
        <li v-for="(option, index) in currentQuestion.options" :key="index">
          <button
            @click="submitAnswer(index)"
            :class="{ selected: userAnswers[currentQuestionIndex] === index }"
          >
            {{ option }}
          </button>
        </li>
      </ul>
    </div>
    <div v-if="showResults" class="results">
      <h2>Quiz Results</h2>
      <p>Your score: {{ score }} / {{ vignette?.questions.length }}</p>
      <div v-for="(question, index) in vignette?.questions" :key="index">
        <h3>Question {{ index + 1 }}</h3>
        <p>{{ question.text }}</p>
        <p>Your answer: {{ question.options[userAnswers[index]] }}</p>
        <p>Correct answer: {{ question.options[question.correctAnswer] }}</p>
      </div>
    </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
