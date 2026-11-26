
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Headset,
  Truck,
  Wrench,
  CheckCircle2,
  Settings,
  ShieldCheck,
  Factory,
  Phone,
  Globe,
  Send,
  Mail,
  MapPin,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
const products = [
  {
    slug: "industrial-vacuum-systems",
    name: "Industrial Vacuum Systems",
    description: "Reliable vacuum solutions for demanding industrial applications.",
    image: "/images/hero.png",
  },
  {
    slug: "industrial-pumps",
    name: "Industrial Pumps",
    description: "Dependable pumping equipment for a wide range of industries.",
    image: "/images/hero.png",
  },
  {
    slug: "engineering-components",
    name: "Engineering Components",
    description: "Quality mechanical and transmission components for industrial use.",
    image: "/images/hero.png",
  },
  {
    slug: "spare-parts-and-maintenance",
    name: "Spare Parts & Maintenance Supplies",
    description: "Genuine spare parts and supplies to help keep operations running.",
    image: "/images/hero.png",
  },
];

const services = [
  "Industrial Vacuum Solutions",
  "Pump Supply and Support",
  "Spare Parts and Maintenance",
  "Technical Assistance",
];

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="eyebrow">
              INDUSTRIAL VACUUM & ENGINEERING SOLUTIONS
            </p>

            <h1>
              Reliable Engineering.
              <br />
              Powerful Industrial Solutions.
            </h1>

            <p>
              Your trusted partner for industrial vacuum systems, pumps,
              engineering components, genuine spare parts and technical
              support.
            </p>

            <div className="button-row">
              <Link className="btn btn-primary" href="/products">
                Explore Products <ArrowRight size={17} />
              </Link>

              <Link className="btn btn-outline" href="/contact">
                Contact Our Team
              </Link>
            </div>

            <div className="hero-highlights">
              <span><CheckCircle2 size={16} /> Quality Products</span>
              <span><CheckCircle2 size={16} /> Expert Support</span>
              <span><CheckCircle2 size={16} /> Reliable Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-item">
            <BadgeCheck className="trust-icon" />
            <div>
              <strong>Trusted Brands</strong>
              <span>Helfer • Mechvac • Weicon</span>
            </div>
          </div>

          <div className="trust-item">
            <ShieldCheck className="trust-icon" />
            <div>
              <strong>Quality Products</strong>
              <span>Genuine and reliable</span>
            </div>
          </div>

          <div className="trust-item">
            <Headset className="trust-icon" />
            <div>
              <strong>Technical Support</strong>
              <span>Professional assistance</span>
            </div>
          </div>

          <div className="trust-item">
            <Truck className="trust-icon" />
            <div>
              <strong>Delivery Support</strong>
              <span>Across India</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="kicker">ABOUT HELFER INDUSTRIAL SOLUTIONS</p>

            <h2>
              Engineering Solutions That Keep Industries Moving
            </h2>

            <p className="lead">
              Helfer Industrial Solutions is a supplier and service provider
              of industrial vacuum systems, pumps and allied engineering
              components. We support industrial customers with quality
              products, genuine spare parts and technical services.
            </p>

            <ul className="check-list">
              <li><CheckCircle2 /> Industrial vacuum systems and pumps</li>
              <li><CheckCircle2 /> Mechanical and transmission components</li>
              <li><CheckCircle2 /> Maintenance supplies and spare parts</li>
              <li><CheckCircle2 /> Technical assistance and service support</li>
            </ul>

            <Link className="btn btn-primary" href="/about">
              Discover Our Company <ArrowRight size={16} />
            </Link>
          </div>

          <div className="image-panel">
            <Image
              src="/images/godown.png"
              alt="Helfer Industrial Solutions"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      
      
