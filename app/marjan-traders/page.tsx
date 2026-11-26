import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Marjan Traders" };

export default function MarjanTradersPage() {
  return <>
    <PageHero title="Marjan Traders" description="A dedicated section for Marjan Traders." eyebrow="Helfer Group"/>
    <section className="section"><div className="container" style={{maxWidth:850}}>
      <div className="section-heading"><p className="kicker">Business Division</p><h2>Marjan Traders</h2><p>The reference PDF lists Marjan Traders in the main navigation but does not include its business description, products, services or contact information. This page is ready for verified content.</p></div>
      <div className="info-panel"><h3>Division information to be added</h3><p>Please provide the official business profile, product categories, target customers, contact details and approved images before this page is published with detailed claims.</p></div>
      <div style={{marginTop:25}}><Link className="btn btn-primary" href="/contact?subject=Marjan%20Traders%20enquiry">Contact Us</Link></div>
    </div></section>
  </>;
}
