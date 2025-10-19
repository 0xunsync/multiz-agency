
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FestivalIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M20,80 L20,40 L35,30 L50,20 L65,30 L80,40 L80,80" />
        <circle cx="50" cy="50" r="15" />
        <line x1="35" y1="40" x2="35" y2="80" />
        <line x1="65" y1="40" x2="65" y2="80" />
    </svg>
);

export const NightclubIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="20" />
        <circle cx="50" cy="50" r="10" />
        <line x1="50" y1="20" x2="50" y2="10" />
        <line x1="50" y1="80" x2="50" y2="90" />
        <line x1="20" y1="50" x2="10" y2="50" />
        <line x1="80" y1="50" x2="90" y2="50" />
    </svg>
);

export const MetaverseIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" />
        <polygon points="50,30 70,42 70,58 50,70 30,58 30,42" />
        <circle cx="50" cy="50" r="8" />
    </svg>
);

export const SyncIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <rect x="15" y="25" width="70" height="50" rx="5" />
        <circle cx="35" cy="50" r="8" />
        <polygon points="65,40 80,50 65,60" />
        <line x1="15" y1="15" x2="85" y2="15" />
        <line x1="15" y1="85" x2="85" y2="85" />
    </svg>
);

export const ListenIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <circle cx="50" cy="50" r="35" />
        <path d="M35,50 L45,60 L65,40" strokeWidth="3" />
    </svg>
);

export const MatchIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <circle cx="50" cy="50" r="35" />
        <circle cx="35" cy="40" r="6" />
        <circle cx="65" cy="40" r="6" />
        <circle cx="50" cy="65" r="6" />
        <line x1="35" y1="40" x2="50" y2="65" />
        <line x1="65" y1="40" x2="50" y2="65" />
    </svg>
);

export const DeliverIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <circle cx="50" cy="50" r="35" />
        <path d="M30,50 L45,65 L70,40" strokeWidth="3" />
        <circle cx="50" cy="30" r="4" />
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const EmailIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

export const LinkedInIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

export const XIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

export const MenuIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

export const SpotifyIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M7.5 14.5C11.5 12.5 16.5 14.5 16.5 14.5" />
        <path d="M8.5 11.5C11.5 10.5 15.5 11.5 15.5 11.5" />
        <path d="M9.5 8.5C11.5 8.5 14.5 9 14.5 9" />
    </svg>
);

export const SoundCloudIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 15.5C4 14.12 5.12 13 6.5 13H8V18H6.5C5.12 18 4 16.88 4 15.5Z" />
        <path d="M8 18V13H18.5C19.88 13 21 14.12 21 15.5C21 16.88 19.88 18 18.5 18H8Z" />
        <path d="M12 13V6C12 4.34315 10.6569 3 9 3C7.34315 3 6 4.34315 6 6" />
        <path d="M2 12V18" />
    </svg>
);

export const PauseIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
    </svg>
);

export const PlayIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path d="M5 3l14 9-14 9V3z"></path>
    </svg>
);
