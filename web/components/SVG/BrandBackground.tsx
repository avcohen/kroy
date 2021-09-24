import React from "react";

interface Props {
  className?: string;
}

export const BrandBackground: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      className={`brand__bg ${className}`}
      width="341"
      height="305"
      viewBox="0 0 341 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M129.897 15C143.46 15 156.438 0 170 0C183.562 0 196.54 15 210.103 15H271L276.556 25H311.029C311.547 33.9233 318.947 41 328 41V70L341 80V239.622L328 249.622V270C318.611 270 311 277.611 311 287H281L271 305H69L59 287H30C30 277.611 22.3889 270 13 270V249.622L0 239.622V70.3784L13 60.3784V41C22.0532 41 29.4535 33.9233 29.9711 25H63.4445L69 15H129.897Z"
        fill="white"
      />
    </svg>
  );
};
