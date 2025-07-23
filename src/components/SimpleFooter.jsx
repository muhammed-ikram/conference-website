// src/components/SimpleFooter.js
import React from 'react';

function SimpleFooter() {
  const links = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms Of Use", url: "#" },
    { name: "Refund Policy", url: "#" }
  ];

  return (
    <footer className="simple-footer">
      <p className="copyright">Copyright © 2025 The Concrete Conference</p>
      <div className="simple-footer-links">
        <ul>
          {links.map((link, index) => (
            <li key={index}><a href={link.url}>{link.name}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default SimpleFooter;