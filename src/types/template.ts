import type { WaitlistDetails } from "./waitlist";

export interface Template extends WaitlistDetails{
    id:number;
    href:string;
    component:React.FC;
}