
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const site = {
  phone: "+91 9313899645",
  alternatePhone: "+91 8238298326",
  email: "helfer.solution@gmail.com",
  address:
    "06, Plot No. 129/1, Opp. Zudio, GIDC Vapi – 396195, Gujarat, India",
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              H·E·L·F·E·R
            </Link>

            <span className="footer-tagline">
              Helfer Industrial Solutions
            </span>

            <p>
              Wide range of industrial products, mechanical components,
              spare parts and maintenance supplies from trusted brands.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul className="footer-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="footer-column">
            <h3>Our Products</h3>

            <ul className="footer-links">
              <li><Link href="/products/vacuum-pumps">Vacuum Systems & Pumps</Link></li>
              <li><Link href="/products/gear-motors">Mechanical & Transmission</Link></li>
              <li><Link href="/products">Maintenance Supplies</Link></li>
              <li><Link href="/products">Spare Parts</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <p className="footer-contact-item">
              <Phone size={16} />
              <span>
                <a href="tel:+919313899645">{site.phone}</a>
                {" / "}
                <a href="tel:+918238298326">{site.alternatePhone}</a>
              </span>
            </p>

            <p className="footer-contact-item">
              <Mail size={16} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>

            <p className="footer-contact-item">
              <MapPin size={17} />
              <span>{site.address}</span>
            </p>

            {/* SOCIAL LINKS */}
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="social-facebook"
              >
                <Facebook size={23} />
              </a>

              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="social-instagram"
              >
                <Instagram size={23} />
              </a>

              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="social-linkedin"
              >
                <Linkedin size={23} />
              </a>

              <a
                href="https://wa.me/919313899645"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
                className="social-whatsapp"
              >
                <MessageCircle size={23} />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Helfer Industrial Solutions.
            All rights reserved.
          </span>

          <span>Industrial Vacuum & Engineering Solutions</span>
        </div>
      </div>
    </footer>
  );
}
