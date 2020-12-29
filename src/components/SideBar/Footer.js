import React from 'react';

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} title={`${name}`} className={`icon ${icon}`} target="_blank" rel="noopener noreferrer">
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
