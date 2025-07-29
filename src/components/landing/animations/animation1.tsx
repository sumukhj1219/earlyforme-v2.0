import { Code, Database, Globe, LayoutDashboard, Mail, Users } from 'lucide-react'
import React from 'react'
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs'
import { jetbrains_mono } from '~/components/common/fonts/fonts'

const Animation1 = () => {
    return (
        <div>
            <svg viewBox='0 0 1440 500' width={"100%"} height={"100%"}>
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
                    <rect x={10} rx={10} y={150} width={100} filter='blur(10px)' fill='#222220' height={100}></rect>
                    <rect x={10} rx={10} y={150} width={100} strokeWidth={0.5} stroke='url(#linear-gradient)' height={100} fill='url(#gradient)'></rect>
                    <BsFileEarmarkSpreadsheet x={40} y={180} filter='blur(5px)' fill='url(#linear-gradient-2)' className="size-5" size={42} />
                    <BsFileEarmarkSpreadsheet x={40} y={180} fill='url(#linear-gradient-2)' className="size-5" size={42} />

                    <circle cx={18} cy={158} r={2} fill='#3c3c3a' />
                    <circle cx={100} cy={158} r={2} fill='#3c3c3a' />
                    <circle cx={18} cy={242} r={2} fill='#3c3c3a' />
                    <circle cx={100} cy={242} r={2} fill='#3c3c3a' />
                </g>

                <g className='problems' stroke='url(#linear-gradient)' fill='none' strokeWidth={0.15}>
                    {/* Problem 1: Setup database */}
                    <rect x={500} y={70} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text x={545} y={100} fill='white' className={`${jetbrains_mono.className}`}>Setup database</text>
                    <Database stroke='white' strokeWidth={0.75} size={18} x={515} y={85} />

                    {/* Problem 2: Domain setup */}
                    <rect x={500} y={170} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text x={545} y={200} fill='white' className={`${jetbrains_mono.className}`}>Domain setup</text>
                    <Globe stroke='white' strokeWidth={0.75} size={18} x={515} y={185} />

                    {/* Problem 3: Dashboard integration */}
                    <rect x={500} y={240} width={250} height={50} rx={10} fill='url(#gradient)' />
                    <text x={540} y={270} fill='white' className={`${jetbrains_mono.className}`}>Dashboard integration</text>
                    <LayoutDashboard stroke='white' strokeWidth={0.75} size={18} x={515} y={255} />

                    {/* Problem 4: Coding */}
                    <rect x={500} y={310} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text x={580} y={340} fill='white' className={`${jetbrains_mono.className}`}>Coding</text>
                    <Code stroke='white' strokeWidth={0.75} size={18} x={515} y={325} />

                    {/* Problem 5: User management */}
                    <rect x={500} y={380} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text x={535} y={410} fill='white' className={`${jetbrains_mono.className}`}>User management</text>
                    <Users stroke='white' strokeWidth={0.75} size={18} x={515} y={395} />

                    {/* Problem 6: Email integration */}
                    <rect x={500} y={450} width={220} height={50} rx={10} fill='url(#gradient)' />
                    <text x={535} y={480} fill='white' className={`${jetbrains_mono.className}`}>Email integration</text>
                    <Mail stroke='white' strokeWidth={0.75} size={18} x={515} y={465} />
                </g>

                <g className="problem-connectors" stroke="white" fill="none" strokeWidth={0.4}>
                    <path d="M 110 200 h 150 C 270 200, 272 180, 272 150 h 100" stroke="white" fill="none" strokeWidth={0.4} />
                </g>
            </svg>
        </div>
    )
}

export default Animation1
