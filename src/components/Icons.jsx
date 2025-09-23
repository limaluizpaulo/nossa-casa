import React from 'react';

// Componente base para ícones SVG
const Icon = ({ children, size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#111111"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon ${className}`}
    {...props}
  >
    {children}
  </svg>
);

// Ícones modernos em preto para substituir emojis
export const PaletteIcon = (props) => (
  <Icon {...props}>
    <circle cx="13.5" cy="6.5" r=".5" fill="#111111"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="#111111"/>
    <circle cx="8.5" cy="7.5" r=".5" fill="#111111"/>
    <circle cx="6.5" cy="12.5" r=".5" fill="#111111"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </Icon>
);

export const CalendarIcon = (props) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </Icon>
);

export const HomeIcon = (props) => (
  <Icon {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </Icon>
);

export const ShoppingBagIcon = (props) => (
  <Icon {...props}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="m16 10a4 4 0 0 1-8 0"/>
  </Icon>
);

export const HeartIcon = (props) => (
  <Icon {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </Icon>
);

export const HandshakeIcon = (props) => (
  <Icon {...props}>
    <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
    <path d="m21 3 1 11h-2"/>
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
    <path d="M3 4h8"/>
  </Icon>
);

export const SearchIcon = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </Icon>
);

export const BarChartIcon = (props) => (
  <Icon {...props}>
    <line x1="12" y1="20" x2="12" y2="10"/>
    <line x1="18" y1="20" x2="18" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="16"/>
  </Icon>
);

export const TargetIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </Icon>
);

export const BookOpenIcon = (props) => (
  <Icon {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </Icon>
);

export const AccessibilityIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="4" r="2"/>
    <path d="m15.5 8.5-3 0-3 0"/>
    <path d="m9 9 1.5 7 1.5-7 1.5 7 1.5-7"/>
    <path d="M9 15.5 11 20l1-4.5L13 20l2-4.5"/>
  </Icon>
);

export const BuildingIcon = (props) => (
  <Icon {...props}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v8h4"/>
    <path d="M18 9h2a2 2 0 0 1 2 2v11h-4"/>
    <path d="M10 6h4"/>
    <path d="M10 10h4"/>
    <path d="M10 14h4"/>
    <path d="M10 18h4"/>
  </Icon>
);

export const SeedlingIcon = (props) => (
  <Icon {...props}>
    <path d="M12 22v-8.5"/>
    <path d="M8.5 14.5c-.7-1.5-2.2-2.5-4-2.5C2.6 12 1 13.6 1 15.5S2.6 19 4.5 19c1.8 0 3.3-1 4-2.5"/>
    <path d="M15.5 9.5c.7-1.5 2.2-2.5 4-2.5C21.4 7 23 8.6 23 10.5S21.4 14 19.5 14c-1.8 0-3.3-1-4-2.5"/>
  </Icon>
);

