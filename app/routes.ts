import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("exams", "./routes/exams/page.tsx"),
  route("exams/:examId", "./routes/exams/exam.tsx"),
  route("exams/:examId/:vignetteId", "./routes/exams/vignette.tsx"),
] satisfies RouteConfig;
