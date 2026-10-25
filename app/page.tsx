"use client";

import { useState } from "react";
import Image from "next/image";

const foodImage = (id: string) => `/food/${id}.jpg`;
type Dish = {
  name: string;
  category: string;
  description?: string;
  price: string;
  image: string;
  arabic?: string;
};
const dishes: Dish[] = [
  { name: "Hummus", category: "Appetizers", description: "Creamy blended chickpeas with tahini, lemon, and garlic.", price: "9.99", image: "7167852" },
  { name: "Falafel (6 Pieces)", category: "Appetizers", description: "Crispy chickpea patties seasoned with herbs and spices, served with a side of tahini sauce.", price: "9.99", image: "7209386" },
  { name: "Small French Fries", category: "Appetizers", description: "Crispy golden fries.", price: "2.99", image: "4109234" },
  { name: "Large French Fries", category: "Appetizers", price: "6.99", image: "4109234" },
  { name: "Mozzarella Stick (6 Pieces)", category: "Appetizers", price: "9.99", image: "37305401" },
  { name: "Meat pies", category: "Appetizers", price: "7.99", image: "29389677" },
  { name: "Kibbeh (2 Pieces)", category: "Appetizers", price: "9.99", image: "11842176" },
  { name: "Baba Ghanouj", category: "Appetizers", price: "9.99", image: "36879175" },
  { name: "Tabbouleh Salad", category: "Salads", price: "9.99", image: "29259140" },
  { name: "Greek Salad", category: "Salads", description: "Tomatoes, cucumbers, olives, red onion, and feta.", price: "9.99", image: "34293330" },
  { name: "Caesar Salad", category: "Salads", description: "Romaine, croutons, and parmesan with Caesar dressing.", price: "9.99", image: "39885031" },
  { name: "Fattoush Salad", category: "Salads", description: "Crisp lettuce, juicy tomatoes, cucumbers, black olives, and shredded cheese.", price: "9.99", image: "29259119" },
  { name: "Mixed Grill Platter", category: "Tarboosh Grill & Platters", price: "20.99", image: "37417607" },
  { name: "Chicken Breast Platter", category: "Tarboosh Grill & Platters", price: "18.99", image: "35754630" },
  { name: "Kofta Kebab Platter", category: "Tarboosh Grill & Platters", description: "Grilled minced meat kebabs served with seasoned rice, fresh chopped salad, and a side of creamy sauce.", price: "18.99", image: "31151727" },
  { name: "Dish of the Day (Daily Special)", category: "Tarboosh Grill & Platters", price: "18.99", image: "37417607" },
  { name: "Shish Tawook Platter", category: "Tarboosh Grill & Platters", price: "18.99", image: "35754630" },
  { name: "Shish Kebab Platter", category: "Tarboosh Grill & Platters", price: "18.99", image: "31151727" },
  { name: "Chicken Wings 12 (Pieces)", category: "Wings & Tenders", description: "Crispy chicken wings served with creamy dipping sauces.", price: "20.99", image: "36750259" },
  { name: "Chicken Wings 8 (Pieces)", category: "Wings & Tenders", description: "Crispy fried chicken wings seasoned with Middle Eastern spices, served with a side of golden fries.", price: "13.99", image: "36750259" },
  { name: "Chicken Wings 5 (Pieces)", category: "Wings & Tenders", description: "Crispy, seasoned chicken wings served with a side of tangy red sauce and creamy white dipping sauce.", price: "9.99", image: "36750259" },
  { name: "Boneless Chicken 6 (Pieces)", category: "Wings & Tenders", price: "9.99", image: "11710530" },
  { name: "Crispy Chicken Tender 3 (Pieces)", category: "Wings & Tenders", description: "Crispy fried chicken tenders, seasoned with Middle Eastern spices, served in a portion of three pieces.", price: "7.99", image: "29653191" },
  { name: "Boneless Chicken 10 (Pieces)", category: "Wings & Tenders", price: "13.99", image: "11710530" },
  { name: "Boneless Chicken 15 (Pieces)", category: "Wings & Tenders", price: "15.99", image: "11710530" },
  { name: "Crispy Chicken Tender 5 (Pieces)", category: "Wings & Tenders", description: "Golden, crispy chicken tenders served with two dipping sauces. Five pieces per order.", price: "10.99", image: "29653191" },
  { name: "Crispy Chicken Tender 10 (Pieces)", category: "Wings & Tenders", price: "16.99", image: "29653191" },
  { name: "Shish Tawook Sandwich", category: "Subs, Wraps, Sandwiches", description: "Pita bread, pickles, tomato, garlic sauce.", price: "11.99", image: "9980749" },
  { name: "Kebab Sandwich", category: "Subs, Wraps, Sandwiches", description: "Pita bread, onion, pickles, tomato, tahini sauce.", price: "11.99", image: "5779369" },
  { name: "Falafel Sandwich", category: "Subs, Wraps, Sandwiches", description: "Pita bread, hummus, pickles, tahini sauce.", price: "9.99", image: "29850814" },
  { name: "Cheeseburger", category: "Subs, Wraps, Sandwiches", description: "Lettuce, pickles, tomato, onion, cheese.", price: "9.99", image: "1556698" },
  { name: "French Fries Wrap", category: "Subs, Wraps, Sandwiches", price: "7.00", image: "29850814" },
  { name: "Chicken Sandwich", category: "Subs, Wraps, Sandwiches", description: "Hamburger buns, lettuce, pickles, tomato, cheese.", price: "9.99", image: "11975890" },
  { name: "Chicken Shawarma", category: "Subs, Wraps, Sandwiches", description: "Pita bread, lettuce, pickles, tomato, garlic sauce.", price: "10.99", image: "9980749" },
  { name: "Lamb Shawarma", category: "Subs, Wraps, Sandwiches", description: "Pita bread, lettuce, pickles, tomato, tahini sauce.", price: "10.99", image: "5779369" },
  { name: "Pistachio baklava", category: "Sweet endings", description: "Delicate layers of golden pastry, crushed pistachios and a light syrup.", price: "9.00", image: "20183046" },
];
const doordashUrl = "https://www.doordash.com/store/tarbooch-restaurant-1233-s-military-trl-west-palm-beach-33452519/60015950/?pickup=false";

