import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Settings } from "lucide-react";
import PageHero from "@/components/PageHero";
import { products } from "@/lib/site";

export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  return { title: product?.name || "Product" };
}

export default async function ProductDetailPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();

  return <>
    <PageHero title={product.name} description={product.description} eyebrow="Product Details"/>
    <section className="section"><div className="container product-detail">
      <div className="product-detail-visual"><Settings size={100}/></div>
      <div><p className="kicker">Industrial Product</p><h2>{product.name}</h2><p className="lead">{product.detail}</p>
        <ul className="check-list">{product.features.map(f=><li key={f}><CheckCircle2/>{f}</li>)}</ul>
        <p className="form-note">Final specifications, compatibility, pricing and availability are confirmed against the actual application and supplier information.</p>
        <div className="button-row" style={{marginTop:24}}><Link className="btn btn-primary" href={`/contact?subject=${encodeURIComponent("Enquiry: "+product.name)}`}>Request a Quote</Link><Link className="btn btn-dark-outline" href="/products"><ArrowLeft size={15}/> All Products</Link></div>
      </div>
    </div></section>
  </>;
}
