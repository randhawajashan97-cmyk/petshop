import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { SHOP } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "City Pet Shop — Pet Store in Sultanpur Lodhi" },
      { name: "description", content: "Trusted pet food, toys and accessories in Sultanpur Lodhi. Rated 4.4 by 80 customers. Home delivery available." },
      { property: "og:title", content: "City Pet Shop — Sultanpur Lodhi" },
      { property: "og:description", content: "Pet food, toys, accessories and delivery in Sultanpur Lodhi, Punjab." },
    ],
  }),
  component: Index,
});

const cats = [
  { e: "🦴", t: "Dog Food", d: "Pedigree, Royal Canin, Drools & more" },
  { e: "🐟", t: "Cat Food", d: "Whiskas, kitten & adult formulas" },
  { e: "🎾", t: "Toys", d: "Chew toys, balls and plushies" },
  { e: "🦮", t: "Accessories", d: "Collars, leashes, beds and bowls" },
];

function Index() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-accent px-3 py-1 text-sm font-bold">⭐ 4.4 · 80 reviews</span>
          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">Everything your pet loves, right in <span className="text-primary">Sultanpur Lodhi</span></h1>
          <p className="mt-5 text-lg text-muted-foreground">Quality food, fun toys and caring advice for dogs, cats, birds and fish. Home delivery available.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${SHOP.tel}`} className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">Call to order</a>
            <a href={SHOP.maps} target="_blank" rel="noreferrer" className="rounded-full border-2 border-primary px-6 py-3 font-bold text-primary">Get directions</a>
          </div>
        </div>
        <img src={hero} width={1600} height={1008} alt="Puppy and kitten inside City Pet Shop" className="rounded-3xl shadow-xl" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-3xl font-bold">Shop by category</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => (
            <Link to="/products" key={c.t} className="rounded-3xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl">{c.e}</div>
              <h3 className="mt-3 text-xl font-semibold">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-6 rounded-3xl bg-secondary p-10 text-secondary-foreground md:grid-cols-3">
          <div><p className="text-3xl">🚚</p><h3 className="mt-2 text-xl font-semibold">Home delivery</h3><p className="opacity-90">Call us and we bring it to your door.</p></div>
          <div><p className="text-3xl">💚</p><h3 className="mt-2 text-xl font-semibold">Trusted brands</h3><p className="opacity-90">Only genuine, fresh pet products.</p></div>
          <div><p className="text-3xl">🕘</p><h3 className="mt-2 text-xl font-semibold">Open from 9 am</h3><p className="opacity-90">Drop by near G. Sri Ber Sahib.</p></div>
        </div>
      </section>
    </main>
  );
}
