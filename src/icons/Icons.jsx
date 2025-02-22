// Icons.jsx
import React from "react";

export function IconExplore(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"currentColor"} fill={"none"}>
      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12.4014 8.29796L15.3213 7.32465C16.2075 7.02924 16.6507 6.88153 16.8846 7.11544C17.1185 7.34935 16.9708 7.79247 16.6753 8.67871L15.702 11.5986C15.1986 13.1088 14.9469 13.8639 14.4054 14.4054C13.8639 14.9469 13.1088 15.1986 11.5986 15.702L8.67871 16.6753C7.79247 16.9708 7.34935 17.1185 7.11544 16.8846C6.88153 16.6507 7.02924 16.2075 7.32465 15.3213L8.29796 12.4014C8.80136 10.8912 9.05306 10.1361 9.59457 9.59457C10.1361 9.05306 10.8912 8.80136 12.4014 8.29796Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12L11.9936 12.0064" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconsMe(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-user"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

export function IconProjects(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"currentColor"} fill={"none"}>
      <rect width="24" height="24" fill="transparent" />
      <path d="M2 14C2 11.1911 2 9.78661 2.67412 8.77772C2.96596 8.34096 3.34096 7.96596 3.77772 7.67412C4.78661 7 6.19108 7 9 7H15C17.8089 7 19.2134 7 20.2223 7.67412C20.659 7.96596 21.034 8.34096 21.3259 8.77772C22 9.78661 22 11.1911 22 14C22 16.8089 22 18.2134 21.3259 19.2223C21.034 19.659 20.659 20.034 20.2223 20.3259C19.2134 21 17.8089 21 15 21H9C6.19108 21 4.78661 21 3.77772 20.3259C3.34096 20.034 2.96596 19.659 2.67412 19.2223C2 18.2134 2 16.8089 2 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7C16 5.11438 16 4.17157 15.4142 3.58579C14.8284 3 13.8856 3 12 3C10.1144 3 9.17157 3 8.58579 3.58579C8 4.17157 8 5.11438 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 11L6.65197 11.202C10.0851 12.266 13.9149 12.266 17.348 11.202L18 11M12 12V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FramerIcon (props) {
  return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 41 14"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M 15.481 0 L 7.38 13.988 L 0 13.988 L 6.325 3.066 C 7.306 1.372 9.753 0 11.791 0 Z M 33.579 3.497 C 33.579 1.566 35.231 0 37.269 0 C 39.307 0 40.959 1.566 40.959 3.497 C 40.959 5.428 39.307 6.994 37.269 6.994 C 35.231 6.994 33.579 5.428 33.579 3.497 Z M 16.865 0 L 24.245 0 L 16.144 13.988 L 8.764 13.988 Z M 25.581 0 L 32.961 0 L 26.636 10.922 C 25.655 12.615 23.208 13.988 21.17 13.988 L 17.48 13.988 Z"
          fill="black"
        />
      </svg>
  );
};

export function OpenAIIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 128 128"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth="6"
        d="M55.083 68.0001V47.8295C55.083 45.2386 56.5141 42.8596 58.803 41.6455L75.8077 32.6263C76.4756 32.2721 77.1852 32.0028 77.9199 31.8247V31.8247C91.132 28.6231 103.247 40.1201 100.741 53.4815L99.4308 60.464"
      />
      <path
        stroke="currentColor"
        strokeWidth="6"
        d="M55.6898 58.6917L73.2238 48.5685C75.4672 47.2732 78.2426 47.3228 80.4383 48.6975L96.9222 59.0174C97.4899 59.3728 98.0161 59.7905 98.4911 60.2628V60.2628C108.373 70.088 104.329 86.8903 91.0588 91.1435L85.4823 92.9308"
      />
      <path
        stroke="currentColor"
        strokeWidth="6"
        d="M65.0278 54.6897L82.5617 64.8129C84.8051 66.1081 86.1498 68.5365 86.0572 71.1253L85.3684 90.3777C85.3401 91.1679 85.2101 91.9512 84.9815 92.7082V92.7082C81.0209 105.824 64.9077 110.571 54.4688 101.698L49.9091 97.8221"
      />
      <path
        stroke="currentColor"
        strokeWidth="6"
        d="M73.083 60.0001L73.083 81.1103C73.083 83.7077 71.6449 86.0915 69.3472 87.3027L52.1565 96.3647C51.496 96.7128 50.7952 96.9786 50.0699 97.156V97.156C36.8679 100.384 24.6918 89.0047 27.0214 75.6149L28.3462 68.0001"
      />
      <path
        stroke="currentColor"
        strokeWidth="6"
        d="M72.4017 70.1317L53.9515 80.3036C51.6604 81.5668 48.8561 81.4468 46.6812 79.9927L29.9329 68.7948C29.5218 68.52 29.1356 68.2097 28.7787 67.8676V67.8676C19.5463 59.0181 22.6016 43.5788 34.5086 38.9126L41.9051 36.014"
      />
      <path
        stroke="currentColor"
        strokeWidth="6"
        d="M62.9532 74.1335L44.4512 63.1363C42.2518 61.8289 40.9408 59.4257 41.0323 56.8687L41.7107 37.9075C41.7472 36.8867 41.9514 35.8789 42.3152 34.9244V34.9244C47.2007 22.1063 63.5467 18.3712 73.5146 27.7954L77.0337 31.1225"
      />
    </svg>
  );
}

