import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { site } from "@/lib/site";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return <>
    <PageHero title="Let's Connect & Find the Right Industrial Solution" description="Have a product enquiry, service requirement or need a quotation? Our team is ready to assist you." eyebrow="Get In Touch"/>
    <section className="section"><div className="container">
      <div className="section-heading center"><p className="kicker">Get In Touch With Us</p><h2>How Can We Help You?</h2></div>
      <div className="contact-layout">
        <aside className="contact-info"><h2>Contact Details</h2><p>Reach out to discuss industrial products, spare parts, service support or a quotation.</p>
          <div className="contact-detail"><MapPin/><span>{site.address}</span></div>
          <div className="contact-detail"><Mail/><a href={`mailto:${site.email}`}>{site.email}</a></div>
          <div className="contact-detail"><Phone/><span><a href="tel:+919313899645">{site.phone}</a><br/><a href="tel:+918238298326">{site.alternatePhone}</a></span></div>
          <div className="contact-detail"><Globe/><a href={site.website} target="_blank" rel="noreferrer">www.helfer-group.com</a></div>
          <p style={{marginTop:35}}>Have a product enquiry, service requirement or need a quotation? Our team is ready to assist you.</p>
        </aside>
        <ContactForm/>
      </div>
    </div></section>
  </>;
}
