"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ServiceCardData {
  id: string;
  title: string;
  category: "residential" | "commercial" | "specialty";
  image: string;
  link: string;
  desc?: string;
  icon: React.ReactNode;
}

export const servicesData: ServiceCardData[] = [
  {
    id: "house-cleaning",
    title: "House Cleaning",
    category: "residential",
    image: "https://clanyeco.vamtam.com/wp-content/uploads/2025/01/GettyImages-1456829834.jpg",
    link: "/service-single",
    desc: "Routine surface sanitization, dusting, vacuuming, and floor care for pristine home environments.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="34" viewBox="0 0 32 37">
        <g fill="none" fillRule="evenodd">
          <path d="M3.56 12.63c.43 7.7 0 24.3 0 24.3s19.38.07 24.71.07c.22-3.42-.37-16.05.17-24.3-7.54 0-18.47-.07-24.88-.07Z" fill="#FFF" />
          <path d="M4.13 36.58h2.54a30360.33 30360.33 0 0 0 19.5.06h1.76v-.06c.02-.4.03-.84.03-1.47v-.75c0-1.17-.02-2.85-.05-5.49-.04-2.8-.06-4.7-.06-6.57v-.7c0-3.32.07-6.1.2-8.45l.01-.08h-1.22l-9.33-.03h-1.94L6.22 13H3.94l.01.31c.1 2.17.15 5.02.16 8.41v1.15a595.34 595.34 0 0 1-.18 13.54v.17h.2Zm24.31-23.87c-.43 6.7-.13 16.31-.12 21.5v.63c0 .9-.01 1.64-.05 2.16h-2.04l-7.74-.02h-2.68L4.4 36.93H3.56v-.03c0-.46.17-7.1.19-13.8v-1.5c-.01-3.34-.06-6.59-.2-8.98h1.22c6.1.01 15.3.07 22.27.08h1.4Z" fill="#000" fillRule="nonzero" />
          <path d="M4.94 13.99c.38 6.84 0 21.6 0 21.6s17.23.06 21.97.06c.2-3.04-.33-14.27.15-21.6-6.7 0-16.42-.06-22.12-.06Z" fill="#FFF" />
          <path d="M26.15 14.23h-.64c-2.14 0-4.67 0-8.17-.02h-1.72l-8.5-.04h-2l.02.14c.1 2.17.15 5.16.15 8.78a529.05 529.05 0 0 1-.13 10.93l-.02.68-.01.6v.11H6.83l.87.01a26986.42 26986.42 0 0 0 17.19.04h1.83l.01-.05c.05-.98.05-2.26-.01-6.64v-.35c-.04-2.81-.06-4.58-.06-6.47 0-2.93.06-5.4.18-7.47l.02-.25h-.72Zm.73-.18h.18c-.15 2.36-.2 5.12-.2 7.88v1.83c.02 5.18.17 10.04.05 11.89h-1.74l-7.52-.02H15.8l-10.13-.04h-.73v-.02c.01-.43.14-5.76.16-11.38v-2.16c0-3-.04-5.9-.16-8.04h1.15c5.4 0 13.48.06 19.64.06h1.15Z" fill="#000" fillRule="nonzero" />
          <path fill="#FFF" d="M12.44 27.07h7.11V37h-7.11z" />
          <path d="M19.56 27.07V37h-7.12v-9.93h7.12Zm-.37.36H12.8v9.2h6.4v-9.2Z" fill="#000" fillRule="nonzero" />
          <path fill="#FFF" d="M7.44 17.07h6v5h-6z" />
          <path d="M13.44 17.07v5h-6v-5h6Zm-.18.18H7.62v4.64h5.64v-4.64Z" fill="#000" fillRule="nonzero" />
          <path fill="#FFF" d="M18.44 17.07h6v5h-6z" />
          <path d="M24.44 17.07v5h-6v-5h6Zm-.18.18h-5.64v4.64h5.64v-4.64ZM17.03 35c-.02 0-.03-.08-.03-.16l.03-4.69.01-.1c0-.04.02-.05.03-.05.02 0 .03.08.03.16l-.03 4.68-.01.11c0 .03-.02.05-.03.05ZM15.04 36l-.03-.05a.56.56 0 0 1-.01-.13l.01-2.65c0-.04 0-.09.02-.12 0-.03.02-.05.03-.05l.03.05.01.13-.01 2.65c0 .1-.02.17-.05.17Z" fill="#000" fillRule="nonzero" />
          <path fill="#DC2626" d="m16 0 16 15H0z" />
          <path d="m16 0 16 15H0L16 0Zm0 .5L.91 14.63H31.1L16 .49Z" fill="#000" fillRule="nonzero" />
        </g>
      </svg>
    ),
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    category: "commercial",
    image: "https://clanyeco.vamtam.com/wp-content/uploads/2025/01/GettyImages-1350786822-1.jpg",
    link: "/service-single",
    desc: "Workstation disinfection, boardroom detailing, breakrooms, and after-hours business hygiene.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="25" viewBox="0 0 46 29">
        <g fill="none" fillRule="evenodd">
          <path d="M4.1 17h23v3H4.08v-3Z" fill="#FFF" />
          <path d="M27.1 17v3h-23v-3h23Zm-.24.23H4.32v2.54h22.54v-2.54Z" fill="#000" fillRule="nonzero" />
          <path fill="#FFF" d="M26.1 6h15v18h-15z" />
          <path d="M41.1 6v18h-15V6h15Zm-.24.23H26.32v17.54h14.54V6.23Z" fill="#000" fillRule="nonzero" />
          <g fillRule="nonzero">
            <path d="M31.8 9.21c-.45.14-.66.79-.49 1.23.19.36.62.51 1 .35a.93.93 0 0 0 .62-.84.85.85 0 0 0-1.13-.74Z" fill="#FFF" />
            <path d="M31.99 11c-.15 0-.3-.03-.44-.1a.74.74 0 0 1-.4-.4c-.1-.33-.07-.68.08-.97.1-.23.3-.4.52-.47a1 1 0 0 1 .92.13c.24.17.4.45.42.75-.01.46-.3.85-.74 1-.11.04-.24.06-.36.06Zm.1-1.6a.66.66 0 0 0-.2.04.5.5 0 0 0-.3.27c-.1.2-.12.42-.06.63.04.1.11.17.2.2.16.07.33.08.5.02a.68.68 0 0 0 .46-.6.62.62 0 0 0-.26-.45.57.57 0 0 0-.33-.11Z" fill="#000" />
          </g>
          <g fillRule="nonzero">
            <path d="M32.8 17.21c-.45.14-.66.79-.49 1.23.19.36.62.51 1 .35a.93.93 0 0 0 .62-.84.85.85 0 0 0-1.13-.74Z" fill="#FFF" />
            <path d="M31.99 19c-.15 0-.3-.03-.44-.1a.74.74 0 0 1-.4-.4c-.1-.33-.07-.68.08-.97.1-.23.3-.4.52-.47a1 1 0 0 1 .92.13c.24.17.4.45.42.75-.01.46-.3.85-.74 1-.11.04-.24.06-.36.06Zm.1-1.6a.66.66 0 0 0-.2.04.5.5 0 0 0-.3.27c-.1.2-.12.42-.06.63.04.1.11.17.2.2.16.07.33.08.5.02a.68.68 0 0 0 .46-.6.62.62 0 0 0-.26-.45.57.57 0 0 0-.33-.11Z" fill="#000" />
          </g>
          <path d="M26.5 13.5c2.65.33 4.81.5 6.5.5 1.69 0 4.22-.17 7.6-.5" fill="#FFF" />
          <path d="m40.58 13.39.03.22c-3.38.34-5.92.5-7.61.5-1.7 0-3.86-.16-6.51-.5l.02-.22c2.65.33 4.8.5 6.49.5 1.68 0 4.21-.17 7.58-.5Z" fill="#000" fillRule="nonzero" />
          <path fill="#FFF" d="M3.1 5h3v24h-3z" />
          <path d="M6.1 5v24h-3V5h3Zm-.24.23H3.32v23.54h2.54V5.23Z" fill="#000" fillRule="nonzero" />
          <path fill="#FFF" d="M39.1 5h3v24h-3z" />
          <path d="M42.1 5v24h-3V5h3Zm-.24.23h-2.54v23.54h2.54V5.23Z" fill="#000" fillRule="nonzero" />
          <path fill="#DC2626" d="M.1 0h45l-1 7h-43z" />
          <path d="m45.1 0-1 7h-43l-1-7h45Zm-.27.23H.36l.93 6.54h42.6l.94-6.54Z" fill="#000" fillRule="nonzero" />
        </g>
      </svg>
    ),
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    category: "specialty",
    image: "https://clanyeco.vamtam.com/wp-content/uploads/2025/01/GettyImages-1724689200.jpg",
    link: "/service-single",
    desc: "Hand-scrubbed baseboards, grout descaling, vent cleaning, and intensive high-touch disinfection.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="22" viewBox="0 0 45 26">
        <g fill="none" fillRule="evenodd">
          <path d="M5.88 4.53c-.29-.18-.64-.28-1-.28H1.92C.87 4.25 0 5.1 0 6.17v19.37c0 .26.2.46.46.46h44.08c.25 0 .46-.2.46-.46V6.17c0-1.06-.87-1.92-1.93-1.92h-2.94c-.37 0-.72.1-1.01.28v-.06A4.49 4.49 0 0 0 34.62 0h-8.08a4.5 4.5 0 0 0-4.04 2.5A4.5 4.5 0 0 0 18.46 0h-8.08c-2.48 0-4.5 2-4.5 4.47v.06Z" fill="#FFF" />
          <path d="M18.46 0a4.5 4.5 0 0 1 4.04 2.5l.06-.12A4.5 4.5 0 0 1 26.54 0h8.08c2.48 0 4.5 2 4.5 4.47v.06c.29-.18.64-.28 1-.28h2.95c1.06 0 1.93.86 1.93 1.92v19.37c0 .26-.2.46-.46.46H.46a.46.46 0 0 1-.46-.46V6.17C0 5.1.87 4.25 1.93 4.25h2.94c.37 0 .72.1 1.01.28v-.12A4.49 4.49 0 0 1 10.39 0h8.08Zm0 .1h-8.08A4.38 4.38 0 0 0 6 4.48v.06l-.16.1a1.84 1.84 0 0 0-.96-.27H1.93c-1 0-1.82.8-1.82 1.8v19.38c0 .2.16.35.35.35h44.08c.2 0 .35-.15.35-.35V6.17c0-1-.82-1.81-1.82-1.81h-2.94c-.34 0-.67.09-.96.26l-.16-.09v-.06C39 2.07 37.04.1 34.6.1h-8.07a4.4 4.4 0 0 0-3.94 2.44h-.2A4.4 4.4 0 0 0 18.46.1Z" fill="#000" fillRule="nonzero" />
          <path d="M5.88 6.17v18.92H.92V6.17c0-.56.45-1.01 1.01-1.01h2.94c.56 0 1.02.45 1.02 1Z" fill="#FFF" />
          <path d="M4.87 5.16c.56 0 1.02.45 1.02 1V25.1H.91V6.17c0-.56.45-1.01 1.01-1.01h2.94Zm0 .23H1.93a.78.78 0 0 0-.78.78v18.68h4.5V6.17c0-.4-.3-.72-.67-.77h-.1Z" fill="#000" fillRule="nonzero" />
          <path d="M39.12 6.17c0-.56.45-1.01 1-1.01h2.95c.56 0 1.01.45 1.01 1V25.1h-4.96V6.17Z" fill="#FFF" />
          <path d="M43.07 5.16c.56 0 1.01.45 1.01 1V25.1h-4.96V6.17c0-.56.45-1.01 1-1.01h2.95Zm0 .23h-2.94a.78.78 0 0 0-.78.78v18.68h4.5V6.17c0-.4-.3-.72-.68-.77h-.1Z" fill="#000" fillRule="nonzero" />
          <path d="M38.2 16.3c0-1.22-1-2.22-2.24-2.22H9.05c-1.24 0-2.25 1-2.25 2.23V19h26.72v.91H6.8v5.17h31.4v-5.17h-4.68v-.9h4.68V16.3Z" fill="#FFF" />
          <path d="M38.2 19.92v5.17H6.8v-5.17h31.4Zm-.11.11H6.9v4.95H38.1v-4.95Zm-2.13-5.95c1.23 0 2.24 1 2.24 2.23V19H6.8v-2.7c0-1.23 1-2.23 2.25-2.23h26.9Zm0 .11H9.05c-1.18 0-2.14.95-2.14 2.12v2.6H38.1v-2.6c0-1.17-.96-2.12-2.13-2.12Z" fill="#000" fillRule="nonzero" />
          <path d="M38.2 16.3c0-1.22-1-2.22-2.24-2.22H9.05c-1.24 0-2.25 1-2.25 2.23V19h26.72v.91H6.8h31.4-4.68v-.9h4.68V16.3Z" fill="#DC2626" />
          <path d="M35.96 14.08c1.23 0 2.24 1 2.24 2.23V19H6.8v-2.7c0-1.23 1-2.23 2.25-2.23h26.9Zm0 .11H9.05c-1.18 0-2.14.95-2.14 2.12v2.6H38.1v-2.6c0-1.17-.96-2.12-2.13-2.12Z" fill="#000" fillRule="nonzero" />
          <path d="M38.2 4.47C38.2 2.5 36.6.9 34.62.9h-8.08a3.57 3.57 0 0 0-3.58 3.56v8.7h13c.87 0 1.66.35 2.24.93V4.47Z" fill="#FFF" />
          <path d="M34.62.91c1.97 0 3.58 1.6 3.58 3.56v9.63a3.16 3.16 0 0 0-2.24-.93h-13v-8.7c0-1.97 1.6-3.56 3.58-3.56h8.08Zm0 .24h-8.08a3.34 3.34 0 0 0-3.35 3.32v8.46h12.77c.68 0 1.34.2 1.89.58l.11.08V4.47c0-1.77-1.4-3.22-3.16-3.32h-.18Z" fill="#000" fillRule="nonzero" />
          <g fill="#000" fillRule="nonzero">
            <path d="M29.3 7.9h-.01a.15.15 0 0 1-.1-.06.16.16 0 0 1-.04-.11 6.6 6.6 0 0 1 1.43-3.47.15.15 0 0 1 .21-.02c.03.02.05.06.06.1 0 .04-.01.08-.04.11a6.33 6.33 0 0 0-1.36 3.31c0 .08-.07.14-.15.14ZM31 8.87h-.03a.16.16 0 0 1-.12-.19c.13-.72.42-1.4.85-2a.15.15 0 0 1 .21-.03c.07.05.08.15.03.22-.4.55-.67 1.2-.79 1.87a.16.16 0 0 1-.15.13Z" />
          </g>
          <path d="M6.8 14.1a3.16 3.16 0 0 1 2.25-.93h13v-8.7C22.04 2.5 20.43.9 18.45.9h-8.08A3.57 3.57 0 0 0 6.8 4.47v9.63Z" fill="#FFF" />
          <path d="M18.46.91c1.98 0 3.58 1.6 3.58 3.56v8.7h-13c-.87 0-1.66.35-2.24.93V4.47C6.8 2.5 8.4.9 10.38.9h8.08Zm0 .24h-8.08a3.33 3.33 0 0 0-3.34 3.32v9.12l.11-.08a3.4 3.4 0 0 1 1.67-.57H21.8V4.46c0-1.77-1.4-3.22-3.17-3.32h-.18Z" fill="#000" fillRule="nonzero" />
          <g fill="#000" fillRule="nonzero">
            <path d="M13.32 8.37h-.02a.15.15 0 0 1-.1-.06.16.16 0 0 1-.03-.12 6.6 6.6 0 0 1 1.42-3.47.15.15 0 0 1 .21-.02c.04.03.05.07.06.1 0 .05-.01.09-.04.12a6.33 6.33 0 0 0-1.35 3.3c-.01.09-.08.15-.15.15ZM15.01 9.33H15a.16.16 0 0 1-.12-.18c.13-.72.42-1.4.84-2a.15.15 0 0 1 .21-.03c.07.05.09.15.04.21-.4.56-.67 1.2-.8 1.88a.16.16 0 0 1-.15.12Z" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: "move-in-out-cleaning",
    title: "Move In Out Cleaning",
    category: "specialty",
    image: "https://clanyeco.vamtam.com/wp-content/uploads/2025/01/GettyImages-1226346559-1.jpg",
    link: "/service-single",
    desc: "100% deposit-pass bond clean covering inside empty cabinets, pantries, oven, and appliances.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="30" viewBox="0 0 42 38">
        <g fill="none" fillRule="evenodd">
          <path d="M9.7 18.4c6.97-6.72 8.96-8.82 15.98-15.53.61.63 1.19 1.3 1.73 2C20.89 10.5 11.16 20.2 11.13 20.2c-.74-.8-.58-.96-1.43-1.8Z" fill="#FFF" fillRule="nonzero" />
          <path d="M11.13 20.35h-.04a5.36 5.36 0 0 1-.7-.88 4.56 4.56 0 0 0-.78-.97.14.14 0 0 1-.04-.1c0-.04.01-.07.04-.1 3.06-2.95 5.13-4.98 7.15-6.96 2.52-2.48 4.9-4.81 8.84-8.57a.13.13 0 0 1 .1-.04c.03 0 .07.02.1.05.2.24.38.44.57.63.41.43.8.9 1.15 1.38.04.06.03.14-.02.18-5.3 4.58-12.85 11.99-15.33 14.42l-.7.68c-.24.23-.29.28-.34.28Zm-1.25-1.94c.28.27.52.57.72.9.15.25.33.5.52.71l.85-.83c2.47-2.42 9.94-9.75 15.24-14.33-.33-.44-.68-.86-1.06-1.25l-.49-.53c-3.87 3.7-6.23 6.01-8.73 8.46-1.97 1.94-4.02 3.96-7.05 6.87Z" fill="#000" fillRule="nonzero" />
          <path d="M27.4 4.87c1.56-1.66 3.09-2 3.84-1.88 1.25.2 1.71 2.4-1.03 5.65a74.85 74.85 0 0 1-3.91 4.33c-2.52 2.53-5.46 4.62-7.56 7.54-1.54 2.17-3 4.56-3.38 7.24-.18 1.23.2 2.71.68 3.86.48 1.15 1.6 2.05 2.75 1.93.62-.06 1.28-.62 1.12-1.25a4.45 4.45 0 0 0-.8-1.52c-2-1.78-.33-5.72 1.15-7.7 2.57-3.47 6.15-5.98 8.9-9.3 1.18-1.43 4.25-4.9 4.98-6.62 1.16-2.76.53-5.13-1.38-6.54-2.04-1.5-5.5 1.23-7.09 2.28.72.72.95 1.33 1.74 1.98Z" fill="#FFF" fillRule="nonzero" />
          <path d="M18.58 33.67c-1.2 0-2.23-.98-2.66-2.02-.28-.67-.91-2.39-.7-3.92.41-2.8 1.96-5.26 3.41-7.3 1.4-1.94 3.19-3.54 4.92-5.09.88-.8 1.8-1.61 2.65-2.47a70.85 70.85 0 0 0 3.9-4.32c1.87-2.2 2.2-3.9 1.89-4.75a.98.98 0 0 0-.77-.68c-.64-.1-2.13.17-3.72 1.84a.14.14 0 0 1-.18 0c-.4-.34-.75-.74-1.05-1.17-.21-.3-.44-.57-.69-.84a.14.14 0 0 1-.03-.1c0-.05.03-.08.06-.1l.58-.4c1.79-1.23 4.77-3.28 6.67-1.88 2.03 1.5 2.55 4 1.41 6.7-.62 1.48-2.93 4.22-4.3 5.84-.28.32-.5.6-.69.83a48.07 48.07 0 0 1-4.12 4.22 40.1 40.1 0 0 0-4.8 5.08c-1.58 2.14-2.99 5.88-1.15 7.51.32.28.75 1.24.84 1.6.07.27.01.56-.16.79a1.56 1.56 0 0 1-1.31.63ZM30.94 2.83a2 2 0 0 1 .32.02c.46.08.84.41.98.86.44 1.19-.27 3.06-1.92 5.02a73.86 73.86 0 0 1-3.92 4.34c-.86.86-1.78 1.68-2.66 2.48a31.99 31.99 0 0 0-4.88 5.05c-1.44 2-2.96 4.43-3.36 7.17-.21 1.46.4 3.12.68 3.77.42 1.01 1.46 1.97 2.61 1.84.36-.04.68-.23.89-.51a.7.7 0 0 0 .12-.57 4.35 4.35 0 0 0-.76-1.46c-2.08-1.84-.41-5.81 1.12-7.88a40.3 40.3 0 0 1 4.82-5.12 47.48 47.48 0 0 0 4.09-4.19l.69-.83c1.37-1.62 3.66-4.33 4.27-5.76 1.1-2.57.6-4.96-1.33-6.38-1.74-1.28-4.63.7-6.35 1.88l-.45.32c.23.26.41.5.59.74.26.38.57.73.91 1.04 1.34-1.36 2.67-1.83 3.54-1.83Z" fill="#000" fillRule="nonzero" />
          <path d="M21.25 35.16c-.69-.02-1.42-.06-1.96-.51-1.05-.88-.7-2.64-.12-3.9 3.07-6.57 10.54-10.46 17.32-9.01 1.39.3 2.81.82 3.74 1.98.77.95 1.11 2.2 1.32 3.44.4 2.27.42 4.58.08 6.86-.02.35-.15.7-.36.98-.31.33-.8.36-1.24.36-2.38.03-14.77-.08-18.78-.2Z" fill="#FFF" fillRule="nonzero" />
          <path d="M33.46 30.6c-2 .38-2.4 2.63-1.9 4.04.4 1.15 1.58 2.26 3.37 1.78 2.11-.57 2.13-2.78 1.9-3.76-.5-2.15-2.43-2.24-3.37-2.06Z" fill="#DC2626" />
          <path d="M33.69 31.58c-1.34.25-1.6 1.75-1.27 2.7.27.76 1.05 1.5 2.25 1.18 1.4-.38 1.42-1.85 1.27-2.5-.34-1.44-1.63-1.5-2.25-1.38Z" fill="#DC2626" />
          <path d="M4.04 15.68c.67-.75 1.84-.8 2.81-.4.8.26 1.5.73 2.06 1.35 1.3 1.31 2.5 2.71 3.6 4.19 1.38 1.87 2.22 3.49.71 5.51L4.04 15.68Z" fill="#DC2626" />
        </g>
      </svg>
    ),
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    category: "specialty",
    image: "/images/service/service-5.jpg",
    link: "/service-single",
    desc: "High-temperature hot water soil extraction and pet stain neutralization for fresh, soft carpets.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="30" viewBox="0 0 34 30">
        <rect x="2" y="4" width="30" height="22" rx="3" fill="#FFF" stroke="#000" strokeWidth="2" />
        <path d="M6 10h22M6 15h22M6 20h22" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Sanitization",
    category: "commercial",
    image: "/images/service/service-6.jpg",
    link: "/service-single",
    desc: "Hospital-grade facility sanitation, floor buffing, retail turnover, and construction cleanup.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" viewBox="0 0 36 30">
        <rect x="3" y="6" width="30" height="20" rx="2" fill="#FFF" stroke="#000" strokeWidth="2" />
        <path d="M8 12h5v10H8zM16 12h5v10h-5zM24 12h4v10h-4z" fill="#DC2626" />
        <path d="M12 2h12v4H12z" fill="#FFF" stroke="#000" strokeWidth="2" />
      </svg>
    ),
  },
];