export function GeminiIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      width="100%"
      height="100%"
      {...props}
    >
      <path
        d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"
        fill="url(#prefix__paint0_radial_980_20147)"
      />
      <defs>
        <radialGradient
          id="prefix__paint0_radial_980_20147"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"
        >
          <stop offset=".067" stopColor="#9168C0" />
          <stop offset=".343" stopColor="#5684D1" />
          <stop offset=".672" stopColor="#1BA1E3" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function ConversationIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
    >
      <path
        d="M2.01576 13.4756C2.08114 16.5411 2.11382 18.0739 3.24495 19.2093C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.755 19.2093C21.8862 18.0739 21.9189 16.5411 21.9842 13.4756C22.0053 12.4899 22.0053 11.51 21.9842 10.5244C21.9189 7.45883 21.8862 5.92606 20.755 4.79063C19.6239 3.6552 18.0497 3.61565 14.9012 3.53654C12.9607 3.48778 11.0393 3.48778 9.09882 3.53653C5.95033 3.61563 4.37608 3.65518 3.24495 4.79062C2.11382 5.92605 2.08113 7.45882 2.01576 10.5243C1.99474 11.51 1.99474 12.4899 2.01576 13.4756Z"
        fill="#616265"
        stroke="#616265"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"
        stroke="#d1d5db"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function IconEyes(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18px"
      height="18px"
      color="currentColor"
      fill={"none"}
    >
      <path
        d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
export function IconDownload(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18px"
      height="18px"
      color="currentColor"
      fill={"none"}
    >
      <path
        d="M3.00012 14L3.23397 14.6626C4.14412 17.2413 4.5992 18.5307 5.63754 19.2654C6.67588 20 8.04322 20 10.7779 20H13.2224C15.957 20 17.3244 20 18.3627 19.2654C19.401 18.5307 19.8561 17.2413 20.7663 14.6626L21.0001 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.0001 14V4M12.0001 14C11.2999 14 9.99165 12.0057 9.50012 11.5M12.0001 14C12.7003 14 14.0086 12.0057 14.5001 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function IconArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      color="currentColor"
      fill={"none"}
    >
      <path
        d="M20.0001 11.9998L4.00012 11.9998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function IconArrowRightUp(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      color="currentColor"
      fill={"none"}
    >
      <path
        d="M17 7L6 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function IconStack(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-stack"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
      <path d="M4 14l8 4l8 -4" />
    </svg>
  );
}

export function IconServices(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-apps"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M14 7l6 0" />
      <path d="M17 4l0 6" />
    </svg>
  );
}
export function IconIdea(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      color={"currentColor"}
      fill={"none"}
    >
      <path
        d="M6.08938 14.9992C5.71097 14.1486 5.5 13.2023 5.5 12.2051C5.5 8.50154 8.41015 5.49921 12 5.49921C15.5899 5.49921 18.5 8.50154 18.5 12.2051C18.5 13.2023 18.289 14.1486 17.9106 14.9992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 1.99921V2.99921"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 11.9992H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 11.9992H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0704 4.92792L18.3633 5.63503"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.6368 5.636L4.92969 4.92889"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.517 19.3056C15.5274 18.9788 15.9326 18.054 16.0466 17.1238C16.0806 16.8459 15.852 16.6154 15.572 16.6154L8.47685 16.6156C8.18725 16.6156 7.95467 16.8614 7.98925 17.1489C8.1009 18.0773 8.3827 18.7555 9.45345 19.3056M14.517 19.3056C14.517 19.3056 9.62971 19.3056 9.45345 19.3056M14.517 19.3056C14.3955 21.2506 13.8338 22.0209 12.0068 21.9993C10.0526 22.0354 9.60303 21.0833 9.45345 19.3056"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconWhatsapp(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}
export function IconWhatsappT(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}
export function IconGroup(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      color={"currentColor"}
      fill={"none"}
    >
      <path
        d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 14H7C4.23858 14 2 16.2386 2 19C2 20.1046 2.89543 21 4 21H14C15.1046 21 16 20.1046 16 19C16 16.2386 13.7614 14 11 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M17 14C19.7614 14 22 16.2386 22 19C22 20.1046 21.1046 21 20 21H18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function IconCloud(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
       width="20px"
      height="20px"
      color={"currentColor"}
      fill={"none"}
    >
      <path
        d="M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function IconTech(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20px"
      height="20px"
      color={"none"}
      fill={"none"}
    >
      <path
        d="M17 8L18.8398 9.85008C19.6133 10.6279 20 11.0168 20 11.5C20 11.9832 19.6133 12.3721 18.8398 13.1499L17 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8L5.16019 9.85008C4.38673 10.6279 4 11.0168 4 11.5C4 11.9832 4.38673 12.3721 5.16019 13.1499L7 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 4L9.5 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



export function IconLinkedin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    </svg>
  );
}

export function Figma(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 24C24 20.6863 26.6863 18 30 18C33.3137 18 36 20.6863 36 24C36 27.3137 33.3137 30 30 30C26.6863 30 24 27.3137 24 24Z"
        fill="#1ABCFE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 36C12 32.6863 14.6863 30 18 30H24V36C24 39.3137 21.3137 42 18 42C14.6863 42 12 39.3137 12 36Z"
        fill="#0ACF83"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 6V18H30C33.3137 18 36 15.3137 36 12C36 8.68629 33.3137 6 30 6H24Z"
        fill="#FF7262"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 12C12 15.3137 14.6863 18 18 18H24V6H18C14.6863 6 12 8.68629 12 12Z"
        fill="#F24E1E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C12 27.3137 14.6863 30 18 30H24V18H18C14.6863 18 12 20.6863 12 24Z"
        fill="#A259FF"
      />
    </svg>
  );
}

