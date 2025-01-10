<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import examsData from '../data/exams.json'
import vignettesData from '../data/vignettes.json'

const router = useRouter()
const route = useRoute()
const examId = Number(route.params.examId)

const currentExam = computed(() => examsData.exams.find(exam => exam.id === examId))

const vignettes = computed(() => {
  if(!currentExam.value) return [];

  return vignettesData.vignettes.filter(vignette => currentExam.value.vignettes.includes(vignette.id))
})


const goToVignette = vignetteId => {
  router.push({
    name: 'vignette-detail',
    params: { examId: examId, vignetteId }
  })
}




</script>


<template>
  <div class="vignette-detail">
    <h1>Exam </h1>
    <!-- <h2>Vignette {{ vignetteId }}</h2> -->
    <ul>
     <li v-for="vignette in vignettes" :key="vignette.id">
        <a @click="goToVignette(vignette.id)">
          {{ vignette.title }}
        </a>

      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Your component's CSS styles go here */
</style>
