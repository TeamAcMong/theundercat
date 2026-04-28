'use client';

import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className={`accordion__item ${openIndex === i ? 'accordion__item--open' : ''}`}>
          <button
            className="accordion__trigger"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.q}</span>
            <span className="accordion__icon">{openIndex === i ? '−' : '+'}</span>
          </button>
          <div className="accordion__content" style={{ display: openIndex === i ? 'block' : 'none' }}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
