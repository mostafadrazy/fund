import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  height?: number | string;
  light?: boolean;
}

export default function Logo({ className = '', iconOnly = false, height = 36, light = false }: LogoProps) {
  const darkClass = light ? 'text-white' : 'text-mizan-dark';

  if (iconOnly) {
    return (
      <svg
        id="MizanLogoIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 281.3 191.62"
        style={{ height }}
        className={`w-auto inline-block ${className}`}
        stroke="none"
        strokeWidth="0"
        shapeRendering="geometricPrecision"
      >
        <g stroke="none">
          {/* cls-1 element (dark slate / white) */}
          <polygon fill="currentColor" stroke="none" className={darkClass} points="66.87 163.38 24.94 163.45 0 140.35 91.44 140.25 66.87 163.38"/>
          <polygon fill="currentColor" stroke="none" className={darkClass} points="257.23 163.27 215.55 163.54 191.08 140.33 281.3 140.26 257.23 163.27"/>
          <g stroke="none">
            {/* cls-2 elements (mizan green) */}
            <polygon fill="currentColor" stroke="none" className="text-mizan-green" points="58.95 74.56 52.77 69.68 35.45 125.48 34.86 18.9 136.06 104.6 135.99 140.07 58.95 74.56"/>
            <polygon fill="currentColor" stroke="none" className="text-mizan-green" points="229.3 69.53 146.5 140.56 146.39 104.78 246.91 19.26 246.69 124.74 229.3 69.53"/>
            <polygon fill="currentColor" stroke="none" className="text-mizan-green" points="141.37 60.35 111.92 30.46 141.22 0 169.97 30.49 141.37 60.35"/>
            {/* cls-1 element */}
            <polygon fill="currentColor" stroke="none" className={darkClass} points="177.69 191.51 104.67 191.47 141.17 152.82 177.69 191.51"/>
          </g>
        </g>
      </svg>
    );
  }

  return (
    <svg
      id="MizanLogoFull"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1028.03 191.62"
      style={{ height }}
      className={`w-auto inline-block ${className}`}
      stroke="none"
      strokeWidth="0"
      shapeRendering="geometricPrecision"
    >
      <g stroke="none">
        <g stroke="none">
          {/* Emblem Mark */}
          <polygon fill="currentColor" stroke="none" className={darkClass} points="66.87 163.38 24.94 163.45 0 140.35 91.44 140.25 66.87 163.38"/>
          <polygon fill="currentColor" stroke="none" className={darkClass} points="257.23 163.27 215.55 163.54 191.08 140.33 281.3 140.26 257.23 163.27"/>
          <g stroke="none">
            <polygon fill="currentColor" stroke="none" className="text-mizan-green" points="58.95 74.56 52.77 69.68 35.45 125.48 34.86 18.9 136.06 104.6 135.99 140.07 58.95 74.56"/>
            <polygon fill="currentColor" stroke="none" className="text-mizan-green" points="229.3 69.53 146.5 140.56 146.39 104.78 246.91 19.26 246.69 124.74 229.3 69.53"/>
            <polygon fill="currentColor" stroke="none" className="text-mizan-green" points="141.37 60.35 111.92 30.46 141.22 0 169.97 30.49 141.37 60.35"/>
            <polygon fill="currentColor" stroke="none" className={darkClass} points="177.69 191.51 104.67 191.47 141.17 152.82 177.69 191.51"/>
          </g>
        </g>
        <g stroke="none">
          {/* Text part "mizan" (cls-1) */}
          <g stroke="none">
            <polygon fill="currentColor" stroke="none" className={darkClass} points="415.72 162.71 415.42 95.04 387.46 140.48 376.58 140.57 348.29 94.28 348.17 162.65 328.8 162.6 328.83 58.78 348.1 58.76 381.95 114.96 416.08 58.83 435.01 58.8 435.01 162.64 415.72 162.71"/>
            <path fill="currentColor" stroke="none" className={darkClass} d="M667.38,120.6l-.3,41.97-18.15.26v-73.68s17.89,0,17.89,0l.54,8.63c6.34-7.29,13.41-10.44,23.06-10.33,13.51.16,25.21,10.56,25.29,24.85l.27,50.35-18.24.03-.14-44.43c-.02-7.78-6.02-13.35-13.23-13.61-9.53-.35-16.38,6.07-17,15.97Z"/>
            <polygon fill="currentColor" stroke="none" className={darkClass} points="548.46 162.67 488.71 162.68 488.84 148.42 523.29 105.9 489.7 105.69 489.65 89.16 547.27 89.17 547.41 103.18 512.75 146.04 548.45 146.09 548.46 162.67"/>
            <rect fill="currentColor" stroke="none" className={darkClass} x="426.91" y="116.53" width="73.56" height="18.76" transform="translate(337.63 589.56) rotate(-89.98)"/>
            <path fill="currentColor" stroke="none" className={darkClass} d="M460.26,56.11c7.24-2.18,12.98,1.4,14.78,7.63s-1.42,12.59-7.27,14.45c-6.07,1.93-12.67-.98-14.67-6.31-2.36-6.29.5-13.77,7.15-15.77Z"/>
            <path fill="currentColor" stroke="none" className={darkClass} d="M613.05,162.65l-.77-8.19c-6.29,6.97-13.07,10.02-22.07,10.12-13.76.15-25.56-7.48-31.11-20.36-5.02-11.64-4.92-25.23.36-36.86s15.55-19.06,27.69-19.79c10.22-.62,18.44,2.45,25.24,10.48l.64-8.88h17.93s0,73.52,0,73.52l-17.91-.04ZM579.8,141.93c6.2,6.56,15.29,6.95,22.62,3.25,6.65-3.36,10.57-10.86,10.59-19.07s-3.38-15.66-10.15-19.3-15.71-3.68-21.95,2.12c-8.97,8.35-9.86,23.72-1.1,32.99Z"/>
          </g>
          {/* Text part "cap" (cls-2) */}
          <g stroke="none">
            <path fill="currentColor" stroke="none" className="text-mizan-green" d="M814.7,147.77c11.56.15,21.22-3.76,28.98-12.22l11.89,11.72c-9.33,11.21-22.17,16.3-36.49,17.35-27.21,1.99-51.87-16.4-56.37-43.6-3.63-21.92,5.32-43.37,24.01-55.42,15.08-9.72,33.65-10.14,50.33-4.2,6.92,3.16,12.36,7.12,18.13,12.98l-11.25,12.07c-13.63-14.34-36.02-16.73-51.45-4.09-11.79,9.65-15.7,25.6-11.63,39.98,4.3,15.2,17.61,25.23,33.86,25.44Z"/>
            <path fill="currentColor" stroke="none" className="text-mizan-green" d="M969.15,191.51l-16.35.12-.03-102.5,16.23.06.5,9.55c7.09-8.52,16.54-12.32,27.65-10.96,18.1,2.22,30.2,18.15,30.85,36.36.56,15.73-6.64,30.75-21.21,37.34-12.86,5.82-28.11,3.49-37.62-7.81l-.02,37.85ZM1012,126.09c0-12.09-9.8-21.88-21.88-21.88s-21.88,9.8-21.88,21.88,9.8,21.88,21.88,21.88,21.88-9.8,21.88-21.88Z"/>
            <path fill="currentColor" stroke="none" className="text-mizan-green" d="M920.72,162.75l-.37-9.01c-3.36,2.96-5.83,6.1-9.55,7.84-13.49,6.29-29.6,2.69-39.25-8.8-12.74-15.15-12.72-37.45-.56-52.78,7.49-9.44,18.37-13.49,30.19-12.31,7.9.78,13.53,4.9,19.07,10.88l.5-9.41,16.2-.02.09,73.53-16.31.07ZM921.5,126.16c0-11.98-9.71-21.7-21.7-21.7s-21.7,9.71-21.7,21.7,9.71,21.7,21.7,21.7,21.7-9.71,21.7-21.7Z"/>
          </g>
        </g>
      </g>
    </svg>
  );
}
