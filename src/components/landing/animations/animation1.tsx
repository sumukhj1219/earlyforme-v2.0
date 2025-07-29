"use client"
import { Code, Database, Globe, LayoutDashboard, Mail, Users } from 'lucide-react'
import React, { useState } from 'react'
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs'
import { jetbrains_mono } from '~/components/common/fonts/fonts'
import { motion } from "motion/react"

const Animation1 = () => {
    const [resolved, setResolved] = useState(false);

    const variants = {
        animate: {
            opacity: 0,
            y: -5,
            transition: {
                duration: 0.3,
            },
        },
        initial: {
            opacity: 1,
            y: 0
        },
    };

    return (
        <div>
            <svg viewBox='0 0 1440 501' width={"100%"} height={"100%"}>
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
                </defs>
                <g className='logo' >
                    <rect x={450} rx={10} y={150} width={100} filter='blur(10px)' fill='#222220' height={100}></rect>
                    <rect x={450} rx={10} y={150} width={100} strokeWidth={0.5} stroke='url(#linear-gradient)' height={100} fill='url(#gradient)'></rect>
                    <BsFileEarmarkSpreadsheet x={480} y={180} filter='blur(5px)' fill='url(#linear-gradient-2)' className="size-5" size={42} />
                    <BsFileEarmarkSpreadsheet x={480} y={180} fill='url(#linear-gradient-2)' className="size-5" size={42} />

                    <circle cx={458} cy={158} r={2} fill='#3c3c3a' />
                    <circle cx={540} cy={158} r={2} fill='#3c3c3a' />
                    <circle cx={458} cy={242} r={2} fill='#3c3c3a' />
                    <circle cx={540} cy={242} r={2} fill='#3c3c3a' />
                </g>

                <g className='problems' stroke='url(#linear-gradient)' fill='none' strokeWidth={0.15}>
                    {/* Problem 1: Setup database */}
                    <rect x={900} y={40} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <motion.g
                        initial="initial"
                        animate="animate"
                        variants={variants}
                        onAnimationComplete={() => setResolved(true)}
                    >
                        <motion.text
                            key={resolved ? "resolved" : "setup"}
                            x={945}
                            y={70}
                            fill="white"
                            className={jetbrains_mono.className}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {resolved ? "Resolved" : "Setup Database"}
                        </motion.text>
                        <Database stroke='white' strokeWidth={0.75} size={18} x={915} y={55} />
                    </motion.g>


                    {/* Problem 2: Domain setup */}
                    <rect x={900} y={110} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text x={945} y={140} fill='white' className={`${jetbrains_mono.className}`}>Domain setup</text>
                    <Globe stroke='white' strokeWidth={0.75} size={18} x={915} y={125} />

                    {/* Problem 3: Dashboard integration */}
                    <rect x={900} y={180} width={260} height={50} rx={10} fill='url(#gradient)' />
                    <text x={945} y={210} fill='white' className={`${jetbrains_mono.className}`}>Dashboard integration</text>
                    <LayoutDashboard stroke='white' strokeWidth={0.75} size={18} x={915} y={195} />

                    {/* Problem 4: Coding */}
                    <rect x={900} y={250} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text x={945} y={280} fill='white' className={`${jetbrains_mono.className}`}>Coding</text>
                    <Code stroke='white' strokeWidth={0.75} size={18} x={915} y={265} />

                    {/* Problem 5: User management */}
                    <rect x={900} y={320} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text x={945} y={350} fill='white' className={`${jetbrains_mono.className}`}>User management</text>
                    <Users stroke='white' strokeWidth={0.75} size={18} x={915} y={335} />

                    {/* Problem 6: Email integration */}
                    <rect x={900} y={390} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text x={945} y={420} fill='white' className={`${jetbrains_mono.className}`}>Email integration</text>
                    <Mail stroke='white' strokeWidth={0.75} size={18} x={915} y={405} />
                </g>

                <g className="problem-connectors" stroke="white" fill="none" strokeWidth={0.1}>
                    <path d="M 550 205 h 350" stroke="white" fill="none" />
                    <path d="M 700 205 q 51 0 52 -40 q 1 -30 50 -30 h 99" />
                    <path d="M 700 205 q 45 0 46 -60 v -50 q 0 -30 50 -28 h 105" />
                    <path d="M 700 205 q 51 0 52 40 q 1 30 50 30 h 99" />
                    <path d="M 700 205 q 45 0 46 60 v 50 q 0 30 50 28 h 105" />
                    <path d='M 700 205 q 40 0 35 140 v 50 q 0 30 50 28 h 115' />

                </g>
            </svg>
        </div>
    )
}

export default Animation1
