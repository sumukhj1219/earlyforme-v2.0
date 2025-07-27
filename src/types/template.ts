import type { WaitlistDetails } from "./waitlist";

export interface Template extends WaitlistDetails{
    id:string;
    href:string;
    component:React.FC;
    userId:string;
}