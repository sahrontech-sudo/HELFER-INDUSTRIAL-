import PageHero from "@/components/PageHero";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return <>
    <PageHero title="Trusted by Industries Across Gujarat" description="Customer feedback helps us understand what matters: suitable products, dependable communication and delivery coordination." eyebrow="What Our Clients Say"/>
    <section className="section"><div className="container">
      <div className="section-heading center"><p className="kicker">Customer Feedback</p><h2>Building Reliable Business Relationships</h2><p>The supplied reference includes one testimonial attributed to Ramesh Patel of Shreeji Engineering. It is shown once here rather than repeating the same quote in multiple cards.</p></div>
      <div style={{maxWidth:720,margin:"0 auto"}} className="testimonial"><div className="stars" aria-label="Five stars">★★★★★</div><blockquote>“Excellent quality material and on-time delivery. Very reliable steel supplier in Bhavnagar.”</blockquote><strong>Ramesh Patel</strong><span>Shreeji Engineering</span><p className="form-note" style={{marginTop:15}}>Please confirm this testimonial and permission to publish it before the website goes live. The wording is reproduced from the supplied reference PDF.</p></div>
    </div></section>
  </>;
}
