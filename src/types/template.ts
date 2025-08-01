import type { FC } from "react";
import type { WaitlistDetails } from "./waitlist";

export interface Template extends WaitlistDetails{
    templateId?:number;
    href?:string;
    component?:FC<Template>;
    userId?:string;
    subdomain?:string;
}