export function ReactIcon(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <circle cx="0" cy="0" r="2" fill="#087EA4" />
      <g stroke="#087EA4" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5" />
        <ellipse rx="10" ry="4.5" transform="rotate(60)" />
        <ellipse rx="10" ry="4.5" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextJS (props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_520_41)">
        <path
          d="M20.4775 40.8911C31.7552 40.8911 40.8975 31.7488 40.8975 20.4712C40.8975 9.19358 31.7552 0.0512695 20.4775 0.0512695C9.19993 0.0512695 0.0576172 9.19358 0.0576172 20.4712C0.0576172 31.7488 9.19993 40.8911 20.4775 40.8911Z"
          fill="black"
        />
        <path
          d="M33.9792 35.7907L15.7452 12.3032H12.3096V28.6325H15.0581V15.7935L31.8218 37.4524C32.577 36.947 33.2977 36.3919 33.9792 35.7907Z"
          fill="url(#paint0_linear_520_41)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.1499 12.3032H28.8724V28.6392H26.1499V12.3032Z"
          fill="url(#paint1_linear_520_41)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_520_41"
          x1="24.7885"
          y1="26.4839"
          x2="32.843"
          y2="36.4671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_520_41"
          x1="27.5112"
          y1="12.3036"
          x2="27.4655"
          y2="24.3003"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_520_41">
          <rect width="100%" height="100%" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function AstroIcon(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_502_6)">
        <path
          d="M10.8632 34.9321C8.96851 33.2101 8.37903 29.6841 9.17903 27.1011C10.5685 28.7411 12.4632 29.2331 14.4422 29.5611C17.4738 29.9711 20.4632 29.8071 23.2843 28.4541L24.2948 27.8801C24.5475 28.6181 24.6317 29.3971 24.5054 30.1761C24.2948 32.0211 23.3264 33.4561 21.8106 34.5631C21.2211 35.0141 20.5475 35.3831 19.9159 35.7931C17.979 37.1051 17.4738 38.5811 18.2317 40.7541V41.0001C17.3114 40.602 16.5343 39.9452 16.0001 39.1141C15.4444 38.255 15.1522 37.2593 15.158 36.2441C15.158 35.7521 15.158 35.2191 15.0738 34.7271C14.9053 33.4971 14.3159 32.9641 13.179 32.9231C12.6503 32.8938 12.1285 33.0521 11.7104 33.3687C11.2924 33.6854 11.0063 34.1388 10.9053 34.6451L10.8632 34.9321Z"
          fill="#D83333"
        />
        <path
          d="M0 26.65C0 26.65 5.6421 23.985 11.2842 23.985L15.5368 11.152C15.7053 10.537 16.1684 10.127 16.6737 10.127C17.2211 10.127 17.6842 10.537 17.8526 11.152L22.0632 23.985C28.8 23.985 33.3895 26.65 33.3895 26.65L23.7895 1.23C23.5368 0.492 23.0737 0 22.4421 0H10.9474"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_502_6">
          <rect width="40" height="41" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}


export function TailwindIcon(props) {
  return (
    <svg
      viewBox="0 0 50 31"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
        fill="#38bdf8"
      />
    </svg>
  );
}

