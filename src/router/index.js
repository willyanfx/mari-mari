import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/exams',
      name: 'exams',
      component: () => import('../views/ExamsView.vue'),
    },
    {
      path: '/exams/:examId',
      name: 'exam-detail',
      component: () => import('../views/ExamView.vue'),
      props: true,
    },
    {
      path: '/exams/:examId/vignette/:vignetteId',
      name: 'vignette-detail',
      component: () => import('../views/VignetteView.vue'),
      props: true,
    },
    {
      path: '/',
      redirect: '/exams',
    },
  ],
})

export default router
