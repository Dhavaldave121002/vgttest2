import React, { useState } from 'react';
import './web-design-ahmedabad.css';

const services = [
  ['▦','Business Website Design','Professional websites that explain your offer clearly and help customers take the next step.'],
  ['▣','Corporate Website Design','Polished, structured digital experiences for established companies and growing teams.'],
  ['◇','Ecommerce Website Design','Customer-friendly online stores with clear product journeys and checkout experiences.'],
  ['⌘','Custom Website Development','Purpose-built website functionality shaped around your business processes.'],
  ['↗','Responsive Website Design','Layouts that adapt naturally across mobiles, tablets, laptops and desktops.'],
  ['▤','Landing Page Design','Focused campaign pages designed around one clear message and conversion goal.'],
  ['⟳','Website Redesign','A thoughtful refresh for outdated websites, usability issues and changing business needs.'],
  ['⌕','SEO-Friendly Development','Accessible page structure, crawlable content and sound technical foundations.'],
  ['▧','Portfolio Website Design','A clear, visual way to present your work, capabilities and expertise.'],
  ['W','WordPress Website Development','Manageable websites with content workflows suited to your team.'],
];
const process = [
  ['01','Discovery & requirements','Understand your business, audience, goals, content and functional needs.'],
  ['02','Website planning','Define page structure, navigation, user journeys and content priorities.'],
  ['03','UI/UX design','Shape the visual direction and responsive layouts before development.'],
  ['04','Frontend development','Build accessible, responsive interfaces with maintainable components.'],
  ['05','Backend & integrations','Connect forms, CMS features and approved third-party services.'],
  ['06','SEO foundations','Implement metadata, semantic structure, internal links and structured data where appropriate.'],
  ['07','Testing & QA','Check devices, browsers, forms, accessibility, performance and broken links.'],
  ['08','Launch & handover','Deploy the approved website and provide agreed handover documentation.'],
];
const faqs = [
  ['What are professional web design services?','Professional web design services cover planning, visual design, user experience and development of a website that represents a business clearly. Depending on the project, this can include responsive layouts, content structure, ecommerce, enquiry forms, integrations and technical SEO foundations.'],
  ['How much does website design cost in Ahmedabad?','The cost depends on the number of pages, design complexity, content requirements, ecommerce features, backend functionality and integrations. Share your requirements with Vertex Global Tech to receive a project-specific quotation.'],
  ['How long does it take to design a business website?','A straightforward business website may take a few weeks, while larger websites with custom functionality or ecommerce can take longer. The timeline depends on scope, content readiness, feedback and integrations.'],
  ['Do you provide responsive website design?','Yes. Responsive design is planned for mobile, tablet and desktop screens so visitors can navigate and use the website comfortably across common devices.'],
  ['Do you provide SEO-friendly website development?','We can build SEO foundations such as crawlable page content, semantic HTML, page metadata, descriptive links, image optimization and appropriate structured data. Rankings depend on many factors beyond website development.'],
  ['Can you develop ecommerce websites?','Yes. Ecommerce projects can include product pages, category navigation, cart and checkout journeys, payment integrations and order-related functionality based on the agreed platform and scope.'],
  ['Can you redesign my existing website?','Yes. A redesign can improve visual consistency, navigation, mobile usability, content structure and performance. We first review the existing website and identify what should be retained, improved or rebuilt.'],
  ['Do you provide website maintenance?','Maintenance and support can be discussed as part of the project scope. The proposal should clearly define included updates, monitoring, backups, security work and response expectations.'],
  ['Can you integrate WhatsApp and enquiry forms?','Enquiry forms, click-to-call links and WhatsApp entry points can be integrated where the required contact details and services are available. Form submissions should be validated and securely processed.'],
  ['Why choose a professional website design company in Ahmedabad?','Working with a local-focused team can make discussions about your business, audience and market easier. Evaluate any agency by its process, relevant work, technical approach, communication and clarity about deliverables.'],
];

