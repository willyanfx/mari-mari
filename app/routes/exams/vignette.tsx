import type { Route } from "./+types/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vignette" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

interface Option {
  id: string;
  option: string;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
  rightAnswer: string;
  explain: string;
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  let data = await fetch(`/app/data/vignette-111.json`).then((res) =>
    res.json()
  );
  console.log(data);
  return {};
}

export default function VignettePage() {
  return <>vignette</>;
}
