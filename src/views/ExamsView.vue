<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const examsList = ref([])


onMounted(async () => {
  try {
    const res = await fetch('/src/data/exams.json');
    const data = await res.json();
    examsList.value = data;
    console.log(data);
  } catch (error) {
    console.error("Error fetching or parsing JSON", error)
  }
})
const goToExam = (examId: number) => {
  router.push({ name: 'exam-detail', params: { examId } })
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