export default function WebDesignAhmedabad() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    setBusy(true); setStatus('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/enquiry.php', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Unable to submit enquiry. Please try again.');
      setStatus('Thanks! Your enquiry has been received. Our team will get in touch.'); form.reset();
    } catch (err) { setStatus(err.message || 'Something went wrong. Please call or email us.'); }
    finally { setBusy(false); }
  }

  return <>
    <header className="vgt-header"><a className="vgt-brand" href="/" aria-label="Vertex Global Tech home"><span className="brand-mark">V<span>.</span></span><span>VERTEX <b>GLOBAL TECH</b><small>GLOBAL VISION. VERTEX PRECISION.</small></span></a>
      <button className="vgt-menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
      <nav className={menuOpen?'vgt-nav is-open':'vgt-nav'}><a href="#services">Services</a><a href="#process">Our Process</a><a href="#why-us">Why Vertex</a><a href="#faqs">FAQs</a><a className="nav-cta" href="#contact">Let’s Talk <span>↗</span></a></nav>
    </header>

    <main>
      <section className="vgt-hero">
        <div className="hero-copy"><div className="eyebrow"><i></i> WEB DESIGN & DEVELOPMENT · AHMEDABAD</div>
          <h1>Websites that make your <em>business stand out.</em></h1>
          <p className="hero-lead">Professional web design services in Ahmedabad for businesses ready to build a stronger digital presence. Thoughtful design, responsive development and SEO-ready foundations — brought together around your goals.</p>
          <div className="hero-actions"><a className="btn-primary" href="#contact">Discuss Your Project <span>↗</span></a><a className="text-link" href="#services">Explore our services <span>↓</span></a></div>
          <div className="hero-proof"><span className="proof-icon">✳</span><span><b>Designed around your business</b><small>Clear strategy. Useful experiences. Solid execution.</small></span></div>
        </div>
        <div className="hero-visual" aria-label="Illustrative desktop and mobile website mockups">
          <div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div>
          <div className="browser-window"><div className="browser-bar"><span></span><span></span><span></span><i>yourbusiness.in</i><b>↗</b></div><div className="mock-site"><div className="mock-nav"><strong>STUDIO<span>.</span></strong><div>ABOUT&nbsp;&nbsp;&nbsp; SERVICES&nbsp;&nbsp;&nbsp; CONTACT</div><b>LET’S TALK ↗</b></div><div className="mock-content"><small>BUILT FOR WHAT’S NEXT</small><strong>Make your<br/><i>mark online.</i></strong><p>Digital experiences with purpose.</p><div className="mock-button">DISCOVER MORE ↗</div></div><div className="mock-shape shape-a"></div><div className="mock-shape shape-b"></div><div className="mock-foot"><span>STRATEGY</span><span>DESIGN</span><span>DEVELOPMENT</span></div></div></div>
          <div className="phone-window"><div className="phone-speaker"></div><div className="phone-screen"><div className="phone-top">STUDIO<span>.</span><b>☰</b></div><small>BUILT FOR WHAT’S NEXT</small><strong>Make your<br/><i>mark online.</i></strong><div className="phone-art"></div><div className="phone-cta">EXPLORE ↗</div></div></div>
          <div className="float-note note-top"><span>✳</span><div><b>Responsive by design</b><small>Every screen, considered.</small></div></div><div className="float-note note-bottom"><span>↗</span><div><b>Built with purpose</b><small>From first click to enquiry.</small></div></div>
        </div>
      </section>

      <section className="vgt-strip"><span>STRATEGY-LED</span><i></i><span>USER-FOCUSED</span><i></i><span>RESPONSIVE</span><i></i><span>SEARCH-READY</span><i></i><span>BUILT TO SCALE</span></section>

      <section className="intro-section section-pad"><div className="section-kicker">01 / A BETTER DIGITAL FIRST IMPRESSION</div><div className="intro-grid"><h2>Your website should do more than <em>look good.</em></h2><div><p className="large-copy">It should make it easy for the right people to understand what you do, trust your business and take the next step.</p><p>We bring design, development and practical SEO foundations together to create websites that are useful for your audience and aligned with your business goals.</p><a className="under-link" href="#contact">Tell us what you’re building <span>↗</span></a></div></div></section>

      <section className="services-section section-pad" id="services"><div className="section-heading"><div><div className="section-kicker">02 / WHAT WE DO</div><h2>Web solutions for <em>real business needs.</em></h2></div><p>From your first business website to a more capable digital platform, choose the support your project needs.</p></div><div className="service-grid">{services.map((s,i)=><article className="service-card" key={s[1]}><div className="service-top"><span className="service-icon">{s[0]}</span><span className="service-number">{String(i+1).padStart(2,'0')}</span></div><h3>{s[1]}</h3><p>{s[2]}</p><a href="#contact" aria-label={`Enquire about ${s[1]}`}>Discuss this service <span>↗</span></a></article>)}</div></section>

      <section className="process-section section-pad" id="process"><div className="section-heading"><div><div className="section-kicker">03 / HOW WE WORK</div><h2>A clear process. <em>From idea to launch.</em></h2></div><p>Good outcomes start with shared clarity. Here’s how we move a website project forward.</p></div><div className="process-grid">{process.map((p)=><article className="process-item" key={p[0]}><span>{p[0]}</span><div><h3>{p[1]}</h3><p>{p[2]}</p></div></article>)}</div></section>

      <section className="why-section section-pad" id="why-us"><div className="why-visual"><div className="why-visual-inner"><span className="why-label">THE VERTEX APPROACH</span><div className="why-big">Good design<br/>has a <em>job to do.</em></div><div className="why-lines"><span>01 — CLARITY</span><span>02 — EXPERIENCE</span><span>03 — PERFORMANCE</span></div><div className="why-stamp">V<span>.</span></div></div></div><div className="why-copy"><div className="section-kicker">04 / WHY VERTEX GLOBAL TECH</div><h2>Thoughtful work, <em>built around you.</em></h2><p>We look beyond how a website appears. We consider what visitors need, how information should flow and what your business needs the website to achieve.</p><ul className="check-list"><li><b>Custom to your goals</b><span>No one-size-fits-all layouts or unnecessary features.</span></li><li><b>Responsive from the start</b><span>Designed for comfortable use across screen sizes.</span></li><li><b>SEO foundations included</b><span>Clean structure and technical essentials planned into the build.</span></li><li><b>Clear communication</b><span>Defined scope, practical updates and agreed deliverables.</span></li></ul><a className="btn-dark" href="#contact">Work with Vertex <span>↗</span></a></div></section>

      <section className="features-section section-pad"><div className="section-heading"><div><div className="section-kicker">05 / BUILT-IN CAPABILITIES</div><h2>The details that make a <em>difference.</em></h2></div><p>We plan the essentials that help a website feel complete, accessible and ready for real visitors.</p></div><div className="feature-list">{['Mobile-responsive layouts','Semantic, accessible page structure','SEO metadata and canonical URLs','Optimized images and media','Enquiry form integration','Click-to-call functionality','WhatsApp integration where configured','Analytics and Search Console setup','Social media integration','CMS and content management options','Scalable component architecture','Cross-browser quality checks'].map((f,i)=><div className="feature-item" key={f}><span>{String(i+1).padStart(2,'0')}</span>{f}<b>↗</b></div>)}</div></section>

      <section className="industries-section section-pad"><div className="section-heading"><div><div className="section-kicker">06 / WHO WE WORK WITH</div><h2>Different industries. <em>Different ambitions.</em></h2></div><p>We shape the website around your audience, offer and business context — not the other way around.</p></div><div className="industry-grid">{[['01','Manufacturing & Industrial'],['02','Textile & Garments'],['03','Healthcare'],['04','Real Estate'],['05','Education'],['06','Retail & Ecommerce'],['07','Professional Services'],['08','Startups & New Ventures'],['09','Hospitality']].map(x=><div key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><i>↗</i></div>)}</div></section>

      <section className="pricing-section section-pad"><div className="pricing-card"><div><div className="section-kicker">07 / PROJECT SCOPE</div><h2>A website that fits <em>your next step.</em></h2><p>Every business has a different starting point. We’ll understand your requirements and recommend a practical scope before sharing a quotation.</p></div><div className="pricing-factors"><span>PAGE COUNT</span><span>DESIGN COMPLEXITY</span><span>FUNCTIONALITY</span><span>INTEGRATIONS</span><span>CONTENT & CMS</span><a href="#contact">Request a project estimate <b>↗</b></a></div></div></section>

      <section className="portfolio-section section-pad"><div className="section-heading"><div><div className="section-kicker">08 / SELECTED WORK</div><h2>Made for the <em>work you do.</em></h2></div><p>Every project deserves a considered approach. Explore verified work samples here as the portfolio is added.</p></div><div className="portfolio-placeholder"><div className="portfolio-art"><div className="portfolio-browser"><div className="portfolio-bar"><i></i><i></i><i></i></div><div className="portfolio-layout"><div><small>PROJECT PREVIEW</small><b>Make space<br/>for <em>better.</em></b><span></span></div><div className="portfolio-block"></div></div></div></div><div className="portfolio-caption"><div><span>PORTFOLIO UPDATE</span><h3>Real projects. Real outcomes.</h3><p>Verified project screenshots, descriptions and live links can be added here.</p></div><a href="#contact">Discuss your project ↗</a></div></div></section>

      <section className="local-section section-pad"><div className="local-copy"><div className="section-kicker">09 / AHMEDABAD, GUJARAT</div><h2>Supporting businesses <em>across Ahmedabad.</em></h2><p>Vertex Global Tech works with businesses looking for professional web design and development in Ahmedabad. Whether your team is based in a commercial hub, an industrial area or a growing neighbourhood, we can discuss your website requirements and the right way to approach them.</p><div className="local-tags">{['SG Highway','Satellite','Prahlad Nagar','Navrangpura','CG Road','Vastrapur','Bodakdev','Bopal','Maninagar','Narol','Vatva','Nikol','Chandkheda','Gota'].map(x=><span key={x}>{x}</span>)}</div></div><div className="local-art"><div className="local-circle circle-a"></div><div className="local-circle circle-b"></div><div className="local-pin">✳</div><div className="local-art-label">AHMEDABAD<br/><small>GUJARAT, INDIA</small></div><div className="local-coord">23.0225° N<br/>72.5714° E</div></div></section>

      <section className="faq-section section-pad" id="faqs"><div className="faq-intro"><div className="section-kicker">10 / GOOD TO KNOW</div><h2>Questions, <em>answered.</em></h2><p>A few things businesses often want to know before starting a website project.</p></div><div className="faq-list">{faqs.map((f,i)=><div className={openFaq===i?'faq-item active':'faq-item'} key={f[0]}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{f[0]}</span><b>{openFaq===i?'−':'+'}</b></button>{openFaq===i&&<p>{f[1]}</p>}</div>)}</div></section>

      <section className="contact-section section-pad" id="contact"><div className="contact-copy"><div className="section-kicker">11 / START A CONVERSATION</div><h2>Let’s build something <em>worth visiting.</em></h2><p>Tell us a little about your business and what you need from your website. We’ll take it from there.</p><div className="contact-details"><a href="tel:+918511172099"><span>CALL US</span>+91 85111 72099</a><a href="mailto:connectvertexglobal2209@gmail.com"><span>EMAIL US</span>connectvertexglobal2209@gmail.com</a><div><span>LOCATION</span>Ahmedabad, Gujarat, India</div></div></div>
        <form className="enquiry-form" onSubmit={submitForm}><div className="form-heading"><span>PROJECT ENQUIRY</span><b>Tell us about it.</b></div><div className="form-row"><label>Full name *<input name="name" required minLength="2" placeholder="Your name" autoComplete="name"/></label><label>Business name<input name="business" placeholder="Your company" autoComplete="organization"/></label></div><div className="form-row"><label>Phone number *<input name="phone" required pattern="[0-9+()\-\s]{8,18}" placeholder="Your contact number" autoComplete="tel"/></label><label>Email address *<input name="email" required type="email" placeholder="you@company.com" autoComplete="email"/></label></div><div className="form-row"><label>Website type<select name="website_type" defaultValue=""><option value="" disabled>Select a project type</option><option>Business website</option><option>Corporate website</option><option>Ecommerce website</option><option>Landing page</option><option>Website redesign</option><option>Custom web application</option><option>Other</option></select></label><label>Approximate budget<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Under ₹25,000</option><option>₹25,000 – ₹50,000</option><option>₹50,000 – ₹1,00,000</option><option>₹1,00,000+</option><option>Need guidance</option></select></label></div><label>Project requirements<textarea name="requirements" rows="4" placeholder="What would you like your website to do?"></textarea></label><label className="consent"><input type="checkbox" name="consent" value="yes" required/> <span>I agree to be contacted about this enquiry and have read the privacy policy.</span></label><button className="btn-primary form-submit" type="submit" disabled={busy}>{busy?'Sending…':'Send project enquiry'} <span>↗</span></button>{status&&<p className="form-status" role="status">{status}</p>}<small className="form-privacy">Your details will only be used to respond to this enquiry.</small></form>
      </section>
    </main>

    <footer className="vgt-footer"><div className="footer-main"><a className="vgt-brand footer-brand" href="/"><span className="brand-mark">V<span>.</span></span><span>VERTEX <b>GLOBAL TECH</b><small>GLOBAL VISION. VERTEX PRECISION.</small></span></a><p>Digital experiences shaped around your business goals.</p><a className="footer-top" href="#top" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}}>BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Vertex Global Tech. All rights reserved.</span><span>Ahmedabad, Gujarat, India</span><div><a href="/privacy-policy/">Privacy Policy</a><a href="/terms-and-conditions/">Terms</a><a href="https://www.instagram.com/vertex_global_tech/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div></footer>
  </>;
}
