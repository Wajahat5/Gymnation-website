import React, { useEffect, useRef } from 'react';
import './Features.css';

const featuresData = [
  {
    feature: "24/7 Access (Almost)",
    circuitHouse: true,
    xtreme: false,
    pink: false,
    desc: "Opens at 5AM, closes at 10:30PM"
  },
  {
    feature: "Heavy-Duty Racks & Plates",
    circuitHouse: "Standard",
    xtreme: "Premium",
    pink: "Functional",
    desc: "Specialized powerlifting gear"
  },
  {
    feature: "Sauna & Showers",
    circuitHouse: false,
    xtreme: true,
    pink: false,
    desc: "Full recovery facilities"
  },
  {
    feature: "Women's Only Studio",
    circuitHouse: false,
    xtreme: false,
    pink: true,
    desc: "Safe, specialized environment"
  },
  {
    feature: "Female Trainers",
    circuitHouse: true,
    xtreme: true,
    pink: "Exclusive",
    desc: "Expert guidance available"
  }
];

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const rows = document.querySelectorAll('.feature-row');
    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  const renderIcon = (value: boolean | string) => {
    if (value === true) return <i className="fas fa-check text-orange"></i>;
    if (value === false) return <i className="fas fa-times" style={{ color: '#555' }}></i>;
    if (value === "Exclusive") return <span className="text-pink fw-bold">{value}</span>;
    return <span>{value}</span>;
  };

  return (
    <section id="programs" className="features-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-up visible">
          <h2>THE GYM NATION <span>DIFFERENCE</span></h2>
          <p>Compare our branches to find your perfect fit.</p>
        </div>

        <div className="features-table-container fade-up visible">
          <table className="features-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>MAIN<br/><span>Main Hub</span></th>
                <th>Xtreme<br/><span>Performance</span></th>
                <th className="pink-header">Pink<br/><span>Women's Only</span></th>
              </tr>
            </thead>
            <tbody>
              {featuresData.map((item, index) => (
                <tr key={index} className="feature-row fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <td>
                    <strong>{item.feature}</strong>
                    <span className="feature-desc">{item.desc}</span>
                  </td>
                  <td>{renderIcon(item.circuitHouse)}</td>
                  <td>{renderIcon(item.xtreme)}</td>
                  <td>{renderIcon(item.pink)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Features;