export interface ServicesSectionProps {
  showAll?: boolean;
}

export default function ServicesSection({ showAll = false }: ServicesSectionProps = {}) {
  const [activeCategory, setActiveCategory] = useState<"all" | "residential" | "commercial" | "specialty">("all");

  const displayedServices = useMemo(() => {
    if (!showAll) {
      // Show default 4 cards on home page
      return servicesData.slice(0, 4);
    }
    if (activeCategory === "all") return servicesData;
    return servicesData.filter((item) => item.category === activeCategory);
  }, [showAll, activeCategory]);

  return (
    <section id="services" className="wpo-service-section py-10 sm:py-14 lg:py-16 relative z-10 bg-white overflow-hidden font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Subtitle & Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-2.5 sm:mb-3.5">
              <span>OUR SERVICES</span>
              <span className="text-[#DC2626] font-sans font-semibold tracking-tighter text-sm">//</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight">
              Here’s What We Can<br />Do for You
            </h2>
          </div>

          {/* Clean text-only category filter tabs (shown when showAll is true) */}
          {showAll && (
            <div className="flex items-center gap-2 flex-wrap pt-2 sm:pt-0">
              {[
                { id: "all", label: "All Services" },
                { id: "residential", label: "Residential" },
                { id: "commercial", label: "Commercial" },
                { id: "specialty", label: "Specialty" },
              ].map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as any)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#DC2626] text-white shadow-xs"
                        : "bg-slate-100 text-[#0E152B] hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-8">
          {displayedServices.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-[24px] sm:rounded-[32px] p-4 sm:p-5 pb-5 sm:pb-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-gradient-to-b from-[#FFD6D6] via-[#FFEAEB]/85 to-[#FFF5F5] border-t-4 border-[#DC2626] border-x border-b border-red-100/60 shadow-sm"
            >
              <div>
                {/* Top Image Box */}
                <div className="relative w-full aspect-[4/3] rounded-[20px] sm:rounded-[24px] overflow-hidden mb-4 sm:mb-5 bg-slate-100 shadow-xs">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-[20px] sm:rounded-[24px]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0E152B] font-serif px-1 mb-2 leading-snug group-hover:text-[#DC2626] transition-colors">
                  <Link href={item.link}>{item.title}</Link>
                </h3>

                {/* Description */}
                {item.desc && (
                  <p className="text-xs sm:text-sm text-[#0E152B]/75 leading-relaxed px-1 mb-5">
                    {item.desc}
                  </p>
                )}
              </div>

              {/* Bottom "Learn more" Button */}
              <Link
                href={item.link}
                className="w-full bg-white rounded-full py-3 sm:py-3.5 px-4 sm:px-5 flex items-center justify-between shadow-xs transition-all duration-300 group-hover:bg-[#DC2626] group-hover:text-white border border-red-50 mt-2"
              >
                <span className="text-xs sm:text-sm font-bold text-[#0E152B] group-hover:text-white transition-colors">
                  Learn more
                </span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center group-hover:bg-white group-hover:text-[#DC2626] transition-all">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