export function TypeScriptIcon(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_518_13)">
        <path d="M0 20V40H20H40V20V0H20H0V20Z" fill="#007ACC" />
        <path
          d="M8.84568 20.1322L8.83299 21.7703H11.4362H14.0393V29.1671V36.564H15.8806H17.7219V29.1671V21.7703H20.325H22.9282V20.164C22.9282 19.2751 22.9092 18.5322 22.8838 18.5132C22.8647 18.4878 19.6965 18.4751 15.8552 18.4814L8.86473 18.5005L8.84568 20.1322Z"
          fill="white"
        />
        <path
          d="M32.2765 18.4543C33.2923 18.7083 34.0669 19.1591 34.7781 19.8956C35.1463 20.2892 35.6923 21.0067 35.7368 21.1781C35.7495 21.2289 34.0098 22.3972 32.9558 23.0511C32.9177 23.0765 32.7654 22.9114 32.5939 22.6575C32.0796 21.9083 31.54 21.5845 30.7146 21.5273C29.5019 21.4448 28.7209 22.0797 28.7273 23.14C28.7273 23.4511 28.7717 23.6352 28.8987 23.8892C29.1654 24.4416 29.6606 24.7718 31.2161 25.4448C34.0796 26.6765 35.305 27.4892 36.0669 28.6448C36.9177 29.9337 37.1082 31.9908 36.5304 33.521C35.8955 35.1845 34.3209 36.3146 32.105 36.6892C31.4193 36.8099 29.7939 36.7908 29.0574 36.6575C27.4511 36.3718 25.9273 35.5781 24.9876 34.5368C24.6193 34.1305 23.9019 33.0702 23.9463 32.994C23.9654 32.9686 24.1304 32.867 24.3146 32.7591C24.4923 32.6575 25.1654 32.2702 25.8003 31.9019L26.9495 31.2352L27.1908 31.5908C27.5273 32.1051 28.2638 32.8099 28.7082 33.0448C29.9844 33.7178 31.7368 33.6225 32.6003 32.8479C32.9685 32.5114 33.1209 32.1622 33.1209 31.6479C33.1209 31.1845 33.0638 30.9813 32.8225 30.6321C32.5114 30.1876 31.8765 29.813 30.0733 29.0321C28.0098 28.1432 27.1209 27.5908 26.3082 26.7146C25.8384 26.2067 25.3939 25.394 25.2098 24.7146C25.0574 24.1495 25.0193 22.7337 25.14 22.1622C25.5654 20.1686 27.0701 18.7781 29.2415 18.3654C29.9463 18.2321 31.5844 18.2829 32.2765 18.4543Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_518_13">
          <rect width="40" height="40" rx="3" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function AwsIcon(props) {
  return (
    <svg width="100%" height="100%" color="red" viewBox="0 0 57 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_496_16)">
    <path d="M16.0633 13.4377C16.0486 14.056 16.1189 14.6733 16.2718 15.2692C16.4402 15.7788 16.6431 16.2741 16.8786 16.7513C16.963 16.8924 17.009 17.0565 17.0114 17.2247C17.0114 17.4304 16.8976 17.6364 16.6512 17.842L15.4569 18.7063C15.3128 18.819 15.1415 18.8834 14.964 18.8915C14.7481 18.8754 14.5454 18.7727 14.3953 18.6034C14.1398 18.3055 13.9112 17.9816 13.7126 17.6363C13.5231 17.2864 13.3334 16.8952 13.125 16.4221C11.6463 18.315 9.7884 19.2614 7.55131 19.2614C5.95834 19.2614 4.68874 18.7674 3.75983 17.7793C2.83092 16.7912 2.35693 15.4749 2.35693 13.8287C2.35693 12.0795 2.92563 10.6596 4.08211 9.58953C5.23858 8.51945 6.77401 7.98435 8.72664 7.98435C9.39913 7.99031 10.0705 8.04533 10.7362 8.14903C11.4376 8.25196 12.158 8.41652 12.9163 8.60179V7.09953C12.9163 5.53505 12.6128 4.44497 12.0253 3.80694C11.4184 3.16904 10.3949 2.86037 8.93514 2.86037C8.24525 2.86034 7.55786 2.95015 6.88768 3.12787C6.19078 3.30809 5.50657 3.5419 4.84023 3.82753C4.62464 3.93223 4.403 4.02159 4.17671 4.09502C4.07855 4.13015 3.97651 4.15092 3.87329 4.15678C3.6079 4.15678 3.47515 3.95104 3.47515 3.51887V2.51054C3.47515 2.18118 3.51308 1.93415 3.6079 1.79029C3.75095 1.60272 3.93292 1.45461 4.13889 1.35812C4.89926 0.949732 5.70091 0.638972 6.52759 0.432134C7.49358 0.163074 8.48773 0.0316359 9.48498 0.0411307C11.7414 0.0411307 13.3902 0.596698 14.4519 1.70795C15.4946 2.8192 16.0254 4.50661 16.0254 6.77029V13.4377H16.0633ZM8.36654 16.5656C9.0316 16.5576 9.69106 16.4325 10.3192 16.1952C11.015 15.9339 11.6358 15.4797 12.1201 14.8777C12.4257 14.4984 12.6463 14.0475 12.7647 13.5603C12.8949 12.9741 12.9586 12.3729 12.9542 11.7699V10.9065C12.3794 10.7546 11.7972 10.6378 11.2104 10.5567C10.6192 10.4754 10.024 10.4343 9.42809 10.4338C8.15794 10.4338 7.22903 10.7013 6.60344 11.2572C5.97785 11.8131 5.67453 12.5947 5.67453 13.6237C5.67453 14.5908 5.9021 15.3111 6.37598 15.805C6.83112 16.3195 7.49453 16.5664 8.36654 16.5664V16.5656ZM23.5895 18.7881C23.2482 18.7881 23.0208 18.7263 22.8691 18.5824C22.7173 18.4588 22.5847 18.1707 22.4709 17.7798L18.0157 1.87263C17.9293 1.60636 17.8721 1.33 17.8451 1.04922C17.8451 0.719857 17.9969 0.534707 18.3003 0.534707H20.1581C20.5183 0.534707 20.7649 0.596463 20.8975 0.740442C21.0492 0.863954 21.1628 1.15215 21.2767 1.54303L24.4616 15.1659L27.4189 1.54339C27.5137 1.13168 27.6274 0.864307 27.7791 0.740795C27.9308 0.617284 28.1962 0.53506 28.5376 0.53506H30.0548C30.415 0.53506 30.6616 0.596816 30.8133 0.740795C30.965 0.864307 31.0977 1.1525 31.1735 1.54339L34.1688 15.3309L37.4474 1.54339C37.5612 1.13168 37.6939 0.864307 37.8267 0.740795C37.9784 0.617284 38.2248 0.53506 38.5661 0.53506H40.3292C40.6326 0.53506 40.8032 0.699742 40.8032 1.04957C40.7988 1.16029 40.7861 1.27044 40.7653 1.37894C40.7355 1.55448 40.6911 1.7267 40.6325 1.89345L36.0637 17.8006C35.95 18.2121 35.8173 18.4797 35.6656 18.6032C35.4513 18.7521 35.1992 18.8241 34.9452 18.8089H33.3147C32.9545 18.8089 32.7079 18.7472 32.5562 18.6032C32.4044 18.4592 32.2718 18.1915 32.1959 17.7798L29.2577 4.50661L26.3382 17.7592C26.2433 18.1709 26.1297 18.4383 25.978 18.5826C25.8262 18.7269 25.5609 18.7883 25.2194 18.7883L23.5895 18.7881ZM47.95 19.3437C46.9668 19.3448 45.9869 19.2205 45.0305 18.9732C44.0826 18.7262 43.3433 18.4587 42.8504 18.1498C42.547 17.9647 42.3386 17.7588 42.2628 17.5734C42.1889 17.3918 42.1502 17.1956 42.149 16.9971V15.9483C42.149 15.5161 42.3007 15.3104 42.585 15.3104C42.7011 15.3108 42.8163 15.3316 42.9263 15.3721C43.0401 15.4133 43.2106 15.4956 43.4003 15.5778C44.0699 15.8975 44.7689 16.139 45.4856 16.2981C46.2282 16.4617 46.9839 16.5445 47.7416 16.5451C48.9359 16.5451 49.8649 16.3188 50.5095 15.866C50.8183 15.6638 51.0722 15.3763 51.2454 15.033C51.4186 14.6896 51.5049 14.3025 51.4956 13.9111C51.5022 13.6462 51.4604 13.3825 51.3726 13.1352C51.2847 12.888 51.1526 12.6621 50.9838 12.4706C50.6425 12.0796 49.9976 11.7296 49.0691 11.4002L46.3196 10.4743C44.9357 10.0011 43.912 9.30145 43.2865 8.37523C42.6761 7.5212 42.3429 6.47217 42.3386 5.39131C42.3232 4.59452 42.4996 3.80716 42.8504 3.10704C43.1891 2.445 43.6547 1.86957 44.2158 1.41964C44.8067 0.934074 45.4751 0.571173 46.1874 0.349204C46.9635 0.106733 47.7681 -0.0109332 48.5756 -3.98571e-05C49.0002 -0.00338117 49.4245 0.0241274 49.8457 0.0823013C50.2818 0.144057 50.6801 0.226398 51.0779 0.308622C51.4572 0.411548 51.8173 0.514357 52.1586 0.637986C52.4352 0.730873 52.7021 0.855026 52.9548 1.0084C53.1781 1.13059 53.3726 1.30659 53.5235 1.52292C53.6468 1.72317 53.7067 1.96154 53.6941 2.202V3.16915C53.6941 3.60133 53.5424 3.82788 53.258 3.82788C53.1063 3.82788 52.8599 3.74554 52.5376 3.58086C51.457 3.0458 50.2437 2.77827 48.8977 2.77827C47.8171 2.77827 46.9641 2.96342 46.3764 3.35466C45.7887 3.74589 45.4854 4.34275 45.4854 5.18616C45.4802 5.45942 45.5282 5.73079 45.6262 5.98255C45.7242 6.23432 45.87 6.46081 46.0541 6.64724C46.4334 7.03825 47.1347 7.42925 48.1395 7.77908L50.8315 8.7046C52.1969 9.17794 53.1823 9.83644 53.7699 10.6801C54.3486 11.5079 54.6556 12.522 54.642 13.5611C54.6517 14.3876 54.483 15.2052 54.1491 15.9481C53.8127 16.6525 53.3407 17.2701 52.7652 17.7591C52.1393 18.2879 51.4246 18.6795 50.6608 18.9118C49.7827 19.205 48.8685 19.3507 47.9499 19.344L47.95 19.3437Z" fill="white"/>
    <path d="M51.5327 29.3445C45.2956 34.345 36.2339 36.9996 28.4423 36.9996C17.5227 37.0001 7.68366 32.6168 0.252513 25.3321C-0.335152 24.7557 0.195621 23.9739 0.897069 24.4263C8.93506 29.4887 18.8499 32.5546 29.1059 32.5546C36.0255 32.5546 43.6274 30.9901 50.6228 27.7803C51.6655 27.2658 52.5565 28.5214 51.5331 29.3448L51.5327 29.3445Z" fill="#FF9900"/>
    <path d="M54.1301 26.1346C53.3338 25.0234 48.8599 25.5996 46.8314 25.8671C46.2245 25.9495 46.1299 25.3731 46.6797 24.9411C50.2437 22.2248 56.1016 23.0067 56.7841 23.9122C57.4668 24.8382 56.5945 31.1969 53.258 34.2426C52.7462 34.716 52.2532 34.4689 52.4807 33.8516C53.2391 31.8143 54.9264 27.2253 54.1301 26.1346Z" fill="#FF9900"/>
    </g>
    <defs>
    <clipPath id="clip0_496_16">
    <rect width="57" height="37" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
  );
}


