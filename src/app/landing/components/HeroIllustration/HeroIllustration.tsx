import React from "react";

const HeroIllustration = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      {/* <!-- Background Circuit Pattern --> */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#7c4dff", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#1a237e", stopOpacity: 1 }}
          />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* <!-- Central Brain/Circuit Structure --> */}
      <g transform="translate(400,300)" filter="url(#glow)">
        {/* <!-- Central Core --> */}
        <circle cx="0" cy="0" r="80" fill="url(#grad1)" opacity="0.9" />
        <circle cx="0" cy="0" r="60" fill="#7c4dff" opacity="0.7" />

        {/* <!-- Orbital Rings --> */}
        <g transform="rotate(45)">
          <ellipse
            cx="0"
            cy="0"
            rx="160"
            ry="160"
            fill="none"
            stroke="#7c4dff"
            stroke-width="2"
            opacity="0.3"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="200"
            ry="200"
            fill="none"
            stroke="#7c4dff"
            stroke-width="2"
            opacity="0.2"
          />
        </g>

        {/* <!-- Connection Lines --> */}
        <g stroke="#7c4dff" stroke-width="2">
          <line x1="-120" y1="-120" x2="-80" y2="-80" opacity="0.6" />
          <line x1="120" y1="-120" x2="80" y2="-80" opacity="0.6" />
          <line x1="-120" y1="120" x2="-80" y2="80" opacity="0.6" />
          <line x1="120" y1="120" x2="80" y2="80" opacity="0.6" />
        </g>

        {/* <!-- Floating Nodes --> */}
        <g fill="#7c4dff">
          <circle cx="-120" cy="-120" r="10" opacity="0.8" />
          <circle cx="120" cy="-120" r="10" opacity="0.8" />
          <circle cx="-120" cy="120" r="10" opacity="0.8" />
          <circle cx="120" cy="120" r="10" opacity="0.8" />
        </g>

        {/* <!-- Small Decorative Circles --> */}
        <g fill="#ffffff">
          <circle cx="-40" cy="-40" r="4" opacity="0.9" />
          <circle cx="40" cy="-40" r="4" opacity="0.9" />
          <circle cx="-40" cy="40" r="4" opacity="0.9" />
          <circle cx="40" cy="40" r="4" opacity="0.9" />
        </g>
      </g>

      {/* <!-- Pulse Animation Circles --> */}
      <circle
        cx="400"
        cy="300"
        r="100"
        fill="none"
        stroke="#7c4dff"
        stroke-width="2"
        opacity="0.2"
      >
        <animate
          attributeName="r"
          values="100;150;100"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.2;0;0.2"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="400"
        cy="300"
        r="120"
        fill="none"
        stroke="#7c4dff"
        stroke-width="2"
        opacity="0.1"
      >
        <animate
          attributeName="r"
          values="120;170;120"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.1;0;0.1"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      {/* floating parts */}
      <g fill="#7c4dff">
        <circle cx="200" cy="150" r="3" opacity="0.6">
          <animate
            attributeName="cy"
            values="150;130;150"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="600" cy="450" r="3" opacity="0.6">
          <animate
            attributeName="cy"
            values="450;470;450"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="300" cy="500" r="3" opacity="0.6">
          <animate
            attributeName="cy"
            values="500;480;500"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="500" cy="200" r="3" opacity="0.6">
          <animate
            attributeName="cy"
            values="200;220;200"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
};

export default HeroIllustration;
