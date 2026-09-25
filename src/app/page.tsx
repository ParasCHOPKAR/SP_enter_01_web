import { Search, ShieldCheck, Settings, Building2, HeadphonesIcon, Award, Box, Truck, ArrowRight, Gem, Phone, Mail, MapPin, FileText, ChevronLeft, ChevronRight, Users, CheckCircle, Package, Star, MessageCircle, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main id="top">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-item"><Phone size={14} /> +91 22 1234 5678</span>
            <span className="top-bar-item"><Mail size={14} /> sales@spenterprises.in</span>
            <span className="top-bar-item"><MapPin size={14} /> Mumbai, India</span>
          </div>
          <div className="top-bar-right">
            <a href="#download" className="top-bar-link"><FileText size={14} /> Download Catalogue</a>
            <a href="#quote" className="top-bar-link"><Mail size={14} /> Request a Quote</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo-section">
            <div className="logo-img-wrapper" style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
              <Image src="/logo_01.png" alt="SP Enterprises Logo" width={160} height={60} style={{ objectFit: 'contain' }} />
            </div>
          </div>

          <nav className="nav-links">
            <Link href="/" className="active">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#products">Products</Link>
            <Link href="#brands">Brands</Link>
            <Link href="#contact">Contact Us</Link>
          </nav>

          <div className="header-actions">
            <div className="search-bar">
              <Search size={18} color="#94a3b8" style={{ marginLeft: '10px' }} />
              <input type="text" placeholder="Search products, brands..." />
              <button className="search-btn">
                <Search size={18} />
              </button>
            </div>
            <Link href="#quote" className="quote-btn">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-image">
          <Image src="/home_hero_02.png" alt="Industrial Background" fill style={{ objectFit: 'cover', objectPosition: 'right' }} priority />
        </div>
        <div className="container" style={{ position: 'relative', height: '100%' }}>
          <div className="hero-content">
            <span className="hero-label">INDUSTRIAL ELECTRONIC COMPONENTS</span>
            <h1 className="hero-title">
              Powering<br/>Industries with<br/>
              <span className="highlight">Reliable Solutions</span>
            </h1>
            <p className="hero-desc">
              Your trusted partner for Electronic Relays, Solid State Relays,<br/>I/O Modules, Industrial Electrical Components and more from<br/>leading global brands like ERI and MG Electrica.
            </p>
            
            <div className="hero-actions">
              <Link href="#products" className="btn-primary">
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link href="#downloads" className="btn-outline">
                <Box size={18} /> Download Catalogue
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Middle Bar */}
      <div className="middle-features-bar" style={{ background: 'white', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'stretch' }}>
          <div style={{ flex: '1.5', display: 'flex', justifyContent: 'space-between', padding: '1.5rem 2rem 1.5rem 0', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Award size={28} color="#2563eb" />
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#1e293b' }}>Authorised<br/>Distributor</span>
            </div>
            <div style={{ width: '1px', height: '40px', background: '#e2e8f0' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Package size={28} color="#2563eb" />
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#1e293b' }}>Products from<br/>Reputed Brands</span>
            </div>
            <div style={{ width: '1px', height: '40px', background: '#e2e8f0' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Truck size={28} color="#2563eb" />
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#1e293b' }}>Pan India<br/>Supply</span>
            </div>
            <div style={{ width: '1px', height: '40px', background: '#e2e8f0' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <HeadphonesIcon size={28} color="#2563eb" />
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#1e293b' }}>Dedicated<br/>Customer Support</span>
            </div>
          </div>
          <div style={{ flex: '1', background: 'linear-gradient(90deg, #1e3a8a 0%, #1e40af 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0 100%)', marginLeft: '-2rem', position: 'relative' }}>
             <div style={{ textAlign: 'right' }}>
               <h3 style={{ fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '0.2rem' }}>SP ENTERPRISES</h3>
               <p style={{ fontSize: '0.75rem', letterSpacing: '1px', color: '#93c5fd' }}>ELECTRONIC COMPONENTS<br/>FOR A SMARTER TOMORROW</p>
             </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="products-section" style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div className="container">
          <h2 style={{ fontSize: '0.85rem', color: '#3b82f6', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 'bold' }}>Explore Our Product Range</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            
            {/* Card 1 */}
            <div style={{ background: '#f0f9ff', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', position: 'relative', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '40%', height: '120px' }}>
                 <Image src="/products_showcase.jpg" alt="Solid State Relays" fill style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ width: '60%' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#0f172a', fontWeight: 'bold', lineHeight: '1.2' }}>Solid State<br/>Relays</h3>
                <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.3' }}>Single Phase, Three Phase, Phase Control, Motor Reversing, Din Ready SSR & more.</p>
              </div>
              <button style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: '#dbeafe', color: '#3b82f6', border: 'none', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ArrowRight size={14} /></button>
            </div>

            {/* Card 2 */}
            <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', position: 'relative', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '40%', height: '120px' }}>
                 <Image src="/products_showcase.jpg" alt="Input / Output Modules" fill style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ width: '60%' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#0f172a', fontWeight: 'bold', lineHeight: '1.2' }}>Input / Output<br/>Modules</h3>
                <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.3' }}>AC O/P, DC O/P, AC I/P, DC I/P, I/O Cards (1/2/4/8/16/32 Channels)</p>
              </div>
              <button style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: '#dcfce7', color: '#16a34a', border: 'none', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ArrowRight size={14} /></button>
            </div>

            {/* Card 3 */}
            <div style={{ background: '#fff7ed', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', position: 'relative', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '40%', height: '120px' }}>
                 <Image src="/products_showcase.jpg" alt="Relays & Control Products" fill style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ width: '60%' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#0f172a', fontWeight: 'bold', lineHeight: '1.2' }}>Relays &<br/>Control Products</h3>
                <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.3' }}>SSR, I/O Module Cards, Single Phase SSR, 3 Phase ON/OFF SSR (10-125Amps)</p>
              </div>
              <button style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: '#ffedd5', color: '#ea580c', border: 'none', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ArrowRight size={14} /></button>
            </div>

            {/* Card 4 */}
            <div style={{ background: '#fff1f2', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', position: 'relative', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '40%', height: '120px' }}>
                 <Image src="/products_showcase.jpg" alt="MG Electrica Lugs" fill style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ width: '60%' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#0f172a', fontWeight: 'bold', lineHeight: '1.2' }}>MG Electrica<br/>Lugs</h3>
                <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.3' }}>Copper & Aluminum Lugs, Reducers, Connectors, Bimetallic Lugs & All Crimping Tools</p>
              </div>
              <button style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: '#ffe4e6', color: '#e11d48', border: 'none', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ArrowRight size={14} /></button>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section" style={{ padding: '4rem 0', background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <span style={{ fontSize: '0.85rem', color: '#3b82f6', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 'bold', display: 'block' }}>About SP Enterprises</span>
              <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1.5rem', lineHeight: '1.2' }}>Delivering Quality<br/>Electronic Components<br/><span style={{ color: '#1e40af' }}>Across Industries</span></h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>
                SP Enterprises is a leading supplier of Electronic Relays, Solid State Relays, I/O Modules, and Industrial Electrical Components. We provide high-quality products from reputed brands like ERI and MG Electrica to meet the diverse needs of industries across India.
              </p>
              <Link href="#about-more" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#2563eb', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>
                Know More <ArrowRight size={16} />
              </Link>
            </div>
            
            {/* Middle Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#f0f9ff', padding: '0.8rem', borderRadius: '8px', color: '#3b82f6' }}><Gem size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '0.3rem' }}>Quality Assurance</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Genuine products from<br/>leading brands</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#f0f9ff', padding: '0.8rem', borderRadius: '8px', color: '#3b82f6' }}><Users size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '0.3rem' }}>Trusted by Industries</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Serving multiple industrial<br/>sectors across India</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#f0f9ff', padding: '0.8rem', borderRadius: '8px', color: '#3b82f6' }}><Settings size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '0.3rem' }}>Expert Support</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Technical guidance &<br/>after-sales support</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div style={{ height: '400px', position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
              <Image src="/products_showcase.jpg" alt="Industrial Facility" fill style={{ objectFit: 'cover' }} />
              

            </div>
            
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <div className="title-label-wrapper">
              <div className="title-label-line"></div>
              <span className="title-label-text">Our Strengths</span>
              <div className="title-label-line"></div>
            </div>
            <h2 className="why-choose-title">Why Choose <span>SP Enterprises?</span></h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.6' }}>We combine decades of industry expertise with top-tier product lines to provide unmatched value for your automation and control needs.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
             {/* 4 Feature cards */}
             <div className="strength-card">
               <div className="strength-card-number">01</div>
               <div className="strength-icon-container">
                 <Image src="/icon_award.jpg" alt="Authorized Dealer" width={120} height={120} className="strength-icon-img" />
               </div>
               <h3>Authorized Dealer</h3>
               <p>Direct channel partner for leading global brands, ensuring 100% genuine and authentic products.</p>
               <div className="strength-card-footer">
                 <div className="strength-action-btn"><ArrowRight size={16} /></div>
                 <div className="strength-action-line"></div>
               </div>
             </div>
             <div className="strength-card">
               <div className="strength-card-number">02</div>
               <div className="strength-icon-container">
                 <Image src="/icon_inventory.jpg" alt="Vast Inventory" width={120} height={120} className="strength-icon-img" />
               </div>
               <h3>Vast Inventory</h3>
               <p>Comprehensive stock of SSRs, I/O modules, and control accessories ready for immediate dispatch.</p>
               <div className="strength-card-footer">
                 <div className="strength-action-btn"><ArrowRight size={16} /></div>
                 <div className="strength-action-line"></div>
               </div>
             </div>
             <div className="strength-card">
               <div className="strength-card-number">03</div>
               <div className="strength-icon-container">
                 <Image src="/icon_expertise.jpg" alt="Technical Expertise" width={120} height={120} className="strength-icon-img" />
               </div>
               <h3>Technical Expertise</h3>
               <p>Deep application knowledge to help you select the exact components for your specific industrial requirements.</p>
               <div className="strength-card-footer">
                 <div className="strength-action-btn"><ArrowRight size={16} /></div>
                 <div className="strength-action-line"></div>
               </div>
             </div>
             <div className="strength-card">
               <div className="strength-card-number">04</div>
               <div className="strength-icon-container">
                 <Image src="/icon_support.jpg" alt="Dedicated Support" width={120} height={120} className="strength-icon-img" />
               </div>
               <h3>Dedicated Support</h3>
               <p>Reliable pre-sales consultation and robust after-sales support to ensure your operations run smoothly.</p>
               <div className="strength-card-footer">
                 <div className="strength-action-btn"><ArrowRight size={16} /></div>
                 <div className="strength-action-line"></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#3b82f6', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>Client Testimonials</span>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', margin: '1rem 0' }}>What Our Clients Say on Google</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
              </div>
              <p style={{ color: '#475569', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>"Excellent quality of solid state relays. We have been sourcing from SP Enterprises for years and their support is unmatched."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>R</div>
                <div><h4 style={{ fontSize: '0.9rem', color: '#0f172a' }}>Rahul D.</h4><span style={{ fontSize: '0.75rem', color: '#64748b' }}>Local Guide</span></div>
              </div>
            </div>
            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
              </div>
              <p style={{ color: '#475569', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>"Very professional authorized distributor. Prompt delivery and authentic products. Highly recommended for industrial needs."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>S</div>
                <div><h4 style={{ fontSize: '0.9rem', color: '#0f172a' }}>Sandeep M.</h4><span style={{ fontSize: '0.75rem', color: '#64748b' }}>Verified Buyer</span></div>
              </div>
            </div>
            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <Star color="#cbd5e1" size={16} />
              </div>
              <p style={{ color: '#475569', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>"Great technical support from Mr. Pradeep. They helped us choose the right I/O modules for our PLC systems."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f43f5e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
                <div><h4 style={{ fontSize: '0.9rem', color: '#0f172a' }}>Amit K.</h4><span style={{ fontSize: '0.75rem', color: '#64748b' }}>Automation Engineer</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', padding: '4rem 0', color: 'white' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>Ready to Upgrade Your Industrial Infrastructure?</h2>
            <p style={{ fontSize: '1.1rem', color: '#bfdbfe' }}>Contact us today to request a quote or download our comprehensive product catalogue.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="#contact" style={{ background: 'white', color: '#1e3a8a', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Request Quote <ArrowRight size={18} />
            </Link>
            <Link href="#download" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={18} /> Download Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: '#3b82f6', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>Get in Touch</span>
              <h2 style={{ fontSize: '2.5rem', color: '#0f172a', margin: '1rem 0 2rem' }}>Send Us a Message</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', width: '100%' }} />
                  <input type="email" placeholder="Email Address" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', width: '100%' }} />
                </div>
                <input type="text" placeholder="Subject / Company" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', width: '100%' }} />
                <textarea placeholder="How can we help you?" rows={5} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', width: '100%', resize: 'vertical' }}></textarea>
                <button type="button" style={{ background: '#2563eb', color: 'white', padding: '1rem 2rem', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', alignSelf: 'flex-start' }}>Send Message</button>
              </form>
            </div>
            <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#0f172a' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}><MapPin size={20}/></div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '0.3rem' }}>Corporate Office</h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>S. P. Enterprises, Sr. No. 14/1A + 2B/2, Near Gujarwadi,<br/>Mangdewadi, Katraj, Pune 411046, Maharashtra</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}><Phone size={20}/></div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '0.3rem' }}>Call Us</h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>+91 83085 02100</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}><Mail size={20}/></div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '0.3rem' }}>Email Us</h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>Spe.mktg@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact & Footer Section */}
      <footer id="contact" className="main-footer" style={{ backgroundImage: "url('/footer_01.png')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', padding: '4rem 2rem', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Column 1: Logo & Info */}
          <div style={{ flex: '1 1 300px', maxWidth: '350px' }}>
            <div style={{ background: 'white', padding: '0.5rem 1rem', display: 'inline-flex', marginBottom: '1rem', borderRadius: '4px' }}>
              <Image src="/logo_01.png" alt="Logo" width={140} height={50} style={{ objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', letterSpacing: '1px' }}>ELECTRONIC RELAYS INDIA PVT. LTD.</h3>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '2rem', lineHeight: '1.6' }}>
              Your trusted partner for Electronic Relays, Solid State Relays, I/O Modules, and Industrial Electrical Components from leading global brands like ERI and MG Electrica.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.75rem', textAlign: 'center' }}>
              <div><div className="icon-box" style={{ border: '1px solid #334155', borderRadius: '8px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', color: '#3b82f6' }}><ShieldCheck size={20}/></div>Quality<br/>Products</div>
              <div><div className="icon-box" style={{ border: '1px solid #334155', borderRadius: '8px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', color: '#3b82f6' }}><Settings size={20}/></div>Reliable<br/>Brands</div>
              <div><div className="icon-box" style={{ border: '1px solid #334155', borderRadius: '8px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', color: '#3b82f6' }}><Building2 size={20}/></div>Industrial<br/>Solutions</div>
              <div><div className="icon-box" style={{ border: '1px solid #334155', borderRadius: '8px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', color: '#3b82f6' }}><HeadphonesIcon size={20}/></div>Dedicated<br/>Support</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="circle-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', flexShrink: 0 }}><Phone size={16}/></div>
                <div style={{ fontSize: '0.8rem', lineHeight: '1.4' }}><span style={{color: '#94a3b8'}}>Call Us</span><br/><strong style={{fontSize: '1rem', color: 'white'}}>+91 83085 02100</strong></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="circle-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', flexShrink: 0 }}><Mail size={16}/></div>
                <div style={{ fontSize: '0.8rem', lineHeight: '1.4' }}><span style={{color: '#94a3b8'}}>Email Us</span><br/><strong style={{color: 'white'}}>Spe.mktg@gmail.com</strong></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="circle-icon" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', flexShrink: 0 }}><MapPin size={16}/></div>
                <div style={{ fontSize: '0.8rem', lineHeight: '1.4' }}><span style={{color: '#94a3b8'}}>Our Office</span><br/><strong style={{color: 'white'}}>S. P. Enterprises, Sr. No. 14/1A + 2B/2,<br/>Near Gujarwadi, Mangdewadi,<br/>Katraj, Pune 411046, Maharashtra</strong></div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Brands */}
          <div style={{ flex: '1 1 200px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>Home <ChevronRight size={14} color="#3b82f6" /></Link>
              <Link href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>About Us <ChevronRight size={14} color="#3b82f6" /></Link>
              <Link href="#products" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>Products <ChevronRight size={14} color="#3b82f6" /></Link>
              <Link href="#brands" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>Brands <ChevronRight size={14} color="#3b82f6" /></Link>
              <Link href="#downloads" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>Downloads <ChevronRight size={14} color="#3b82f6" /></Link>
              <Link href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>Contact Us <ChevronRight size={14} color="#3b82f6" /></Link>
            </div>

            <h3 style={{ fontSize: '1.2rem', margin: '2.5rem 0 1.5rem' }}>Popular Brands</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'white', padding: '0.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                <span style={{color: '#0284c7', fontWeight: '900', fontSize: '1.2rem'}}>ERI</span>
              </div>
              <div style={{ background: 'white', padding: '0.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                <span style={{color: '#dc2626', fontWeight: 'bold', fontSize: '0.9rem'}}>MG ELECTRICA</span>
              </div>
            </div>
          </div>

          {/* Column 3: Our Products */}
          <div style={{ flex: '1 1 200px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Our Products</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href="#products" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>Solid State Relays <ChevronRight size={14} color="#3b82f6" /></Link>
              <Link href="#products" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>Input / Output Modules <ChevronRight size={14} color="#3b82f6" /></Link>
              <Link href="#products" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>Relays & Control Products <ChevronRight size={14} color="#3b82f6" /></Link>
              <Link href="#products" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>MG Electrica Lugs <ChevronRight size={14} color="#3b82f6" /></Link>
              <Link href="#products" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>Industrial Components <ChevronRight size={14} color="#3b82f6" /></Link>
              <Link href="#products" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>All Products <ChevronRight size={14} color="#3b82f6" /></Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div style={{ flex: '1.2 1 250px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Newsletter</h3>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: '1.6' }}>Stay updated with our latest products, industry solutions and offers.</p>
            <div style={{ display: 'flex', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', borderRadius: '4px 0 0 4px', paddingLeft: '1rem', flex: 1 }}>
                <Mail size={16} color="#94a3b8" />
                <input type="email" placeholder="Enter your email address" style={{ flex: 1, padding: '0.8rem', border: 'none', background: 'transparent', color: 'white', outline: 'none' }} />
              </div>
              <button style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '0 1.5rem', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}><ArrowRight size={20}/></button>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}><span style={{fontWeight:'bold', fontSize:'0.9rem'}}>in</span></div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}><span style={{fontWeight:'bold', fontSize:'1rem'}}>f</span></div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}><span style={{fontWeight:'bold', fontSize:'0.9rem'}}>ig</span></div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem 0', background: 'rgba(2, 6, 23, 0.9)', position: 'relative', zIndex: 1 }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#94a3b8', flexWrap: 'wrap', gap: '1rem' }}>
            <div>&copy; {new Date().getFullYear()} S. P. Enterprises. All Rights Reserved.</div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Privacy Policy</Link>
              <Link href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating Action Buttons */}
      <div className="floating-actions">
        <a href="https://wa.me/918308502100" target="_blank" rel="noopener noreferrer" className="float-btn float-whatsapp" title="Chat on WhatsApp">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
        <a href="tel:+918308502100" className="float-btn float-call" title="Call Us">
          <Phone size={26} />
        </a>
        <a href="#top" className="float-btn float-top" title="Scroll to Top">
          <ChevronUp size={24} />
        </a>
      </div>
    </main>
  );
}
