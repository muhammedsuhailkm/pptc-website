import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Precision Presstools & Components | Coimbatore",
  description:
    "OEM manufacturers with 40+ years of legacy. Bauer-type lever-lock couplings and pressed sheet-metal components from Coimbatore.",
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-visual">
          <img src="/images/shop-floor.jpg" alt="Press shop floor" />
          <div className="hero-overlay">
            <div className="wrap">
              <p className="eyebrow">Manufacturer · Exporter · Coimbatore</p>
              <h1>OEM Manufacturers with 40+ years of Legacy</h1>
              <p>Sheet-metal stampings, pressed assemblies and Bauer-type couplings. Supplying India OEMs and the Middle East from our Coimbatore plant.</p>
              <div className="hero-actions">
                <Link className="btn btn-accent" href="/products">View products</Link>
                <Link className="btn btn-light" href="/contact">Request a quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Plant</p>
            <h2>15,000 sq ft press shop in Coimbatore.</h2>
            <p className="lede">Presses to 200 tons. Shear to 12 mm. Team of 51–100 under M. Prabhakaran. Parts checked in-house. Supplying India OEMs and the Middle East.</p>
            <div className="capacity">
              <div className="cap"><strong>Pressing</strong><span className="lede">Up to 200 tonnes</span></div>
              <div className="cap"><strong>Shearing</strong><span className="lede">Up to 12 mm</span></div>
              <div className="cap"><strong>Team</strong><span className="lede">51–100 people</span></div>
            </div>
          </div>
          <div className="photo"><img src="/images/press.jpg" alt="Industrial press" /></div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Product range</p>
          <h2>Pressed parts for farm, textile and industrial OEMs.</h2>
          <div className="cards" style={{ marginTop: 28 }}>
            <article className="card">
              <p className="tag">01</p>
              <h3>Stampings &amp; pressed parts</h3>
              <p>200+ types and sizes to 12 mm. Farm and textile OE plus replacements.</p>
            </article>
            <article className="card">
              <p className="tag">02</p>
              <h3>Cutter assembly</h3>
              <p>Power-reaper cutter. Rigid build, high tensile, made in-house.</p>
            </article>
            <article className="card">
              <p className="tag">03</p>
              <h3>Chain case</h3>
              <p>Drive cover for power reaper. Protects the chain from soil.</p>
            </article>
            <article className="card">
              <p className="tag">04</p>
              <h3>Diesel tank</h3>
              <p>Pressed and welded tank for power reapers. Industrial finish.</p>
            </article>
            <article className="card">
              <p className="tag">05</p>
              <h3>Clutch lever &amp; bearing caps</h3>
              <p>Control levers and conveyor-roller caps. In-house press and assembly.</p>
            </article>
            <article className="card">
              <p className="tag">06</p>
              <h3>Bauer / Spigot set</h3>
              <p>Lever-lock couplings for dewatering lines. 75, 100, 150 mm.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="eyebrow">Lead product for the Gulf</p>
          <h2>Bauer-type lever-lock couplings</h2>
          <p className="lede" style={{ marginTop: 12, maxWidth: "60ch" }}>75, 100 and 150 mm spigot sets. 3–5 mm MS body, 12 mm flanges. Galvanised mild steel. In-house press and fabricate. Rapid-action hose coupling for temporary water, slurry and dewatering lines.</p>
          <div className="facts" style={{ marginTop: 28 }}>
            <div className="fact"><strong>75 · 100 · 150 mm</strong><span>Hose sizes</span></div>
            <div className="fact"><strong>3–5 mm MS</strong><span>Body thickness</span></div>
            <div className="fact"><strong>12 mm flanges</strong><span>MS plate</span></div>
            <div className="fact"><strong>Lever-lock</strong><span>HK / Bauer-type</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
