"use client"
import { Code, Database, Globe, LayoutDashboard, Mail, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs'
import { jetbrains_mono } from '~/components/common/fonts/fonts'
import { motion } from "motion/react"
import gsap from "gsap"

const Animation1 = () => {
    const [resolved1, setResolved1] = useState(false);
    const [resolved2, setResolved2] = useState(false);
    const [resolved3, setResolved3] = useState(false);
    const [resolved4, setResolved4] = useState(false);
    const [resolved5, setResolved5] = useState(false);
    const [resolved6, setResolved6] = useState(false);


    const animate = () => {
        const tl = gsap.timeline();

        tl.fromTo("#setup-text", { opacity: 1 }, { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 0);
        tl.to("#setup-text", { opacity: 0, y: -10, duration: 1, ease: "power4.inOut", onComplete: () => setResolved1(true) }, 2);
        tl.to("#setup-text", { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 3);

        tl.fromTo("#domain-setup", { opacity: 1 }, { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 0);
        tl.to("#domain-setup", { opacity: 0, y: -10, duration: 1, ease: "power4.inOut", onComplete: () => setResolved2(true) }, 4);
        tl.to("#domain-setup", { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 5);

        tl.fromTo("#dashboard-integration", { opacity: 1 }, { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 0);
        tl.to("#dashboard-integration", { opacity: 0, y: -10, duration: 1, ease: "power4.inOut", onComplete: () => setResolved3(true) }, 5);
        tl.to("#dashboard-integration", { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 6);

        tl.fromTo("#coding", { opacity: 1 }, { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 0);
        tl.to("#coding", { opacity: 0, y: -10, duration: 1, ease: "power4.inOut", onComplete: () => setResolved4(true) }, 6);
        tl.to("#coding", { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 7);

        tl.fromTo("#user-management", { opacity: 1 }, { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 0);
        tl.to("#user-management", { opacity: 0, y: -10, duration: 1, ease: "power4.inOut", onComplete: () => setResolved5(true) }, 8);
        tl.to("#user-management", { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 9);

        tl.fromTo("#email-integration", { opacity: 1 }, { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 0);
        tl.to("#email-integration", { opacity: 0, y: -10, duration: 1, ease: "power4.inOut", onComplete: () => setResolved6(true) }, 9);
        tl.to("#email-integration", { opacity: 1, y: 0, duration: 1, ease: "power4.inOut" }, 10);
    };




    useEffect(() => {
        animate()
    }, [])

    return (
        <div>
            <svg viewBox='0 0 1440 501' width={"100%"} height={"100%"} style={{ willChange: 'transform, opacity' }}>
                <defs>
                    <radialGradient id='gradient' cx={0.5} cy={0.5} r={0.7} gradientUnits='objectBoundingBox'>
                        <stop offset="0" stopColor="#262624" />
                        <stop offset="1" stopColor="#222220" />
                    </radialGradient>
                    <linearGradient id='linear-gradient' x1={"50%"} y1={"10%"} x2={"100%"} y2={"100%"} gradientUnits='objectBoundingBox'>
                        <stop offset="0" stopColor="white" />
                        <stop offset="1" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id='linear-gradient-2' x1={"50%"} y1={"10%"} x2={"100%"} y2={"100%"} gradientUnits='objectBoundingBox'>
                        <stop offset="0" stopColor="#d97757" />
                        <stop offset="0.5" stopColor="#c36b4e" />
                        <stop offset="0.5" stopColor="#ae5f46" />
                    </linearGradient>
                    <radialGradient id='path-gradient' fx={1}>
                        <stop offset="0" stopColor="orange" />
                        <stop offset="1" stopColor="transparent" />
                    </radialGradient>

                    <mask id='path-1'>
                        <path d="M 550 205 h 150 q 45 0 46 -60 v -50 q 0 -30 50 -28 h 105" stroke='orange' />
                    </mask>
                    <mask id='path-2'>
                        <path d="M 550 205 h 150 q 51 0 52 -40 q 1 -30 50 -30 h 99" stroke='orange' />
                    </mask>
                    <mask id='path-3'>
                        <path d="M 550 205 h 350" stroke='orange' />
                    </mask>
                    <mask id='path-4'>
                        <path d="M 550 205 h 150 q 51 0 52 40 q 1 30 50 30 h 99" stroke='orange' />
                    </mask>
                    <mask id='path-5'>
                        <path d="M 550 205 h 150 q 45 0 46 60 v 50 q 0 30 50 28 h 105" stroke='orange' />
                    </mask>
                    <mask id='path-6'>
                        <path d="M 550 205 h 150 q 40 0 35 140 v 50 q 0 30 50 28 h 115" stroke='orange' />
                    </mask>

                </defs>
                <g className='logo'
                    style={{
                        willChange: "transform",
                        transformBox: "fill-box",
                        transformOrigin: "center center",
                    }}
                >
                    <rect x={450} rx={10} y={150} width={100} filter='blur(10px)' fill='#222220' height={100}></rect>
                    <rect x={450} rx={10} y={150} width={100} strokeWidth={0.5} stroke='url(#linear-gradient)' height={100} fill='url(#gradient)'></rect>
                    <BsFileEarmarkSpreadsheet x={480} y={180} filter='blur(5px)' fill='url(#linear-gradient-2)' className="size-5" size={42} />
                    <BsFileEarmarkSpreadsheet x={480} y={180} fill='url(#linear-gradient-2)' className="size-5" size={42} />

                    <circle cx={458} cy={158} r={2} fill='#3c3c3a' />
                    <circle cx={540} cy={158} r={2} fill='#3c3c3a' />
                    <circle cx={458} cy={242} r={2} fill='#3c3c3a' />
                    <circle cx={540} cy={242} r={2} fill='#3c3c3a' />
                </g>

                <g className='problems' stroke='url(#linear-gradient)' fill='none' strokeWidth={0.15}
                    style={{
                        willChange: "transform",
                        transformBox: "fill-box",
                        transformOrigin: "center center",
                    }}
                >
                    {/* Problem 1: Setup database */}
                    <rect x={900} y={40} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text
                        id='setup-text'
                        x={945}
                        y={70}
                        fill="white"
                        className={jetbrains_mono.className}
                    >
                        {resolved1 ? "Resolved" : "Setup Database"}
                    </text>
                    <Database id='setup-text' stroke='white' strokeWidth={0.75} size={18} x={915} y={55} />


                    {/* Problem 2: Domain setup */}
                    <rect x={900} y={110} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text id='domain-setup' x={945} y={140} fill='white' className={`${jetbrains_mono.className}`}>
                        {resolved2 ? "Resolved" : "Domain Setup"}
                    </text>
                    <Globe id='domain-setup' stroke='white' strokeWidth={0.75} size={18} x={915} y={125} />

                    {/* Problem 3: Dashboard integration */}
                    <rect x={900} y={180} width={260} height={50} rx={10} fill='url(#gradient)' />
                    <text id='dashboard-integration' x={945} y={210} fill='white' className={`${jetbrains_mono.className}`}>
                        {resolved3 ? "Resolved" : "Dashboard Integration"}
                    </text>
                    <LayoutDashboard id='dashboard-integration' stroke='white' strokeWidth={0.75} size={18} x={915} y={195} />

                    {/* Problem 4: Coding */}
                    <rect x={900} y={250} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text id='coding' x={945} y={280} fill='white' className={`${jetbrains_mono.className}`}>
                        {resolved4 ? "Resolved" : "Coding"}
                    </text>
                    <Code id='coding' stroke='white' strokeWidth={0.75} size={18} x={915} y={265} />

                    {/* Problem 5: User management */}
                    <rect x={900} y={320} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text id='user-management' x={945} y={350} fill='white' className={`${jetbrains_mono.className}`}>
                        {resolved5 ? "Resolved" : "User Management"}
                    </text>
                    <Users id='user-management' stroke='white' strokeWidth={0.75} size={18} x={915} y={335} />

                    {/* Problem 6: Email integration */}
                    <rect x={900} y={390} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text id='email-integration' x={945} y={420} fill='white' className={`${jetbrains_mono.className}`}>
                        {resolved6 ? "Resolved" : "Email Integration"}
                    </text>
                    <Mail id='email-integration' stroke='white' strokeWidth={0.75} size={18} x={915} y={405} />
                </g>

                <g className="problem-connectors" stroke="white" fill="none" strokeWidth={0.1}
                    style={{
                        willChange: "transform",
                        transformBox: "fill-box",
                        transformOrigin: "center center",
                    }}
                >
                    <path d="M 550 205 h 350" stroke="white" fill="none" />
                    <path d="M 700 205 q 51 0 52 -40 q 1 -30 50 -30 h 99" />
                    <path d="M 700 205 q 45 0 46 -60 v -50 q 0 -30 50 -28 h 105" />
                    <path d="M 700 205 q 51 0 52 40 q 1 30 50 30 h 99" />
                    <path d="M 700 205 q 45 0 46 60 v 50 q 0 30 50 28 h 105" />
                    <path d='M 700 205 q 40 0 35 140 v 50 q 0 30 50 28 h 115' />

                </g>

                <g mask='url(#path-1)'>
                    <circle className='path-1' cx={0} cy={0} r='32' fill='url(#path-gradient)'></circle>
                </g>
                <g mask='url(#path-2)'>
                    <circle className='path-2' cx={0} cy={0} r='32' fill='url(#path-gradient)'></circle>
                </g>
                <g mask='url(#path-3)'>
                    <circle className='path-3' cx={0} cy={0} r='32' fill='url(#path-gradient)'></circle>
                </g>
                <g mask='url(#path-4)'>
                    <circle className='path-4' cx={0} cy={0} r='32' fill='url(#path-gradient)'></circle>
                </g>
                <g mask='url(#path-5)'>
                    <circle className='path-5' cx={0} cy={0} r='32' fill='url(#path-gradient)'></circle>
                </g>
                <g mask='url(#path-6)'>
                    <circle className='path-6' cx={0} cy={0} r='32' fill='url(#path-gradient)'></circle>
                </g>
            </svg>
        </div>
    )
}

export default Animation1