const categories = ["Appetizers", "Salads", "Tarboosh Grill & Platters", "Wings & Tenders", "Subs, Wraps, Sandwiches", "Sweet endings"];
function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [category, setCategory] = useState("Appetizers");
  const shown = dishes.filter(d => d.category === category);


  return (
    <>
      <header className="relative z-30 border-b border-ink/10 bg-paper">
        <div className="mx-auto flex min-h-24 max-w-[1440px] items-center justify-between gap-4 px-6 py-5 md:py-0 md:px-12">
          <a href="#" aria-label="Tarbooch home" className="text-center text-ink"><span className="font-sans font-medium text-3xl tracking-[-0.06em] md:text-4xl">Tarbooch<span className="text-jordan-red">.</span></span><span className="mt-1 block text-[8px] uppercase tracking-[0.26em]">Restaurant & Café</span></a>
          <a href={doordashUrl} target="_blank" rel="noopener noreferrer" aria-label="Order now on DoorDash (opens in a new tab)" className="flex shrink-0 items-center gap-4 bg-jordan-red px-5 py-3.5 text-[10px] uppercase tracking-widest text-paper transition hover:bg-jordan-green lg:hidden">Order now <Arrow /></a>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 text-[11px] lg:flex">
            {[['Our menu', '#menu'], ['Location', '#location']].map(([label, href]) => <a key={href} href={href} className="transition-colors hover:text-jordan-red">{label}</a>)}
            <a href={doordashUrl} target="_blank" rel="noopener noreferrer" aria-label="Order now on DoorDash (opens in a new tab)" className="flex items-center justify-between gap-5 bg-jordan-red px-5 py-3.5 text-[10px] uppercase tracking-widest text-paper transition hover:bg-jordan-green">Order now <Arrow /></a>
          </nav>
        </div>
      </header>
      <main className="w-full bg-paper">
        <section className="relative isolate mx-auto grid max-w-[1440px] lg:min-h-[690px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 col-start-1 row-start-1 flex min-h-[620px] flex-col items-center justify-center px-6 py-14 text-center text-paper md:col-auto md:row-auto md:min-h-0 md:items-start md:px-12 md:text-left md:text-ink lg:py-20">
            <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-paper md:text-jordan-red"><span className="h-px w-9 bg-paper md:bg-jordan-red" /> A taste of the Middle East</div>
            <h1 className="mt-8 font-sans font-light text-[clamp(3rem,5vw,5rem)] leading-[1.04] tracking-[-0.045em]">Rich traditions.<br /><em className="font-normal not-italic text-paper md:text-jordan-green">Beautifully</em><br />served.</h1>
            <p className="mt-7 max-w-xs text-[13px] leading-7 text-paper/90 md:text-muted">Silken hummus, fragrant spices and the warmth of charcoal. Discover the generous flavours of Middle Eastern cooking.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-6 md:flex-row md:flex-wrap md:justify-start">
              <a href={doordashUrl} target="_blank" rel="noopener noreferrer" aria-label="Order now on DoorDash (opens in a new tab)" className="flex items-center gap-10 bg-jordan-red px-6 py-4 text-[10px] uppercase tracking-[0.16em] text-paper transition hover:bg-jordan-green">Order now <Arrow /></a>
              <a href="tel:+15614331164" className="inline-flex items-center justify-center bg-black px-6 py-4 text-[10px] tracking-wider text-white transition hover:bg-black/80">Call now <span className="ml-2">(561) 433-1164</span></a>
            </div>
          </div>
          <div className="relative col-start-1 row-start-1 min-h-[620px] md:col-auto md:row-auto md:min-h-[470px] lg:min-h-[690px]">
            <Image fill preload sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" src={foodImage("29253297")} alt="Middle Eastern mezze platter with hummus, falafel, fresh vegetables and garnishes" />
            <div aria-hidden="true" className="absolute inset-0 bg-black/55 md:hidden" />
          </div>
        </section>
        <section id="menu" className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          <div><p className="text-[9px] uppercase tracking-[0.25em] text-jordan-red">From our kitchen</p><h2 className="mt-4 font-sans font-medium text-4xl leading-tight tracking-[-0.04em] md:text-5xl">A journey of flavour.</h2><p className="mt-5 max-w-md text-xs leading-6 text-muted">From the first piece of warm pita to the last delicate bite of baklava.</p></div>
          <div className="mb-10 mt-9 flex gap-7 overflow-x-auto border-b border-ink/15" role="group" aria-label="Menu categories">{categories.map(c => <button key={c} onClick={() => setCategory(c)} aria-pressed={category === c} className={`shrink-0 border-b py-4 text-[10px] tracking-wide transition ${category === c ? "border-jordan-red text-ink" : "border-transparent text-muted hover:text-ink"}`}>{c}</button>)}</div>
          <h3 className="mb-6 text-xl font-medium tracking-tight text-jordan-green">{category}</h3>
          <div className="grid gap-5 md:grid-cols-2">{shown.map(d => <article key={d.name} className="flex min-h-40 items-center justify-between gap-5 border border-ink/15 bg-white p-5 md:p-6">
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4"><h4 className="text-base font-medium tracking-tight md:text-lg">{d.name}</h4><span className="shrink-0 text-sm font-medium text-jordan-green">${d.price}</span></div>
              {d.description && <p className="mt-3 max-w-sm text-xs leading-6 text-muted">{d.description}</p>}
              {d.arabic && <p lang="ar" dir="rtl" className="mt-3 w-fit font-serif text-xl text-jordan-red">{d.arabic}</p>}
            </div>
            <div className="relative size-24 shrink-0 overflow-hidden bg-linen md:size-28"><Image fill sizes="112px" className="object-cover" src={foodImage(d.image)} alt={d.name} /></div>
          </article>)}</div>
        </section>

        <section aria-label="Our food philosophy" className="mx-auto grid max-w-[1440px] grid-cols-2 gap-3 px-6 pb-12 pt-8 md:gap-5 md:px-12 md:pb-20 md:pt-12 lg:grid-cols-4">
          {[
            { title: "Freshly prepared", description: "Fresh ingredients, thoughtfully brought together.", icon: "M19 5C9 3 3 9 7 17c8 4 14-2 12-12ZM5 21 15 11M9 17v-5m0 5h5" },
            { title: "Fragrant spices", description: "Warm aromas and beautifully balanced flavour.", icon: "M5 14h14a7 7 0 0 1-14 0ZM9 21h6M8 10c-3-3 3-4 0-7m5 7c-3-3 3-4 0-7m5 7c-3-3 3-4 0-7" },
            { title: "Charcoal grilled", description: "A gentle smoke. A distinctive depth of flavour.", icon: "M12 3c1 4 5 5 5 9a5 5 0 0 1-10 0c0-2 1-4 3-5 0 3 1 3 2 4 2-3 0-5 0-8ZM5 21l14-3M5 18l14 3" },
            { title: "Made to share", description: "Generous plates for the whole table.", icon: "M3 15h18M5 15a7 7 0 0 1 14 0M12 6V4m-2 0h4M4 19h16" },
          ].map(item => (
            <article key={item.title} className="border border-jordan-green/15 border-t-2 border-t-jordan-red bg-white p-5 md:p-7">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mb-6 size-7 text-jordan-red"><path d={item.icon} /></svg>
              <h2 className="text-sm font-medium tracking-tight text-jordan-green md:text-base">{item.title}</h2>
              <p className="mt-2 max-w-52 text-[11px] leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </section>

        <section id="kitchen" className="bg-linen">
          <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
            <div className="relative min-h-[420px] md:my-12 md:ml-12 lg:min-h-[530px]"><Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" src={foodImage("37417607")} alt="Grilled Middle Eastern kebab served with hummus, pita, herbs and roasted vegetables" /></div>
            <div className="flex flex-col items-start justify-center px-6 py-12 md:p-12 lg:p-20"><p className="text-[9px] uppercase tracking-[0.25em] text-jordan-red">The heart of our cooking</p><h2 className="mt-5 font-sans font-medium text-4xl leading-[1.15] tracking-[-0.04em] lg:text-5xl">A little patience.<br /><em className="font-normal not-italic text-jordan-green">A depth of flavour.</em></h2><p className="mt-7 max-w-sm text-xs leading-7 text-muted">The earthiness of tahini. The brightness of lemon. The gentle smoke of the grill. Our menu celebrates the ingredients and preparations that make Middle Eastern food so distinctive.</p><div className="mt-8 grid w-full grid-cols-2 gap-6 border-t border-ink/15 pt-6"><div><h3 className="font-sans font-medium text-xl text-jordan-green">The mezze table</h3><p className="mt-2 text-[10px] leading-6 text-muted">Creamy dips, crisp vegetables<br />and warm bread.</p></div><div><h3 className="font-sans font-medium text-xl text-jordan-green">From the charcoal</h3><p className="mt-2 text-[10px] leading-6 text-muted">Carefully spiced, beautifully<br />grilled, generously served.</p></div></div><button onClick={() => { setCategory("Tarboosh Grill & Platters"); document.getElementById("menu")?.scrollIntoView(); }} className="mt-8 flex items-center gap-10 border-b border-jordan-red pb-3 text-[10px] tracking-wider text-jordan-green">Explore the grill <Arrow /></button></div>
          </div>
        </section>

        <section id="sweets" className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-12 md:py-24">
          <div className="md:pr-8"><p className="text-[9px] uppercase tracking-[0.25em] text-jordan-red">The final course</p><h2 className="mt-5 font-sans font-medium text-4xl leading-tight tracking-[-0.04em] lg:text-5xl">Something<br /><em className="font-normal not-italic text-jordan-green">beautifully sweet.</em></h2><p className="mt-6 max-w-xs text-xs leading-7 text-muted">Golden pastry, finely crushed pistachios and a delicate touch of syrup. A fitting finish to a generous Middle Eastern table.</p><button onClick={() => { setCategory("Sweet endings"); document.getElementById("menu")?.scrollIntoView(); }} className="mt-8 flex items-center gap-10 border-b border-jordan-red pb-3 text-[10px] tracking-wider text-jordan-green">Discover our desserts <Arrow /></button></div>
          <div className="relative min-h-80 md:min-h-[420px]"><Image fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" src={foodImage("20183046")} alt="Golden baklava pieces filled with pistachio, served on a ceramic plate" /><span className="absolute bottom-5 left-5 bg-paper/95 px-4 py-3 text-[9px] tracking-wider text-jordan-green">Pistachio baklava</span></div>
        </section>
        <section id="location" aria-labelledby="location-title" className="border-t border-ink/10 bg-linen">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:px-12 md:py-20">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-jordan-red">Find us in West Palm Beach</p>
              <h2 id="location-title" className="mt-4 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">Good food.<br />Close to home.</h2>
              <p className="mt-5 max-w-xs text-xs leading-7 text-muted">Join us for your favourite Middle Eastern flavours on South Military Trail.</p>
            </div>
            <div className="border border-ink/15 bg-paper p-7 md:p-10">
              <div className="flex items-start gap-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true" className="size-7 shrink-0 text-jordan-red"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                <div><h3 className="text-base font-medium">Tarbooch Restaurant & Café</h3><address className="mt-3 text-sm not-italic leading-7 text-muted">1233 S Military Trail, Apt B<br />West Palm Beach, FL 33413</address><a href="tel:+15614331164" className="mt-4 inline-block text-sm text-jordan-green underline-offset-4 hover:underline">(561) 433-1164</a></div>
              </div>
              <a href="https://www.google.com/maps/dir/?api=1&destination=1233+S+Military+Trail+Apt+B+West+Palm+Beach+FL+33413" target="_blank" rel="noopener noreferrer" aria-label="Get directions on Google Maps (opens in a new tab)" className="mt-7 flex w-fit items-center gap-10 bg-jordan-green px-6 py-4 text-[10px] uppercase tracking-[0.16em] text-paper transition hover:bg-ink">Get directions <Arrow /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-ink px-6 py-12 text-paper md:px-12 md:py-16">
        <div className="mx-auto max-w-[1344px]"><div className="flex flex-col items-center gap-6 text-center"><a href="#" className="font-sans font-medium text-3xl tracking-tight">Tarbooch.</a><span className="text-[9px] tracking-wide text-paper/55">© 2026 Tarbooch Restaurant & Café</span><a href="#" className="text-[9px] tracking-wide text-paper/70">Back to top ↑</a></div></div>
        <p lang="ar" dir="rtl" className="mt-10 text-center font-serif text-3xl text-paper">صحة وهنا</p>
      </footer>

    </>
  );
}
