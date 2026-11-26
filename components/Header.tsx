
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/helfer-enterprise", label: "Helfer Enterprise" },
  { href: "/marjan-traders", label: "Marjan Traders" },
  { href: "/contact", label: "Contact Us", cta: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Helfer Industrial Solutions home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Helfer Industrial Solutions Logo"
            width={180}
            height={65}
            priority
            className="brand-logo"
          />

          <span className="brand-name">
            Helfer Industrial Solutions
            <small>Industrial Vacuum & Engineering Solutions</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav
          id="main-navigation"
          className={`nav ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                pathname === item.href ? "active " : ""
              }${item.cta ? "header-cta" : ""}`}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
