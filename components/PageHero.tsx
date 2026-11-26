export default function PageHero({ title, description, eyebrow = "Helfer Industrial Solutions" }: { title: string; description: string; eyebrow?: string }) {
  return <section className="page-hero"><div className="container"><div className="breadcrumb">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div></section>;
}
