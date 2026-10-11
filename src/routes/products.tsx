import { createFileRoute } from "@tanstack/react-router";
import { SHOP } from "@/components/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — City Pet Shop" },
      { name: "description", content: "Dog food, cat food, bird and fish supplies, toys and accessories at City Pet Shop." },
      { property: "og:title", content: "Products — City Pet Shop" },
      { property: "og:description", content: "Browse what we stock for dogs, cats, birds and fish." },
    ],
  }),
  component: Products,
});

const groups = [
  { e: "🐶", t: "For Dogs", items: ["Pedigree", "Royal Canin", "Drools", "Treats & chews", "Shampoos"] },
  { e: "🐱", t: "For Cats", items: ["Whiskas", "Kitten food", "Cat litter", "Scratchers", "Cat toys"] },
  { e: "🐦", t: "Birds & Fish", items: ["Bird seed", "Cages", "Fish food", "Aquarium items", "Filters"] },
  { e: "🛏️", t: "Accessories", items: ["Collars & leashes", "Beds", "Bowls", "Grooming tools", "Carriers"] },
];

function Products() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="text-5xl font-bold">Our products</h1>
      <p className="mt-3 text-muted-foreground">Call us to check stock or order for delivery.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.t} className="rounded-3xl bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">{g.e} {g.t}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-muted-foreground">
              {g.items.map((i) => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <a href={`tel:${SHOP.tel}`} className="mt-10 inline-block rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">Order: {SHOP.phone}</a>
    </main>
  );
}
