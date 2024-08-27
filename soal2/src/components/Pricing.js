import React from 'react';
import '../styles/Pricing.scss';

function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <h2>Pricing</h2>
      <div className="pricing-tiers">
        <div className="tier">
          <h3>TIER 1/Basic</h3>
          <ul>
            <li>Mencatat barang masuk</li>
            <li>Mencatat barang keluar</li>
            <li>Mencatat hasil keuntungan</li>
          </ul>
          <p>$10/month</p>
        </div>
        <div className="tier">
          <h3>TIER 2/Business</h3>
          <ul>
            <li>Mencatat barang masuk dan keluar</li>
            <li>Mencatat keuntungan</li>
            <li>Analisa penjualan dengan CHART</li>
            <li>Support 7x24 Jam</li>
          </ul>
          <p>$20/month</p>
        </div>
        <div className="tier">
          <h3>TIER 3/Entrepreneur</h3>
          <ul>
            <li>Mencatat barang masuk dan keluar</li>
            <li>Mencatat keuntungan</li>
            <li>Analisa penjualan dengan CHART</li>
            <li>Support 7x24 Jam</li>
            <li>Export data ke Excel</li>
            <li>AI Prediksi penghasilan</li>
          </ul>
          <p>$30/month</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
