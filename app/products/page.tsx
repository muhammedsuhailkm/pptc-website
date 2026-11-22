import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Precision Presstools & Components",
  description:
    "Bauer-type lever-lock couplings for GCC dewatering. Pressed components for farm and textile OEMs from Coimbatore.",
};

export default function Products() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Products</p>
          <h1>Bauer couplings first. Farm and textile pressings in support.</h1>
          <p className="lede" style={{ marginTop: 16, maxWidth: "60ch" }}>Lead product for the Gulf: Bauer-type lever-lock couplings (spigot sets) for dewatering and water lines — 75, 100 and 150 mm. Supporting range of pressed parts for farm equipment and textile machinery OEMs.</p>
        </div>
      </section>

      <section>
        <div className="wrap product-grid">
          <article className="product full">
            <img src="/images/bauer-hose.jpg" alt="Bauer-type lever-lock hose coupling" />
            <div>
              <p className="eyebrow">Featured for GCC · Bauer / Spigot set</p>
              <h3>Rapid-action hose coupling for dewatering</h3>
              <p>Lever-lock (HK / Bauer-type) fitting used on temporary water, slurry and dewatering lines in the Gulf. Male into female, secured by the lever ring. Made in three hose sizes from 3 / 4 / 5 mm MS sheet and 12 mm MS plate flanges.</p>
              <ul>
                <li>75 mm · 100 mm · 150 mm</li>
                <li>Galvanised MS</li>
                <li>In-house press + fabricate</li>
              </ul>
            </div>
          </article>

          <article className="product">
            <img src="/images/bauer-flange.jpeg" alt="Flanged Bauer-type coupling" />
            <h3>Flanged Bauer coupling</h3>
            <p>Spigot set with 12 mm flanges for rigid pipe or hose connection on dewatering lines.</p>
          </article>

          <article className="product">
            <img src="/images/cutter.jpg" alt="Power-reaper cutter assembly" />
            <h3>Cutter assembly</h3>
            <p>Power-reaper cutter. Rigid build, high tensile, made in-house. Economical OEM supply.</p>
          </article>

          <article className="product">
            <img src="/images/chain-case.jpg" alt="Chain case for power reaper" />
            <h3>Chain case</h3>
            <p>Drive cover for power reaper. Protects the chain from soil. Robust, accurate, full in-house.</p>
          </article>

          <article className="product">
            <img src="/images/stampings.jpg" alt="Stampings and pressed parts" />
            <h3>Stampings &amp; pressed parts</h3>
            <p>200+ types and sizes to 12 mm. Farm and textile OE plus replacements.</p>
          </article>

          <article className="product">
            <img src="/images/diesel-tank.jpg" alt="Diesel tank for power reaper" />
            <h3>Diesel tank</h3>
            <p>Pressed and welded tank for power reapers. Industrial finish, OEM pricing.</p>
          </article>

          <article className="product">
            <img src="/images/clutch-lever.jpg" alt="Clutch lever assembly" />
            <h3>Clutch lever assembly</h3>
            <p>Power-reaper control lever. In-house press and assembly, dimensional accuracy.</p>
          </article>

          <article className="product">
            <img src="/images/bearing-caps.jpg" alt="Roller bearing caps" />
            <h3>Roller bearing caps</h3>
            <p>Conveyor-roller caps from 2 mm CRCA (EDD). Three sizes shown.</p>
          </article>
        </div>
      </section>
    </>
  );
}
