import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

/* ── SVG icon components ── */
const UserIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2589bd" stroke="none">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

const CalendarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2589bd" stroke="none">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
    </svg>
);

const AwardIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2589bd" stroke="none">
        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
    </svg>
);

const ShieldIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2589bd" stroke="none">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
);

const TagIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2589bd" stroke="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
);

const TwitterIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#94a3b8">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#94a3b8">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
    </svg>
);

const MoonIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

const SunIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const LinkedinSmallIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#94a3b8">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
);

/* ─── Certificate Data Mapping ─── */
const CERTIFICATES_DATA = {
    // Current one
    "f26c96e6-1bd2-4917-bd8d-5dd9f663136a": {
        name: "HARSHITH B N",
        usn: "1GA22AD019",
        type: "Participant",
        eventName: "Public Health Awareness Program",
        eventType: "Charity Event",
        startDate: "09/07/2024",
        endDate: "09/23/2024"
    },
    // Garbage Disposal
    "7d2e9a3b-4c51-4f8a-9e6b-1d7c8a4f2b3e": {
        name: "HARSHITH B N",
        usn: "1GA22AD019",
        type: "Participant",
        eventName: "Developing And Managing Efficient Garbage Disposal System",
        eventType: "Environmental Project",
        startDate: "07/09/2025",
        endDate: "07/25/2025"
    },
    // Digitized Money
    "3f4e1d2a-9b8c-4f51-b2a3-6d7e8f9c0a1b": {
        name: "HARSHITH B N",
        usn: "1GA22AD019",
        type: "Participant",
        eventName: "Facilitating 100% Digitized Money Transactions",
        eventType: "Financial Literacy",
        startDate: "04/05/2024",
        endDate: "04/18/2024"
    },
    // Swachh Bharath
    "a1b2c3d4-e5f6-4a5b-bcde-f1a2b3c4d5e6": {
        name: "HARSHITH B N",
        usn: "1GA22AD019",
        type: "Participant",
        eventName: "Swachh Bharath (National Initiative)",
        eventType: "National Service",
        startDate: "11/22/2025",
        endDate: "12/10/2025"
    },
    // Sustainable Water
    "e9a8b7c6-d5e4-4f3a-9b8c-7d6e5a4b3c2d": {
        name: "HARSHITH B N",
        usn: "1GA22AD019",
        type: "Participant",
        eventName: "Developing Sustainable Water Management System",
        eventType: "Sustainability Project",
        startDate: "01/29/2025",
        endDate: "02/12/2025"
    }
};

