<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import examsData from '../data/exams.json'

const router = useRouter()
const exams = ref(examsData.exams)

const goToExam = (examId) => {
  router.push({
    name: 'exam-detail', params: {examId}
  })
}

</script>

<template>
  <div class="exam-list">
    <h1>Available Exams</h1>
    <ul>
   <li v-for="exam in exams" :key="exam.id">
        <a @click="goToExam(exam.id)">
          {{ exam.title }}
        </a>

      </li>
    </ul>
  </div>
</template>
