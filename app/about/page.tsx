import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Precision Presstools & Components",
  description:
    "Coimbatore manufacturer of sheet metal stampings and Bauer-type couplings. 15,000 sq ft plant. GST 33AFPPP0978N1ZO.",
};

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">About</p>
          <h1>Pressed components from Coimbatore.</h1>
          <p className="lede" style={{ marginTop: 16, maxWidth: "60ch" }}>Precision Presstools And Components manufactures sheet-metal stampings and pressed assemblies from a 15,000 sq ft plant. Presses to 200 tons. Shear to 12 mm. Lead product for the Gulf: Bauer-type lever-lock couplings.</p>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <p className="lede">The work is pressing, shearing, machining and light fabrication. Raw material is bought to grade, parts are produced under shop supervision, and each lot is examined against the drawing before it is packed.</p>
            <p className="lede">Legal status is a proprietorship. The company CEO is M. Prabhakaran. GSTIN 33AFPPP0978N1ZO. Nature of business: manufacturer / factory. India OEMs and Middle East markets.</p>
            <div className="capacity" style={{ marginTop: 24 }}>
              <div className="cap"><strong>Plant</strong><span className="lede">15,000 sq ft, Coimbatore</span></div>
              <div className="cap"><strong>Capacity</strong><span className="lede">200 T press · 12 mm shear</span></div>
              <div className="cap"><strong>Team</strong><span className="lede">51–100 · M. Prabhakaran</span></div>
            </div>
          </div>
          <div className="photo"><img src="/images/inspection.jpg" alt="Inspection of pressed components" /></div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="eyebrow">Market</p>
          <h2>India OEMs and the Middle East.</h2>
          <p className="lede" style={{ marginTop: 12 }}>Bauer-type couplings for GCC dewatering. Pressed parts for farm and textile OEMs. Manufacturer · Exporter · Supplier.</p>
        </div>
      </section>
    </>
  );
}