export function GoogleIcon(props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
    <rect width="40" height="32" fill="url(#pattern0_497_3)"/>
    <defs>
    <pattern id="pattern0_497_3" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_497_3" transform="matrix(0.00195312 0 0 0.00244141 0 -0.00292969)"/>
    </pattern>
    <image id="image0_497_3" width="512" height="412" xlinkHref="data:image/png;base64,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"/>
    </defs>
    </svg>
    
  );
}

export function GitIcon(props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.84 18.4413L21.5587 3.16007C21.3497 2.95031 21.1013 2.78387 20.8278 2.67031C20.5543 2.55675 20.2611 2.49829 19.965 2.49829C19.6688 2.49829 19.3756 2.55675 19.1021 2.67031C18.8286 2.78387 18.5802 2.95031 18.3712 3.16007L15.1975 6.33382L19.2225 10.3588C19.6971 10.1973 20.2076 10.1723 20.6957 10.2868C21.1838 10.4013 21.63 10.6506 21.9833 11.0063C22.3366 11.3619 22.583 11.8097 22.6942 12.2986C22.8054 12.7875 22.7771 13.2978 22.6125 13.7713L26.4875 17.6463C27.0667 17.4473 27.6966 17.4528 28.2722 17.6619C28.8479 17.871 29.3345 18.271 29.6511 18.7953C29.9676 19.3196 30.0949 19.9366 30.0117 20.5434C29.9286 21.1501 29.6401 21.7101 29.1942 22.13C28.7483 22.5498 28.172 22.8042 27.5613 22.8507C26.9507 22.8973 26.3425 22.7332 25.8381 22.3857C25.3338 22.0383 24.9637 21.5285 24.7896 20.9413C24.6155 20.3541 24.6478 19.725 24.8812 19.1588L21.2625 15.5401V25.0613C21.8106 25.3329 22.2492 25.7841 22.5051 26.3398C22.7611 26.8955 22.8189 27.5221 22.669 28.1152C22.519 28.7083 22.1704 29.2322 21.6812 29.5995C21.192 29.9668 20.5917 30.1554 19.9803 30.134C19.3689 30.1125 18.7833 29.8822 18.3211 29.4814C17.8589 29.0806 17.5479 28.5336 17.44 27.9314C17.3321 27.3292 17.4338 26.7082 17.7281 26.1719C18.0224 25.6356 18.4916 25.2163 19.0575 24.9838V15.3751C18.7301 15.2407 18.4325 15.043 18.1819 14.7931C17.9313 14.5433 17.7325 14.2464 17.5972 13.9194C17.4618 13.5925 17.3925 13.242 17.3932 12.8881C17.3939 12.5342 17.4646 12.184 17.6012 11.8576L13.6387 7.89257L3.15996 18.3751C2.95001 18.5841 2.78342 18.8326 2.66975 19.1062C2.55607 19.3798 2.49756 19.6732 2.49756 19.9694C2.49756 20.2657 2.55607 20.5591 2.66975 20.8327C2.78342 21.1063 2.95001 21.3548 3.15996 21.5638L18.4412 36.8401C18.6502 37.0498 18.8986 37.2163 19.1721 37.3298C19.4456 37.4434 19.7388 37.5018 20.035 37.5018C20.3311 37.5018 20.6243 37.4434 20.8978 37.3298C21.1713 37.2163 21.4197 37.0498 21.6287 36.8401L36.84 21.6251C37.0499 21.416 37.2165 21.1675 37.3302 20.8939C37.4438 20.6203 37.5024 20.327 37.5024 20.0307C37.5024 19.7344 37.4438 19.441 37.3302 19.1674C37.2165 18.8938 37.0499 18.6454 36.84 18.4363" fill="#DD4C35"/>
    <path d="M15.1974 6.33374L19.2224 10.3587C19.6971 10.1972 20.2075 10.1723 20.6956 10.2867C21.1838 10.4012 21.6299 10.6505 21.9833 11.0062C22.3366 11.3619 22.5829 11.8097 22.6942 12.2985C22.8054 12.7874 22.7771 13.2977 22.6124 13.7712L26.4874 17.6462C27.0666 17.4473 27.6966 17.4528 28.2722 17.6618C28.8479 17.8709 29.3345 18.2709 29.651 18.7952C29.9675 19.3196 30.0948 19.9365 30.0117 20.5433C29.9286 21.1501 29.64 21.71 29.1941 22.1299C28.7483 22.5497 28.172 22.8041 27.5613 22.8507C26.9506 22.8972 26.3424 22.7331 25.8381 22.3856C25.3337 22.0382 24.9637 21.5284 24.7895 20.9412C24.6154 20.3541 24.6478 19.725 24.8812 19.1587L21.2624 15.54V25.0612C21.8106 25.3328 22.2492 25.7841 22.5051 26.3397C22.761 26.8954 22.8188 27.522 22.6689 28.1151C22.519 28.7082 22.1704 29.2321 21.6812 29.5994C21.192 29.9667 20.5917 30.1554 19.9803 30.1339C19.3689 30.1124 18.7833 29.8821 18.3211 29.4813C17.8588 29.0805 17.5479 28.5335 17.44 27.9313C17.3321 27.3291 17.4337 26.7082 17.728 26.1718C18.0224 25.6355 18.4915 25.2162 19.0574 24.9837V15.375C18.73 15.2407 18.4325 15.0429 18.1818 14.7931C17.9312 14.5433 17.7325 14.2463 17.5971 13.9193C17.4618 13.5924 17.3925 13.2419 17.3931 12.888C17.3938 12.5342 17.4645 12.1839 17.6012 11.8575L13.6387 7.89249" fill="white"/>
    </svg>
    
  );
}

