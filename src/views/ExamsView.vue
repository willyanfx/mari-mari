<script setup lang="ts">
import { exams } from '@/data/exams';
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()
const examsList = ref(exams)

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
   <li v-for="exam in examsList" :key="exam.id">
        <a @click="goToExam(exam.id)">
          {{ exam.title }}
        </a>

      </li>
    </ul>
  </div>
</template>
