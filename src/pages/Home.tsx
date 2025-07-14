import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional <span className="gradient-text">Game Development</span>
            </h1>
            <p className="hero-subtitle">
              Transform your Roblox vision into reality with AVH Developments. 
              Fast, reliable, and professional game development services.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">550,629</span>
                <span className="stat-label">Robux Revenue</span>
              </div>
              <div className="stat">
                <span className="stat-number">32+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">3-4</span>
                <span className="stat-label">Days Delivery</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/pricing" className="btn btn-primary">
                View Pricing
              </Link>
              <Link to="/past-products" className="btn btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title">About AVH Developments</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a 16-year-old developer with an absolute passion for stepping into the development platform! 
                Throughout the past few years, I have managed to gain and improve my development skills, 
                becoming one of the fastest project completing developers on the platform.
              </p>
              <p>
                I'm quite trusted amongst a lot of groups and one of the favorite developers amongst known communities. 
                I have managed to gain an entity as I am one of the fastest project completing developers on the platform! 
                I will be able to complete your development request within only 3-4 days, depending on availability!
              </p>
              <div className="about-highlights">
                <div className="highlight">
                  <span className="highlight-icon">⚡</span>
                  <span>Fastest delivery in the industry</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🎯</span>
                  <span>32+ successful projects</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">💎</span>
                  <span>Trusted by major groups</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From cafes to hospitals, we specialize in creating immersive Roblox experiences
          </p>
          <div className="grid grid-3">
            <div className="card service-card">
              <div className="service-icon">🏥</div>
              <h3>Hospitals & Hotels</h3>
              <p>Complete medical facilities and luxury accommodations with advanced systems</p>
            </div>
            <div className="card service-card">
              <div className="service-icon">☕</div>
              <h3>Cafes & Restaurants</h3>
              <p>Beautiful dining experiences with ordering systems and custom menus</p>
            </div>
            <div className="card service-card">
              <div className="service-icon">🎓</div>
              <h3>Training Centers</h3>
              <p>Educational facilities with interactive learning environments</p>
            </div>
            <div className="card service-card">
              <div className="service-icon">🎪</div>
              <h3>Events Centers</h3>
              <p>Dynamic venues for hosting events and celebrations</p>
            </div>
            <div className="card service-card">
              <div className="service-icon">🛫</div>
              <h3>Airports & Cities</h3>
              <p>Large-scale projects including airports and urban environments</p>
            </div>
            <div className="card service-card">
              <div className="service-icon">⚙️</div>
              <h3>Custom Systems</h3>
              <p>Ordering systems, admin panels, and specialized scripts</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Your Dream Game?</h2>
            <p>Get started with our affordable pricing and fast delivery</p>
            <Link to="/pricing" className="btn btn-primary">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 