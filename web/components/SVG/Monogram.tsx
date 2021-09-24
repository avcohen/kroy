import React from "react";

interface Props {
  className?: string;
}

export const Monogram: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="75"
      height="52"
      viewBox="0 0 75 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 51.3158H9.22509L35.9337 23.6067L17.7082 4.17014L22.0961 0H4.55639L14.8083 5.06923L32.2317 23.0284L11.2747 44.1954L0 51.3158ZM52.8437 0H26.7086L35.9337 4.8117V46.5041L26.7086 51.3158H48.2352L39.0663 46.5041V4.8117L42.1426 3.2078H52.8477C57.7451 3.2078 61.8442 6.60536 61.8442 12.0586C61.8442 17.5119 57.7451 20.9727 52.8477 20.9727H41.5129L39.0663 23.6022L65.7749 51.3113H75L63.7253 44.1909L43.9074 24.176H52.8477C59.6262 24.176 65.2615 19.301 65.2615 12.0541C65.2615 4.80718 59.6222 0 52.8437 0Z"
        fill="black"
      />
    </svg>
  );
};