export function GitHubIcon(props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 40 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.3">
    <path d="M20.0002 3.33325C15.5799 3.33325 11.3407 5.0892 8.21505 8.21481C5.08944 11.3404 3.3335 15.5796 3.3335 19.9999C3.3335 24.4202 5.08944 28.6594 8.21505 31.785C11.3407 34.9106 15.5799 36.6666 20.0002 36.6666C24.4204 36.6666 28.6597 34.9106 31.7853 31.785C34.9109 28.6594 36.6668 24.4202 36.6668 19.9999C36.6668 15.5796 34.9109 11.3404 31.7853 8.21481C28.6597 5.0892 24.4204 3.33325 20.0002 3.33325Z" fill="black"/>
    <path d="M20.0002 3.33325C15.5799 3.33325 11.3407 5.0892 8.21505 8.21481C5.08944 11.3404 3.3335 15.5796 3.3335 19.9999C3.3335 24.4202 5.08944 28.6594 8.21505 31.785C11.3407 34.9106 15.5799 36.6666 20.0002 36.6666C24.4204 36.6666 28.6597 34.9106 31.7853 31.785C34.9109 28.6594 36.6668 24.4202 36.6668 19.9999C36.6668 15.5796 34.9109 11.3404 31.7853 8.21481C28.6597 5.0892 24.4204 3.33325 20.0002 3.33325Z" fill="white"/>
    </g>
    <path d="M18.1667 3.49988C10.5 4.33321 4.33335 10.4999 3.50002 17.9999C2.66668 25.8332 7.16668 32.8332 14 35.4999C14.5 35.6665 15 35.3332 15 34.6665V31.9999C15 31.9999 14.3333 32.1665 13.5 32.1665C11.1667 32.1665 10.1667 30.1665 10 28.9999C9.83335 28.3332 9.50002 27.8332 9.00002 27.3332C8.50002 27.1665 8.33335 27.1665 8.33335 26.9999C8.33335 26.6665 8.83335 26.6665 9.00002 26.6665C10 26.6665 10.8333 27.8332 11.1667 28.3332C12 29.6665 13 29.9999 13.5 29.9999C14.1667 29.9999 14.6667 29.8332 15 29.6665C15.1667 28.4999 15.6667 27.3332 16.6667 26.6665C12.8333 25.8332 10 23.6665 10 19.9999C10 18.1665 10.8333 16.3332 12 14.9999C11.8333 14.6665 11.6667 13.8332 11.6667 12.6665C11.6667 11.9999 11.6667 10.9999 12.1667 9.99988C12.1667 9.99988 14.5 9.99988 16.8333 12.1665C17.6667 11.8332 18.8333 11.6665 20 11.6665C21.1667 11.6665 22.3333 11.8332 23.3333 12.1665C25.5 9.99988 28 9.99988 28 9.99988C28.3333 10.9999 28.3333 11.9999 28.3333 12.6665C28.3333 13.9999 28.1667 14.6665 28 14.9999C29.1667 16.3332 30 17.9999 30 19.9999C30 23.6665 27.1667 25.8332 23.3333 26.6665C24.3333 27.4999 25 28.9999 25 30.4999V34.8332C25 35.3332 25.5 35.8332 26.1667 35.6665C32.3333 33.1665 36.6667 27.1665 36.6667 20.1665C36.6667 10.1665 28.1667 2.33321 18.1667 3.49988Z" fill="black"/>
    <path d="M18.1667 3.49988C10.5 4.33321 4.33335 10.4999 3.50002 17.9999C2.66668 25.8332 7.16668 32.8332 14 35.4999C14.5 35.6665 15 35.3332 15 34.6665V31.9999C15 31.9999 14.3333 32.1665 13.5 32.1665C11.1667 32.1665 10.1667 30.1665 10 28.9999C9.83335 28.3332 9.50002 27.8332 9.00002 27.3332C8.50002 27.1665 8.33335 27.1665 8.33335 26.9999C8.33335 26.6665 8.83335 26.6665 9.00002 26.6665C10 26.6665 10.8333 27.8332 11.1667 28.3332C12 29.6665 13 29.9999 13.5 29.9999C14.1667 29.9999 14.6667 29.8332 15 29.6665C15.1667 28.4999 15.6667 27.3332 16.6667 26.6665C12.8333 25.8332 10 23.6665 10 19.9999C10 18.1665 10.8333 16.3332 12 14.9999C11.8333 14.6665 11.6667 13.8332 11.6667 12.6665C11.6667 11.9999 11.6667 10.9999 12.1667 9.99988C12.1667 9.99988 14.5 9.99988 16.8333 12.1665C17.6667 11.8332 18.8333 11.6665 20 11.6665C21.1667 11.6665 22.3333 11.8332 23.3333 12.1665C25.5 9.99988 28 9.99988 28 9.99988C28.3333 10.9999 28.3333 11.9999 28.3333 12.6665C28.3333 13.9999 28.1667 14.6665 28 14.9999C29.1667 16.3332 30 17.9999 30 19.9999C30 23.6665 27.1667 25.8332 23.3333 26.6665C24.3333 27.4999 25 28.9999 25 30.4999V34.8332C25 35.3332 25.5 35.8332 26.1667 35.6665C32.3333 33.1665 36.6667 27.1665 36.6667 20.1665C36.6667 10.1665 28.1667 2.33321 18.1667 3.49988Z" fill="black" fillOpacity="0.2"/>
    </svg>
    
    
  );
}

