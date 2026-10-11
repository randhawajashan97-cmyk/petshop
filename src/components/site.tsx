import { Link } from "@tanstack/react-router";

export const SHOP = {
  name: "City Pet Shop",
  phone: "098883 28266",
  tel: "+919888328266",
  address: "Near G. Sri Ber Sahib, Bussowal Road, Sultanpur Lodhi, Punjab 144626",
  facebook: "https://facebook.com",
  maps: "https://www.google.com/maps/search/?api=1&query=City+Pet+Shop+Sultanpur+Lodhi",
};

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link to="/" className="font-display text-2xl font-bold text-primary">🐾 City Pet Shop</Link>
        <nav className="flex gap-5 text-sm font-semibold">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={`tel:${SHOP.tel}`} className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">Call {SHOP.phone}</a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">🐾 City Pet Shop</p>
          <p className="mt-2 text-sm opacity-80">Happy pets, happy lives. ⭐ 4.4 from 80 Google reviews.</p>
        </div>
        <div className="text-sm opacity-90">
          <p className="font-bold">Visit us</p>
          <p className="mt-2">{SHOP.address}</p>
        </div>
        <div className="text-sm opacity-90">
          <p className="font-bold">Contact</p>
          <p className="mt-2"><a href={`tel:${SHOP.tel}`}>{SHOP.phone}</a></p>
          <p><a href={SHOP.facebook} target="_blank" rel="noreferrer">Facebook</a></p>
          <p className="mt-2">Open daily from 9 am · Delivery available</p>
        </div>
      </div>
    </footer>
  );
}
