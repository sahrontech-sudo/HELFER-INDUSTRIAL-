import PageHero from "@/components/PageHero";
import { Building2, Boxes, Wrench, ClipboardCheck } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Infrastructure" };

export default function InfrastructurePage() {
  return <>
    <PageHero title="Industrial Product & Service Support" description="A practical point of contact for industrial vacuum systems, pumps, components, spare parts and service requirements." eyebrow="Infrastructure"/>
    <section className="section"><div className="container">
      <div className="section-heading center"><p className="kicker">How We Support Requirements</p><h2>Product Coordination & Technical Assistance</h2><p>The supplied company profile does not include verified facility photographs, workshop specifications or equipment capacity. This page therefore describes the support areas without claiming unverified infrastructure.</p></div>
      <div className="cards">
        <div className="info-panel"><Building2 color="#0876d9" size={30}/><h3>GIDC Vapi, Gujarat</h3><p>Business contact location listed in the supplied company profile.</p></div>
        <div className="info-panel"><Boxes color="#0876d9" size={30}/><h3>Product Range</h3><p>Industrial vacuum systems, pumps, mechanical and transmission components, heat exchangers and spare parts.</p></div>
        <div className="info-panel"><Wrench color="#0876d9" size={30}/><h3>Service Support</h3><p>Inspection, troubleshooting, on-site and off-site service and maintenance support.</p></div>
        <div className="info-panel"><ClipboardCheck color="#0876d9" size={30}/><h3>Requirement Review</h3><p>Share application and equipment information so the team can review the requirement.</p></div>
      </div>
      <div style={{textAlign:"center",marginTop:35}}><Link href="/contact" className="btn btn-primary">Discuss Your Requirement</Link></div>
    </div></section>
  </>;
}
