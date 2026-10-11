import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — City Pet Shop" },
      { name: "description", content: "A friendly local pet store in Sultanpur Lodhi, trusted by pet parents." },
      { property: "og:title", content: "About City Pet Shop" },
      { property: "og:description", content: "Learn about our local pet store in Sultanpur Lodhi." },
    ],
  }),
  component: About,
});

const reviews = [
  "Good variety of food and very helpful owner.",
  "Best pet shop in Sultanpur Lodhi. Fair prices!",
  "Quick delivery and genuine products.",
];

function About() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <h1 className="text-5xl font-bold">About us</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        City Pet Shop is a local pet store in Sultanpur Lodhi, Punjab. We help pet parents find the right food,
        toys and accessories — with honest advice and home delivery.
      </p>
      <div className="mt-10 rounded-3xl bg-accent p-8">
        <p className="font-display text-4xl font-bold">⭐ 4.4 / 5</p>
        <p>from 80 Google reviews</p>
      </div>
      <h2 className="mt-12 text-3xl font-bold">What customers say</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {reviews.map((r) => <blockquote key={r} className="rounded-3xl bg-card p-6 shadow-sm">“{r}”</blockquote>)}
      </div>
    </main>
  );
}
