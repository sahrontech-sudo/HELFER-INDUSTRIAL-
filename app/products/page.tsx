import Link from "next/link";
import { ArrowRight, ShieldCheck, Settings, Headphones, Handshake } from "lucide-react";
import PageHero from "@/components/PageHero";

const products = [
  {
    slug: "mechanical-components",
    name: "Mechanical Components",
    description: "Components for industrial machinery, equipment and maintenance applications.",
  },
  {
    slug: "spare-parts",
    name: "Industrial Spare Parts",
    description: "Replacement parts to support equipment servicing and operational uptime.",
  },
  {
    slug: "maintenance-supplies",
    name: "Maintenance Supplies",
    description: "Practical supplies for routine industrial maintenance and repair work.",
  },
];

export const metadata = { title: "Industrial Products" };

export default function ProductsPage() {
  return <>
    <PageHero title="High-Quality Industrial Products" description="Wide range of industrial products, mechanical components, spare parts and maintenance supplies from trusted brands." eyebrow="Our Products"/>
    <section className="section"><div className="container">
      <div className="trust-grid" style={{marginBottom:35}}>
        <div className="trust-item"><ShieldCheck className="trust-icon"/><div><strong>Reliable Quality</strong><span>Product-focused support</span></div></div>
        <div className="trust-item"><Settings className="trust-icon"/><div><strong>Comprehensive Range</strong><span>Industrial applications</span></div></div>
        <div className="trust-item"><Headphones className="trust-icon"/><div><strong>Technical Support</strong><span>Application assistance</span></div></div>
        <div className="trust-item"><Handshake className="trust-icon"/><div><strong>Long-Term Partnership</strong><span>Customer relationships</span></div></div>
      </div>
      <div className="section-heading center"><p className="kicker">Our Product Range</p><h2>Industrial Products & Components</h2><p>Contact our team with your application details, equipment model or part requirements to check suitability and availability.</p></div>
      <div className="cards">{products.map(p=><article className="card" key={p.slug}><div className="card-image" aria-hidden="true"><Settings className="trust-icon"/></div><div className="card-body"><h3>{p.name}</h3><p>{p.description}</p><div className="button-row"><Link className="btn btn-primary" href={`/products/${p.slug}`}>View Details</Link><Link className="btn btn-dark-outline" href={`/contact?subject=${encodeURIComponent("Enquiry: "+p.name)}`}>Enquire</Link></div></div></article>)}</div>
    </div></section>
  </>;
}
