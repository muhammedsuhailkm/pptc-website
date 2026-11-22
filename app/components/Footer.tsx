import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <p>© 2026 Precision Presstools And Components, Coimbatore. GST 33AFPPP0978N1ZO</p>
        <p><Link href="/products">Products</Link> · <Link href="/contact">Contact</Link></p>
      </div>
    </footer>
  );
}
