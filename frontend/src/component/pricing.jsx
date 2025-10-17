import React, { useState } from 'react';
import './pricing.css'; 
import PricingCard from './PricingCard.jsx'

function Pricing({name}) {

  const [selectMonthly, setSelectMonthly] = useState(true);

  return (
    <div className="PricingApp">
      <div className="app-container">
        {/* Header */}
        <header>
          <h1 className="header-topic">Our Pricing Plans</h1>
          <div className="header-row">
            <p>Annually</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>
        </header>
        {/* Cards here */}
        <div className="pricing-cards">
          <PricingCard
           title="Essential"
           price={selectMonthly ? '₹1499' : ' ₹14,999'}
           storage="Document Review"
           users="Phone and Email Suppor"
           sendup="Legal Document Templates" 
           attorney={name}
          />
          <PricingCard
            title="Deluxe"
            price={selectMonthly ? '₹2,449' : '₹24,999'}
            storage="Representation in Court"
            users="Priority Support"
            sendup="Discounted Legal Services" 
            attorney={name}
          />
          <PricingCard
            title="Premium"
            price={selectMonthly ? '₹4,999' : '₹49,999'}
            storage="Legal Research Services"
            users="Legal Research Services"
            sendup="talk anytime to lawyer" 
            attorney={name}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Pricing;
