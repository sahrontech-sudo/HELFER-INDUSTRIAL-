import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return <>
    <PageHero title="Delivering Reliable Industrial Solutions Through Quality & Expertise" description="Your trusted source for industrial vacuum systems, pumps, transmission components, spare parts and engineering solutions." eyebrow="About Helfer Industrial Solutions"/>
    <section className="section"><div className="container split">
      <div><p className="kicker">Who We Are</p><h2>Your Trusted Partner in Industrial Engineering Solutions</h2>
        <p className="lead">Helfer Industrial Solutions is an industrial products and engineering solutions business based in GIDC Vapi, Gujarat, India.</p>
        <ul className="check-list">
          <li><CheckCircle2/>We deal in industrial vacuum systems, vacuum pumps, mechanical components, transmission products, heat exchangers, maintenance kits and industrial spare parts.</li>
          <li><CheckCircle2/>We focus on product quality, technical assistance and customer satisfaction to support efficient industrial operations.</li>
          <li><CheckCircle2/>Our product portfolio includes solutions from brands such as Helfer, Mechvac Technologies and Weicon.</li>
          <li><CheckCircle2/>We aim to build long-term business relationships by understanding customer requirements and offering suitable industrial solutions.</li>
        </ul><Link href="/contact" className="btn btn-primary">Discuss Your Requirement</Link>
      </div>
      <div className="image-panel" role="img" aria-label="Industrial engineering and manufacturing facility"/>
    </div></section>
    <section className="section section-soft"><div className="container"><div className="section-heading center"><p className="kicker">Our Direction</p><h2>Our Vision & Mission</h2></div><div className="two-col">
      <div className="info-panel"><h3>Our Vision</h3><p>To become a trusted name in industrial vacuum and engineering solutions by delivering quality products, dependable support and value-driven industrial services.</p></div>
      <div className="info-panel"><h3>Our Mission</h3><p>To understand industrial requirements and provide suitable products, genuine spare parts and reliable technical assistance that help customers maintain efficient and dependable operations.</p></div>
    </div></div></section>
  </>;
}
