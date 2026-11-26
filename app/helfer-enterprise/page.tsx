import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Helfer Enterprise" };

export default function HelferEnterprisePage() {
  return <>
    <PageHero title="Helfer Enterprise" description="A dedicated section for the Helfer Enterprise business division." eyebrow="Helfer Group"/>
    <section className="section"><div className="container" style={{maxWidth:850}}>
      <div className="section-heading"><p className="kicker">Business Division</p><h2>Tell Us What You Need</h2><p>The reference PDF lists Helfer Enterprise in the main navigation but does not provide its products, services or company profile. This page is intentionally kept factual until the correct division details are supplied.</p></div>
      <div className="info-panel"><h3>Division information to be added</h3><p>Share the official description, product or service list, contact details and any approved photographs for this division. We can then build a complete dedicated page without making assumptions.</p></div>
      <div style={{marginTop:25}}><Link className="btn btn-primary" href="/contact?subject=Helfer%20Enterprise%20enquiry">Contact Us</Link></div>
    </div></section>
  </>;
}