{/* PRODUCTS SECTION */}
<section className="products-showcase">
  <div className="container">
    <div className="products-heading">
      <span className="products-kicker">OUR PRODUCTS & SOLUTIONS</span>

      <h2>
        Industrial Products for
        <span> Every Requirement</span>
      </h2>

      <p>
        Explore our range of industrial vacuum systems, pumps,
        mechanical components, spare parts and maintenance supplies.
      </p>
    </div>

    <div className="products-grid">
      {products.slice(0, 4).map((p) => (
        <article className="product-glass-card" key={p.slug}>
          <Link
            href={`/products/${p.slug}`}
            className="product-card-link"
            aria-label={`View ${p.name}`}
          >
            <div className="product-gloss-image">
              <Image
                src={p.image}
                alt={p.name}
                width={600}
                height={360}
              />
              <span className="product-image-shine" />
            </div>

            <div className="product-glass-body">
              <h3>{p.name}</h3>
              <p>{p.description}</p>

              <span className="product-view-link">
                View Product <ArrowRight size={17} />
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>

    <div className="products-footer">
      <Link className="products-explore-btn" href="/products">
        Explore All Products <ArrowRight size={18} />
      </Link>
    </div>
  </div>
</section>


      
{/* SERVICES SECTION */}
<section className="services-showcase">
  <div className="container">
    <div className="services-heading">
      <span className="services-kicker">WHAT WE DO</span>

      <h2>
        Complete Industrial
        <span> Support Services</span>
      </h2>

      <p>
        Supporting industrial operations with product expertise,
        maintenance assistance and reliable engineering solutions.
        We help businesses keep their operations efficient and productive.
      </p>
    </div>

    <div className="services-grid">
      {services.map((service, index) => (
        <div className="service-glass-card" key={service}>
          <div className="service-icon-box">
            <Wrench size={27} strokeWidth={1.8} />
          </div>

          <span className="service-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3>{service}</h3>

          <div className="service-card-line" />
        </div>
      ))}
    </div>
  </div>
</section>


      
{/* INDUSTRIES SECTION */}
<section className="industries-section">
  <div className="container">
    <div className="industries-heading">
      <span>INDUSTRIES WE SUPPORT</span>
      <h2>Industries We Serve</h2>
    </div>

    <div className="industries-grid">
      <div className="industry-item">
        <Factory size={23} />
        <h3>Manufacturing</h3>
      </div>

      <div className="industry-item">
        <Settings size={23} />
        <h3>Engineering</h3>
      </div>

      <div className="industry-item">
        <Wrench size={23} />
        <h3>Automotive</h3>
      </div>

      <div className="industry-item">
        <ShieldCheck size={23} />
        <h3>Industrial Maintenance</h3>
      </div>
    </div>
  </div>
</section>


     
{/* CONTACT SECTION */}
<section className="contact-showcase" id="contact">
  <div className="container">
    <div className="contact-heading">
      <span className="contact-kicker">GET IN TOUCH WITH US</span>
      <h2>How Can We Help You?</h2>
      <p>
        Have a product enquiry, service requirement or need a quotation?
        Our team is ready to assist you.
      </p>
    </div>

    <div className="contact-layout">

      {/* CONTACT DETAILS */}
      <div className="contact-info-panel">
        <span className="contact-info-label">CONTACT DETAILS</span>
        <h3>Let's Discuss Your Industrial Requirements</h3>

        <p className="contact-info-description">
          Reach out to discuss industrial products, spare parts,
          service support or a quotation.
        </p>

        <div className="contact-info-list">

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <MapPin size={21} />
            </div>
            <div>
              <h4>Our Location</h4>
              <p>
                SVG06, Plot No. 129/1, Opp. Zudio,
                GIDC Vapi – 396195, Gujarat, India
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Mail size={21} />
            </div>
            <div>
              <h4>Email Address</h4>
              <a href="mailto:helfer.solution@gmail.com">
                helfer.solution@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Phone size={21} />
            </div>
            <div>
              <h4>Phone Numbers</h4>
              <a href="tel:+919313899645">+91 9313899645</a>
              <a href="tel:+918238298326">+91 8238298326</a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Globe size={21} />
            </div>
            <div>
              <h4>Website</h4>
              <a
                href="https://www.helfer-group.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.helfer-group.com
              </a>
            </div>
          </div>

        </div>

        <div className="contact-info-footer">
          <span className="contact-status-dot" />
          <span>Ready to assist with your requirements</span>
        </div>
      </div>

      {/* ENQUIRY FORM */}
      <div className="contact-form-card">
        <div className="contact-form-heading">
          <span>HAVE AN ENQUIRY?</span>
          <h3>Send Us a Message</h3>
          <p>Fill in the details below and our team can assist you.</p>
        </div>

<ContactForm />
      </div>

    </div>
  </div>
</section>
      
    </main>
  );
}
