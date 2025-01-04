import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exams" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  let data = await fetch(`/app/data/exams.json`).then((res) => res.json());
  return { exam: data[String(params.examId)], examId: params.examId };
}

export default function ExamsPage() {
  const { examId, exam } = useLoaderData();
  console.log(JSON.stringify(exam), examId);
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>{exam.title} - Vignettes</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {exam.vignettes.map((vignette: any) => (
          <Link
            key={vignette.id}
            to={`/exams/${examId}/${vignette.id}`}
            className='block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100'
          >
            <h2 className='text-xl font-bold'>{vignette.title}</h2>
            <p className='text-gray-600'>{vignette.length} questions</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
