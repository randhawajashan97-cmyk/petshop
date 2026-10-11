import { createFileRoute } from "@tanstack/react-router";
import { SHOP } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Directions — City Pet Shop" },
      { name: "description", content: "Call 098883 28266 or visit us on Bussowal Road, Sultanpur Lodhi, Punjab 144626." },
      { property: "og:title", content: "Contact City Pet Shop" },
      { property: "og:description", content: "Phone, address, hours and map for City Pet Shop." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
      <div>
        <h1 className="text-5xl font-bold">Visit or call us</h1>
        <div className="mt-8 space-y-5 text-lg">
          <p>📍 {SHOP.address}</p>
          <p>📞 <a className="font-bold text-primary" href={`tel:${SHOP.tel}`}>{SHOP.phone}</a></p>
          <p>🕘 Opens 9 am · Delivery available</p>
          <p>👍 <a className="text-primary" href={SHOP.facebook} target="_blank" rel="noreferrer">Facebook</a></p>
        </div>
        <a href={SHOP.maps} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">Open in Google Maps</a>
      </div>
      <iframe
        title="Map"
        className="h-96 w-full rounded-3xl border"
        loading="lazy"
        src="https://www.google.com/maps?q=658P%2B57+Sultanpur+Lodhi,+Punjab&output=embed"
      />
    </main>
  );
}