export const LightbulbIcon = (props) => (
  <Icon {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
  </Icon>
);

export const StarIcon = (props) => (
  <Icon {...props}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </Icon>
);

export const TrendingUpIcon = (props) => (
  <Icon {...props}>
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
    <polyline points="16,7 22,7 22,13"/>
  </Icon>
);

export const RainbowIcon = (props) => (
  <Icon {...props}>
    <path d="M22 17a10 10 0 0 0-20 0"/>
    <path d="M6 17a6 6 0 0 1 12 0"/>
    <path d="M10 17a2 2 0 0 1 4 0"/>
  </Icon>
);

export const TheaterIcon = (props) => (
  <Icon {...props}>
    <path d="M2 16.1A5 5 0 0 1 5.9 20M6.3 20.7l13.38-2.22a1 1 0 0 0 .83-.98l.8-13.21a1 1 0 0 0-.98-1.06l-13.56.8a1 1 0 0 0-.98.99l.8 13.79a1 1 0 0 0 1.05.98z"/>
    <circle cx="12" cy="9" r="1"/>
    <path d="m5 17 2 2"/>
    <path d="m15 9 2 2"/>
  </Icon>
);

export const SparklesIcon = (props) => (
  <Icon {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </Icon>
);

export const MailIcon = (props) => (
  <Icon {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </Icon>
);

export const PhoneIcon = (props) => (
  <Icon {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </Icon>
);

export const FileTextIcon = (props) => (
  <Icon {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10,9 9,9 8,9"/>
  </Icon>
);

export const ShirtIcon = (props) => (
  <Icon {...props}>
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z"/>
  </Icon>
);

export const BagIcon = (props) => (
  <Icon {...props}>
    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
  </Icon>
);

export const PlantIcon = (props) => (
  <Icon {...props}>
    <path d="M7 20h10"/>
    <path d="M10 20c5.5-2.5.8-6.4 3-10"/>
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.7 4.3-1.4 1-1.1 1.6-2.7 1.7-4.9-2.7.1-4 1-4.9 2.3z"/>
  </Icon>
);

export const LaptopIcon = (props) => (
  <Icon {...props}>
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>
  </Icon>
);

export const CreditCardIcon = (props) => (
  <Icon {...props}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </Icon>
);

export const PartyIcon = (props) => (
  <Icon {...props}>
    <path d="M5.5 4a6.5 6.5 0 0 1 13 0c0 6-6 6-6 10a3.5 3.5 0 0 1-7 0c0-4-6-4-6-10a6.5 6.5 0 0 1 6.5-6.5z"/>
    <path d="M2 2 22 22"/>
    <path d="M8 15l8-8"/>
    <path d="m16 8-8 8"/>
  </Icon>
);

export const DollarSignIcon = (props) => (
  <Icon {...props}>
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </Icon>
);

export const SmartphoneIcon = (props) => (
  <Icon {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </Icon>
);

// Ícones adicionais que faltavam
export const TruckIcon = (props) => (
  <Icon {...props}>
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/>
    <circle cx="5.5" cy="18" r="2.5"/>
    <circle cx="18.5" cy="18" r="2.5"/>
  </Icon>
);

export const ClipboardIcon = (props) => (
  <Icon {...props}>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
  </Icon>
);

export const ClockIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </Icon>
);

export const UsersIcon = (props) => (
  <Icon {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </Icon>
);

export const ShareIcon = (props) => (
  <Icon {...props}>
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </Icon>
);

export const CheckIcon = (props) => (
  <Icon {...props}>
    <polyline points="20,6 9,17 4,12"/>
  </Icon>
);

export const AlertTriangleIcon = (props) => (
  <Icon {...props}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </Icon>
);

export const DownloadIcon = (props) => (
  <Icon {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </Icon>
);

export const BuildingGovIcon = (props) => (
  <Icon {...props}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v8h4"/>
    <path d="M18 9h2a2 2 0 0 1 2 2v11h-4"/>
    <path d="M10 6h4"/>
    <path d="M10 10h4"/>
    <path d="M10 14h4"/>
    <path d="M10 18h4"/>
  </Icon>
);

export const MegaphoneIcon = (props) => (
  <Icon {...props}>
    <path d="m3 11 18-5v12L3 14v-3z"/>
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
  </Icon>
);

export const InboxIcon = (props) => (
  <Icon {...props}>
    <polyline points="22,12 16,12 14,15 10,15 8,12 2,12"/>
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  </Icon>
);

export const CameraIcon = (props) => (
  <Icon {...props}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
    <circle cx="12" cy="13" r="3"/>
  </Icon>
);

export const VideoIcon = (props) => (
  <Icon {...props}>
    <polygon points="23,7 16,12 23,17 23,7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </Icon>
);

export const MusicIcon = (props) => (
  <Icon {...props}>
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </Icon>
);

export const GlobeIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </Icon>
);

export const MapPinIcon = (props) => (
  <Icon {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </Icon>
);

export const BusIcon = (props) => (
  <Icon {...props}>
    <path d="M8 6v6"/>
    <path d="M15 6v6"/>
    <path d="M2 12h19.6"/>
    <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2L21 10"/>
    <path d="M2 10l.8 2.8c-.1.4-.2.8-.2 1.2 0 .4.1.8.2 1.2L4 18h3"/>
    <circle cx="7" cy="18" r="2"/>
    <path d="M9 18h5"/>
    <circle cx="16" cy="18" r="2"/>
  </Icon>
);

export const CarIcon = (props) => (
  <Icon {...props}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 9H5.6L3.5 11.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"/>
    <circle cx="7" cy="17" r="2"/>
    <path d="M9 17h6"/>
    <circle cx="17" cy="17" r="2"/>
    <path d="M5 9l1.5-4.5A2 2 0 0 1 8.4 3h7.2a2 2 0 0 1 1.9 1.5L19 9"/>
  </Icon>
);

export const VolumeIcon = (props) => (
  <Icon {...props}>
    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </Icon>
);

export const ProjectorIcon = (props) => (
  <Icon {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </Icon>
);

export const ChefHatIcon = (props) => (
  <Icon {...props}>
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
    <line x1="6" y1="17" x2="18" y2="17"/>
  </Icon>
);

export const LeafIcon = (props) => (
  <Icon {...props}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </Icon>
);

export const MuscleIcon = (props) => (
  <Icon {...props}>
    <path d="M6 2v6a6 6 0 0 0 12 0V2"/>
    <path d="M8 22a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2 2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/>
    <path d="M16 22a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2 2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/>
  </Icon>
);

export const WrenchIcon = (props) => (
  <Icon {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </Icon>
);

export const GraduationCapIcon = (props) => (
  <Icon {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </Icon>
);

export const NewsIcon = (props) => (
  <Icon {...props}>
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
    <path d="M18 14h-8"/>
    <path d="M15 18h-5"/>
    <path d="M10 6h8v4h-8z"/>
  </Icon>
);

export const FlowerIcon = (props) => (
  <Icon {...props}>
    <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 1 4.5 4.5M7.5 12H9m3 7.5a4.5 4.5 0 1 1 4.5-4.5M12 19.5V18m4.5-6a4.5 4.5 0 1 1-4.5 4.5M16.5 12H15m-3-7.5a4.5 4.5 0 1 1-4.5 4.5M12 4.5V6"/>
    <circle cx="12" cy="12" r="2"/>
  </Icon>
);

export default {
  PaletteIcon,
  CalendarIcon,
  HomeIcon,
  ShoppingBagIcon,
  HeartIcon,
  HandshakeIcon,
  SearchIcon,
  BarChartIcon,
  TargetIcon,
  BookOpenIcon,
  AccessibilityIcon,
  BuildingIcon,
  SeedlingIcon,
  LightbulbIcon,
  StarIcon,
  TrendingUpIcon,
  RainbowIcon,
  TheaterIcon,
  SparklesIcon,
  MailIcon,
  PhoneIcon,
  FileTextIcon,
  ShirtIcon,
  BagIcon,
  PlantIcon,
  LaptopIcon,
  CreditCardIcon,
  PartyIcon,
  DollarSignIcon,
  SmartphoneIcon,
  TruckIcon,
  ClipboardIcon,
  ClockIcon,
  UsersIcon,
  ShareIcon,
  CheckIcon,
  AlertTriangleIcon,
  DownloadIcon,
  BuildingGovIcon,
  MegaphoneIcon,
  InboxIcon,
  CameraIcon,
  VideoIcon,
  MusicIcon,
  GlobeIcon,
  MapPinIcon,
  BusIcon,
  CarIcon,
  VolumeIcon,
  ProjectorIcon,
  ChefHatIcon,
  LeafIcon,
  MuscleIcon,
  WrenchIcon,
  GraduationCapIcon,
  NewsIcon,
  FlowerIcon
};