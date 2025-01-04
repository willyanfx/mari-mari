import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/page";

type Vignette = {
  id: string;
  title: string;
  vignettes: string[];
};

type Exam = { exams: Vignette[] };

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exams" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  let data = await fetch(`/app/data/exams.json`).then((res) => res.json());
  return data;
}

export default function ExamsPage() {
  const { exams } = useLoaderData<Exam>();
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Select an Exam</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {exams.map((exam) => (
          <Link
            key={exam.id}
            to={`/exams/${exam.id}`}
            className='block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100'
          >
            <h2 className='text-xl font-bold'>{exam.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
