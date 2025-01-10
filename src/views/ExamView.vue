<template>
  <div class="vignette-detail">
    <h1>Exam {{ examId }}</h1>
    <!-- <h2>Vignette {{ vignetteId }}</h2> -->
    <ul>
      <li v-for="exam in examsList" :key="exam.id">
        <a @click="goToExam(exam.id)">
          {{ exam.title }}
        </a>

      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const examId = route.params.examId

const examsList = ref([])




onMounted(async () => {
  try {
    const res = await fetch('/src/data/exams.json');
    const data = await res.json();
    examsList.value = data
  } catch (error) {
    console.error("Error fetching or parsing JSON", error)
  }
})

console.log(examsList.value);


</script>

<style scoped>
/* Your component's CSS styles go here */
</style>