export function Postman (props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="#f37036" d="M113.117 26.066C92.168-1.062 53.191-6.07 26.062 14.883c-27.125 20.953-32.128 59.93-11.175 87.055 20.957 27.124 59.937 32.124 87.058 11.167 27.114-20.953 32.118-59.918 11.172-87.039Zm0 0"/>
    <path fill="#fff" d="M91.078 24.164a10.038 10.038 0 0 0-5.781 2.426 10.028 10.028 0 0 0-1.54 13.465 10.028 10.028 0 0 0 13.276 2.715h.002v.001l.156.155a10.63 10.63 0 0 0 1.965-1.45A10.341 10.341 0 0 0 99 27.107v-.002l-8.844 8.789-.156-.155 8.844-8.793a10.038 10.038 0 0 0-7.766-2.78zM79.434 38.551c-4.24-.007-11.163 4.799-28.067 21.703l.084.086c-.092-.032-.185-.035-.185-.035l-6.364 6.308a1.035 1.035 0 0 0 .93 1.762l10.914-2.328a.307.307 0 0 0 .092-.17l.242.25-3.72 3.69h-.18l-22.086 22.26 7.086 6.824a1.254 1.254 0 0 0 1.476.149 1.327 1.327 0 0 0 .645-1.356l-1.035-4.5a.534.534 0 0 1 0-.62 117.285 117.285 0 0 0 26.738-17.583l-4.535-4.537.086-.014-2.69-2.689.172-.174.182.186-.094.091 7.137 7.293v-.003c13.68-12.954 23.39-23.367 20.865-30.375a3.83 3.83 0 0 0-1.107-2.208v.004a3.778 3.778 0 0 0-.483-.306c-.083-.088-.156-.178-.244-.264l-.066.066a3.778 3.778 0 0 0-.582-.29l.289-.292c-1.796-1.6-3.28-2.924-5.5-2.93zM30.94 92.21l-5.171 5.172v.004a1.03 1.03 0 0 0-.457 1.125 1.035 1.035 0 0 0 .921.789l12.672.875-7.965-7.965z"/>
    <path fill="#f37036" d="M91.95 23.31a11.047 11.047 0 0 0-7.759 3.17 10.988 10.988 0 0 0-2.39 11.641c-4.741-2.03-11.155 1.51-31.106 21.457a.932.932 0 0 0-.037.094 1.242 1.242 0 0 0-.119.062l-6.309 6.364a1.97 1.97 0 0 0-.363 2.324 2.012 2.012 0 0 0 1.707.984l.313-.203 8.424-1.797-4.03 4.067a.873.873 0 0 0-.054.166l-19.75 19.799a.798.798 0 0 0-.192.238l-5.086 5.09a1.967 1.967 0 0 0-.414 2.043 1.995 1.995 0 0 0 1.656 1.265l12.618.88a1.01 1.01 0 0 0 .52-.415.886.886 0 0 0 0-1.035l-.026-.025a2.243 2.243 0 0 0 .705-.58 2.237 2.237 0 0 0 .406-1.876l-.984-4.187a126.725 126.725 0 0 0 26.334-16.861 1.091 1.091 0 0 0 .248.103c.254-.019.492-.128.672-.308 13.55-12.83 21.515-21.622 21.515-28.602a8.03 8.03 0 0 0-.431-2.85 10.957 10.957 0 0 0 3.845.83l-.015.004a11.219 11.219 0 0 0 5.183-1.45.775.775 0 0 0 .004.001.835.835 0 0 0 .617-.055 9.398 9.398 0 0 0 2.07-1.652 10.873 10.873 0 0 0 3.258-7.758 10.873 10.873 0 0 0-3.257-7.758.93.93 0 0 0-.118-.091 11.045 11.045 0 0 0-7.656-3.078zm-.087 1.772a9.27 9.27 0 0 1 5.586 1.914l-8.068 8.117a.84.84 0 0 0-.076.098.83.83 0 0 0-.239.55.832.832 0 0 0 .313.65h.002l6.1 6.1a9.044 9.044 0 0 1-10.028-1.913c-2.586-2.6-3.336-6.504-1.953-9.891 1.383-3.39 4.68-5.605 8.363-5.625zm7.12 3.432a8.87 8.87 0 0 1 2.033 5.674 9.15 9.15 0 0 1-2.688 6.464 9.989 9.989 0 0 1-1.098.895L92.307 36.7l-.963-.963.265-.265 7.373-6.96zm-.366 4.193a.777.777 0 0 0-.55.031.731.731 0 0 0-.36.426.73.73 0 0 0 .05.559 2.226 2.226 0 0 1-.257 2.328.64.64 0 0 0-.195.488c.004.184.07.36.195.492a.58.58 0 0 0 .414 0 .68.68 0 0 0 .672-.207 3.573 3.573 0 0 0 .465-3.777v.004a.777.777 0 0 0-.434-.344zM79.34 39.43a5.584 5.584 0 0 1 3.31 1.226 4.756 4.756 0 0 0-2.681 1.34L57.162 64.701l-4.476-4.476c11.828-11.772 19.06-17.921 23.556-19.936a5.584 5.584 0 0 1 3.098-.86zm3.965 2.96a2.895 2.895 0 0 1 2.043.844 2.786 2.786 0 0 1 .879 2.121 2.869 2.869 0 0 1-.985 2.07l-24.25 21.106-2.617-2.617 22.887-22.68a2.895 2.895 0 0 1 2.043-.843zm2.994 6.698c-1.69 6.702-10.647 15.783-19.987 24.607l-3.777-3.773L86.3 49.088zM51.367 61.547l.274.27 3.513 3.513-9.63 2.06 5.843-5.843zm5.793 5.84.004.004 1.168 1.195a1.086 1.086 0 0 0 .018.084l.078.012.248.254.82.84-5.385.66 3.05-3.05zm3.867 4.076 3.578 3.576A126.992 126.992 0 0 1 38.75 91.695a1.44 1.44 0 0 0-.777 1.653l1.035 4.5a.31.31 0 0 1 0 .363.31.31 0 0 1-.414 0l-6.102-6.152L51.3 72.975l9.728-1.512zm-29.933 21.94.869.814 4.492 4.492-10.016-.648 4.655-4.659z"/>
</svg>

  )
}

