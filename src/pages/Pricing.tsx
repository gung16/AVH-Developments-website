import React, { useState } from 'react';
import './Pricing.css';

const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<'robux' | 'usd'>('robux');

  const mainServices = [
    {
      name: "Hospital / Hotel",
      robux: "24k",
      usd: "$119",
      originalUsd: "$360",
      description: "Complete medical facilities and luxury accommodations - max 30 rooms",
      features: ["Loading screen", "Basic overhead rank", "10 working drinks", "Advanced systems"]
    },
    {
      name: "Cafe / Bakery / Restaurant",
      robux: "16.5k",
      usd: "$84",
      originalUsd: "$240",
      description: "Beautiful dining experiences with ordering systems",
      features: ["Custom menu system", "Staff uniforms", "VIP areas", "Quality GFX"]
    },
    {
      name: "Training Center",
      robux: "15.6k",
      usd: "$82",
      originalUsd: "$220",
      description: "Educational facilities with interactive learning environments",
      features: ["Training systems", "Progress tracking", "Custom scripts", "Admin panel"]
    },
    {
      name: "Events Center",
      robux: "15.6k",
      usd: "$82",
      originalUsd: "$220",
      description: "Dynamic venues for hosting events and celebrations",
      features: ["Event management", "Custom decorations", "Sound systems", "VIP access"]
    }
  ];

  const additionalServices = [
    {
      name: "Ordering & Points System",
      robux: "6.2k",
      usd: "$42",
      popular: true
    },
    {
      name: "Advanced Overhead Ranks",
      robux: "4.2k",
      usd: "$22",
      description: "VIP tag, VIP chat, overhead icons"
    },
    {
      name: "Donation Board",
      robux: "3.2k",
      usd: "$12"
    },
    {
      name: "AVH Developments Custom Admin",
      robux: "600",
      usd: "$6"
    },
    {
      name: "Custom Food / Drinks",
      robux: "300",
      usd: "$3",
      description: "per item"
    },
    {
      name: "Leaderboard Rank",
      robux: "3.4k",
      usd: "$19",
      description: "5 Teams, Auto Team, and Rank"
    },
    {
      name: "Rank Invisible Barrier",
      robux: "550",
      usd: "$5",
      description: "Staff Area Barrier"
    },
    {
      name: "Quality GFX + Logo",
      robux: "600",
      usd: "$6"
    },
    {
      name: "Loading Screen",
      robux: "2.2k",
      usd: "$12"
    },
    {
      name: "Staff Uniform - Suit",
      robux: "550",
      usd: "$5",
      description: "x1"
    },
    {
      name: "Uniform Script",
      robux: "600",
      usd: "$5",
      description: "x1"
    },
    {
      name: "Anti Exploit",
      robux: "3.2k",
      usd: "$15"
    },
    {
      name: "Owner Dancing Statue",
      robux: "400",
      usd: "$4",
      description: "per avatar"
    }
  ];

  const completePackage = {
    name: "Complete Group Value Package",
    robux: "72.1k",
    usd: "$299",
    originalRobux: "87.1k",
    originalUsd: "$871",
    description: "Everything you need for a successful group",
    features: [
      "Main Game",
      "Training Center", 
      "Events Center",
      "Ordering System",
      "Admin",
      "2 Food items + 10 drinks (premade)",
      "Advanced Overhead Ranks",
      "VIP chat and gamepass",
      "Custom Icons",
      "Logo",
      "Staff Uniform + Script"
    ]
  };

  const membershipTiers = [
    {
      name: "Blue Emerald Tier",
      requirement: "30k+ robux spending",
      benefits: [
        "Up to 10,000 robux discount value",
        "Up to 20% discount on high valued purchases",
        "Queue Priority with completion within a week"
      ],
      holders: 5
    },
    {
      name: "Gold Tier",
      requirement: "15k+ robux spending", 
      benefits: [
        "Up to 1,000 robux discount value",
        "Up to 3% discount on high valued purchases"
      ],
      holders: 13
    },
    {
      name: "Platinum Tier",
      requirement: "25k+ robux spending",
      benefits: [
        "Up to 2,500 robux discount value", 
        "Up to 10% discount on high valued purchases"
      ],
      holders: 12
    }
  ];

  return (
    <div className="pricing">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Pricing Plans</h1>
          <p className="section-subtitle">
            Choose your preferred currency and get started with our professional development services
          </p>

          {/* Currency Toggle */}
          <div className="currency-toggle">
            <button 
              className={`toggle-btn ${currency === 'robux' ? 'active' : ''}`}
              onClick={() => setCurrency('robux')}
            >
              Robux
            </button>
            <button 
              className={`toggle-btn ${currency === 'usd' ? 'active' : ''}`}
              onClick={() => setCurrency('usd')}
            >
              USD
            </button>
          </div>

          {/* Main Services */}
          <div className="pricing-section">
            <h2 className="pricing-section-title">Main Services</h2>
            <div className="grid grid-2">
              {mainServices.map((service, index) => (
                <div key={index} className="card pricing-card">
                  <h3 className="service-name">{service.name}</h3>
                  <div className="price-container">
                    <span className="price">
                      {currency === 'robux' ? service.robux : service.usd}
                    </span>
                    {currency === 'usd' && service.originalUsd && (
                      <span className="original-price">{service.originalUsd}</span>
                    )}
                  </div>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Package */}
          <div className="pricing-section">
            <h2 className="pricing-section-title">Complete Package</h2>
            <div className="complete-package-card">
              <div className="package-header">
                <h3 className="package-name">{completePackage.name}</h3>
                <div className="package-price">
                  <span className="price">
                    {currency === 'robux' ? completePackage.robux : completePackage.usd}
                  </span>
                  {currency === 'robux' && (
                    <span className="original-price">{completePackage.originalRobux}</span>
                  )}
                  {currency === 'usd' && (
                    <span className="original-price">{completePackage.originalUsd}</span>
                  )}
                </div>
              </div>
              <p className="package-description">{completePackage.description}</p>
              <div className="package-features">
                {completePackage.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="pricing-section">
            <h2 className="pricing-section-title">Additional Services</h2>
            <div className="grid grid-3">
              {additionalServices.map((service, index) => (
                <div key={index} className={`card service-item ${service.popular ? 'popular' : ''}`}>
                  {service.popular && <span className="popular-badge">Most Sold</span>}
                  <h4 className="item-name">{service.name}</h4>
                  <div className="item-price">
                    <span className="price">
                      {currency === 'robux' ? service.robux : service.usd}
                    </span>
                    {service.description && <span className="price-note">{service.description}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Tiers */}
          <div className="pricing-section">
            <h2 className="pricing-section-title">Membership Tiers</h2>
            <div className="grid grid-3">
              {membershipTiers.map((tier, index) => (
                <div key={index} className="card membership-card">
                  <h3 className="tier-name">{tier.name}</h3>
                  <p className="tier-requirement">{tier.requirement}</p>
                  <ul className="tier-benefits">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                  <div className="tier-holders">
                    <span className="holders-count">{tier.holders} current holders</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Info */}
          <div className="payment-info">
            <h3>Payment Methods</h3>
            <div className="payment-methods">
              <div className="payment-method">
                <span className="method-name">Robux:</span>
                <span className="method-detail">30% Roblox tax</span>
              </div>
              <div className="payment-method">
                <span className="method-name">PayPal:</span>
                <span className="method-detail">7% PayPal tax</span>
              </div>
              <div className="payment-method">
                <span className="method-name">Gift Cards / Group Funds:</span>
                <span className="method-detail">0% tax</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing; 