const CertificatePortal = () => {
    const { id } = useParams();
    const data = CERTIFICATES_DATA[id] || CERTIFICATES_DATA["f26c96e6-1bd2-4917-bd8d-5dd9f663136a"];

    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark';
        }
        return false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
    };

    return (
        <div className="min-h-screen bg-[#eef2f6] dark:bg-[#0f172a] transition-colors duration-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

            {/* ─── Header Bar ─── */}
            <header className="bg-[#1b2e4b] px-6 md:px-10 py-2.5 flex items-center justify-between">
                <a href="https://givemycertificate.com/" className="flex items-center gap-2.5">
                    <img src="/img/download.png" alt="Give My Certificate" className="h-7 w-7" />
                    <span className="text-[#3ec1c1] font-bold text-sm tracking-tight">Give My Certificate</span>
                </a>
                <button onClick={toggleTheme} className="text-white/70 hover:text-white transition-colors">
                    {isDark ? <SunIcon /> : <MoonIcon />}
                </button>
            </header>

            {/* ─── Main Content ─── */}
            <main className="w-full max-w-[960px] mx-auto px-4 py-6 md:py-10">
                <div className="bg-white dark:bg-slate-800 rounded shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-100 dark:border-slate-700 px-8 md:px-16 py-10 md:py-14">

                    {/* Organization Header */}
                    <div className="flex items-center gap-4 mb-12">
                        <a href="https://connect4society.org/" target="_blank" rel="noopener noreferrer">
                            <img src="/img/logo2.jpg" alt="Connect4Society" className="h-10 w-10 rounded" />
                        </a>
                        <h1 className="text-2xl font-extrabold text-[#1a1a2e] dark:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Connect4Society</h1>
                    </div>

                    {/* Verified Badge */}
                    <div className="flex flex-col items-center justify-center mb-12">
                        <svg width="70" height="70" viewBox="0 0 100 100">
                            <path d="M50 2L55.5 7.5L62.5 5.5L67 11L74.5 11.5L77.5 18.5L84.5 21L85.5 28.5L91.5 32.5L90.5 40L95 46L92 53.5L94.5 61L89 66L89.5 73.5L82.5 77.5L80.5 84.5L73 85.5L69 91.5L61.5 90.5L55.5 95L48 92L41 94.5L35 89.5L27.5 89.5L23.5 82.5L16.5 80.5L15.5 73L9.5 69L10.5 61.5L6 55.5L9 48L6.5 41L11.5 35L11.5 27.5L18.5 23.5L20.5 16.5L28 15.5L32 9.5L39.5 10.5L45.5 6Z" fill="#4db6ac" />
                            <circle cx="50" cy="50" r="30" fill="#4db6ac" />
                            <path d="M36 50 L46 60 L64 40" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="mt-1.5 text-[#4db6ac] text-[10px] font-semibold tracking-widest uppercase">verified</span>
                    </div>

                    {/* ─── Details Grid (2-column) ─── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 mb-12">
                        {/* Name */}
                        <div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <UserIcon />
                                <span className="text-[#2589bd] text-[15px] font-extrabold">Name</span>
                            </div>
                            <p className="text-[#444] dark:text-slate-200 text-[15px] font-medium pl-[26px]">{data.name} [{data.usn}]</p>
                        </div>

                        {/* Certificate Type */}
                        <div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <ShieldIcon />
                                <span className="text-[#2589bd] text-[15px] font-extrabold">Certificate Type</span>
                            </div>
                            <p className="text-[#444] dark:text-slate-200 text-[15px] font-medium pl-[26px]">{data.type}</p>
                        </div>

                        {/* Event Name */}
                        <div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <AwardIcon />
                                <span className="text-[#2589bd] text-[15px] font-extrabold">Event Name</span>
                            </div>
                            <p className="text-[#444] dark:text-slate-200 text-[15px] font-medium pl-[26px]">{data.eventName}</p>
                        </div>

                        {/* Event type */}
                        <div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <TagIcon />
                                <span className="text-[#2589bd] text-[15px] font-extrabold">Event type</span>
                            </div>
                            <p className="text-[#444] dark:text-slate-200 text-[15px] font-medium pl-[26px]">{data.eventType}</p>
                        </div>

                        {/* Start Date */}
                        <div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <CalendarIcon />
                                <span className="text-[#2589bd] text-[15px] font-extrabold">Start Date</span>
                            </div>
                            <p className="text-[#444] dark:text-slate-200 text-[15px] font-medium pl-[26px]">{data.startDate}</p>
                        </div>

                        {/* End Date */}
                        <div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <CalendarIcon />
                                <span className="text-[#2589bd] text-[15px] font-extrabold">End Date</span>
                            </div>
                            <p className="text-[#444] dark:text-slate-200 text-[15px] font-medium pl-[26px]">{data.endDate}</p>
                        </div>
                    </div>

                    {/* ─── About Organization ─── */}
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-3">
                            <AwardIcon />
                            <span className="text-[#2589bd] text-[15px] font-extrabold">About Organization</span>
                        </div>
                        <p className="text-[#666] dark:text-slate-400 text-[13px] leading-relaxed font-medium">
                            Our main focus is to organize impactful community-driven initiatives that provide timely support during emergencies and essential needs. By creating a reliable connection between volunteers and people who require help.
                        </p>
                    </div>

                    {/* ─── Follow Us ─── */}
                    <div className="flex flex-col items-center gap-4 mb-12">
                        <span className="text-[12px] text-gray-400 font-medium">Follow us at</span>
                        <div className="flex gap-3">
                            <a href="https://www.linkedin.com/posts/connect4society_activity-7402564316815826944-uCeZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBAWp4BjGtv4jJPekiVi5jSo6hEKFykHCw" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#0077b5] rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                                <LinkedinIcon />
                            </a>
                            <a href="https://www.instagram.com/connect4society/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#e4405f] rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>

                    {/* ─── Footer ─── */}
                    <div className="flex items-center justify-end gap-2 pt-5 border-t border-gray-50 dark:border-slate-700">
                        <span className="text-[11px] text-gray-400 font-medium">Powered By — Give My Certificate</span>
                        <a href="https://givemycertificate.com/" target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon />
                        </a>
                        <div className="flex items-center gap-2.5 ml-1">
                            <LinkedinSmallIcon />
                            <TwitterIcon />
                            <FacebookIcon />
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default CertificatePortal;