export function Notion (props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.145 36.5223L2.8458 31.1664C1.81141 29.8779 1.25 28.2933 1.25 26.6624V7.26874C1.25 4.8258 3.20449 2.79872 5.72589 2.62657L25.6651 1.26523C27.1138 1.16633 28.5535 1.55137 29.7435 2.35588L36.749 7.09239C38.0031 7.94024 38.75 9.32624 38.75 10.8053V32.854C38.75 35.2448 36.8283 37.2241 34.3595 37.3761L12.2292 38.7384C10.2592 38.8596 8.35499 38.0296 7.145 36.5223Z" fill="white"/>
    <path d="M14.0604 16.9732V16.7193C14.0604 16.0757 14.5759 15.5419 15.2402 15.4975L20.0794 15.1744L26.7715 25.0292V16.3799L25.049 16.1503V16.0298C25.049 15.3785 25.5762 14.8413 26.2491 14.8068L30.6522 14.5813V15.2149C30.6522 15.5123 30.431 15.7668 30.1279 15.818L29.0682 15.9973V30.0044L27.7385 30.4617C26.6275 30.8438 25.3907 30.4348 24.7547 29.4752L18.2579 19.6713V29.0285L20.2575 29.4112L20.2297 29.5967C20.1424 30.1777 19.6407 30.6172 19.034 30.6442L14.0604 30.8655C13.9946 30.2407 14.4629 29.6818 15.1089 29.6139L15.7631 29.5452V17.0688L14.0604 16.9732Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M25.8436 3.70835L5.90434 5.06969C4.70999 5.15124 3.78418 6.11144 3.78418 7.26862V26.6623C3.78418 27.7495 4.15845 28.8059 4.84804 29.665L9.14726 35.0208C9.84236 35.8866 10.9362 36.3635 12.0679 36.2939L34.1983 34.9316C35.3325 34.8618 36.2155 33.9523 36.2155 32.8539V10.8052C36.2155 10.1256 35.8724 9.48882 35.2961 9.09927L28.2906 4.36274C27.5766 3.88004 26.7128 3.64902 25.8436 3.70835ZM6.89309 7.57113C6.61577 7.36581 6.74775 6.93807 7.09613 6.91308L25.9778 5.55877C26.5794 5.51562 27.1771 5.68128 27.6636 6.02598L31.4521 8.71004C31.5959 8.81194 31.5285 9.03192 31.3504 9.04161L11.3548 10.1291C10.7497 10.162 10.1524 9.98422 9.67127 9.62801L6.89309 7.57113ZM10.417 13.5383C10.417 12.8886 10.9418 12.3521 11.6128 12.3155L32.7538 11.1642C33.4079 11.1286 33.9584 11.6316 33.9584 12.2647V31.3565C33.9584 32.0049 33.4355 32.5409 32.7658 32.579L11.7586 33.7743C11.0308 33.8158 10.417 33.2564 10.417 32.5518V13.5383Z" fill="black"/>
    </svg>
  )
}

export function CloudFareIcons (props) {
  return (
    <svg
    viewBox="0 0 128 128"
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#FFF"
      d="m115.679 69.288-15.591-8.94-2.689-1.163-63.781.436v32.381h82.061z"
    />
    <path
      fill="#F38020"
      d="M87.295 89.022c.763-2.617.472-5.015-.8-6.796-1.163-1.635-3.125-2.58-5.488-2.689l-44.737-.581c-.291 0-.545-.145-.691-.363s-.182-.509-.109-.8c.145-.436.581-.763 1.054-.8l45.137-.581c5.342-.254 11.157-4.579 13.192-9.885l2.58-6.723c.109-.291.145-.581.073-.872-2.906-13.158-14.644-22.97-28.672-22.97-12.938 0-23.913 8.359-27.838 19.952a13.35 13.35 0 0 0-9.267-2.58c-6.215.618-11.193 5.597-11.811 11.811-.145 1.599-.036 3.162.327 4.615C10.104 70.051 2 78.337 2 88.549c0 .909.073 1.817.182 2.726a.895.895 0 0 0 .872.763h82.57c.472 0 .909-.327 1.054-.8l.617-2.216z"
    />
    <path
      fill="#FAAE40"
      d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069c-.763 2.617-.472 5.015.8 6.796 1.163 1.635 3.125 2.58 5.488 2.689l9.522.581c.291 0 .545.145.691.363.145.218.182.545.109.8-.145.436-.581.763-1.054.8l-9.924.582c-5.379.254-11.157 4.579-13.192 9.885l-.727 1.853c-.145.363.109.727.509.727h34.089c.4 0 .763-.254.872-.654.581-2.108.909-4.325.909-6.614 0-13.447-10.975-24.422-24.458-24.422"
    />
  </svg>
  )
}