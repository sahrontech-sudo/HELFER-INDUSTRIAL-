import Link from "next/link";
import { ClipboardCheck, Search, MapPin, Wrench, Package, RefreshCw, Settings, Headset } from "lucide-react";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata = { title: "Industrial Services" };
const icons = [ClipboardCheck,Search,MapPin,Settings,Wrench,Package,RefreshCw,Headset];

export default function ServicesPage() {
  return <>
    <PageHero title="Reliable Service. Better Performance. Complete Support." description="We provide industrial vacuum system inspection, troubleshooting, maintenance support and spare-parts solutions to help industries maintain efficient equipment operations." eyebrow="Our Industrial Services"/>
    <section className="section"><div className="container">
      <div className="section-heading center"><p className="kicker">Our Services</p><h2>Industrial Vacuum & Engineering Support</h2><p>Our focus is on understanding your requirements and providing dependable technical assistance.</p></div>
      <div className="service-grid">{services.map((s,i)=>{const Icon=icons[i];return <div className="service-tile" key={s}><Icon size={26}/><h3>{s}</h3></div>})}</div>
    </div></section>
    <section className="section section-soft"><div className="container" style={{textAlign:"center"}}><p className="kicker">Need Industrial Service Support?</p><h2>Talk to Our Team About Your Equipment</h2><p className="lead" style={{maxWidth:700,margin:"0 auto 25px"}}>Contact our team for product enquiries, maintenance and service requirements. Share the equipment details and the issue you are experiencing.</p><div className="button-row" style={{justifyContent:"center"}}><Link className="btn btn-primary" href="/contact?subject=Service%20requirement">Request Service</Link><Link className="btn btn-dark-outline" href="/contact">Contact Us</Link></div></div></section>
  </>;
}
