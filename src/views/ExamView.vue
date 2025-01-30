<script setup lang="ts">
import { exams } from '@/data/exams'
import { test1 } from '@/data/vignettes_1'
import { test3 } from '@/data/vignettes_3'
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'



const router = useRouter()
const route = useRoute()
const examId = Number(route.params.examId)



const vignettes = computed(() => {
  const value =  examId === 1 ? test1 : test3;


  return value

  // return vignettesData.vignettes.filter(vignette => currentExam.value.vignettes.includes(vignette.id))
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
