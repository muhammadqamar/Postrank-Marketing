import React from "react";

type colorProps = {
  color: string;
};

export const CalendarIcon = ({ color }: colorProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.10375 16.3524C3.67272 16.3524 3.30558 16.1986 3.00234 15.891C2.6991 15.5834 2.54749 15.2185 2.54749 14.7962V5.00379C2.54749 4.5815 2.6991 4.21655 3.00234 3.90894C3.30558 3.60133 3.67272 3.44752 4.10375 3.44752H5.39994V2.37185C5.39994 2.16864 5.47023 1.99712 5.6108 1.85728C5.75138 1.71744 5.92271 1.64752 6.1248 1.64752C6.32689 1.64752 6.49879 1.71744 6.6405 1.85728C6.78221 1.99712 6.85307 2.16864 6.85307 2.37185V3.44752H11.1468V2.37185C11.1468 2.16864 11.2171 1.99712 11.3577 1.85728C11.4983 1.71744 11.6696 1.64752 11.8717 1.64752C12.0738 1.64752 12.2457 1.71744 12.3874 1.85728C12.5291 1.99712 12.5999 2.16864 12.5999 2.37185V3.44752H13.8961C14.3272 3.44752 14.6943 3.60133 14.9975 3.90894C15.3008 4.21655 15.4524 4.5815 15.4524 5.00379V14.7962C15.4524 15.2185 15.3008 15.5834 14.9975 15.891C14.6943 16.1986 14.3272 16.3524 13.8961 16.3524L4.10375 16.3524ZM4.10375 14.7962H13.8961V8.09998H4.10375V14.7962Z"
        fill={color || "#464646"}
      />
    </svg>
  );
};
