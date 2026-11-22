import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact | Precision Presstools & Components, Coimbatore",
  description:
    "Contact Precision Presstools And Components in Coimbatore for Bauer couplings and pressed parts.",
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
  );
}

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Send a drawing or a part number.</h1>
          <p className="lede" style={{ marginTop: 14, maxWidth: "54ch" }}>Bauer-type couplings, stampings, pressed parts. Tell us the size, material and quantity.</p>
        </div>
      </section>
      <section>
        <div className="wrap contact-grid">
          <aside className="contact-card">
            <div className="detail"><span>Works</span><strong>Precision Presstools And Components</strong><br />38-A, South Street 2, Avarampalayam<br />Ganapathy P.O., Coimbatore 641006<br />Tamil Nadu, India</div>
            <div className="detail">
              <span>Mobile &amp; WhatsApp</span>
              <div className="contact-links">
                <div className="contact-link">
                  <PhoneIcon />
                  <WhatsAppIcon />
                  <a href="https://wa.me/919629051346" target="_blank" rel="noopener">+91 96290 51346</a>
                </div>
                <div className="contact-link">
                  <PhoneIcon />
                  <WhatsAppIcon />
                  <a href="https://wa.me/97477595529" target="_blank" rel="noopener">+974 7759 5529</a>
                </div>
              </div>
            </div>
            <div className="detail"><span>CEO</span><strong>M. Prabhakaran</strong></div>
            <div className="detail"><span>GSTIN</span><strong>33AFPPP0978N1ZO</strong></div>
            <div className="detail"><span>IndiaMART</span><a href="https://www.indiamart.com/precision-presstools-components/" target="_blank" rel="noopener">indiamart.com/precision-presstools-components</a></div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
