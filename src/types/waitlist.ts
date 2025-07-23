import type { IconNode } from "lucide-react";

export type WaitlistDetails = {
  waitlistLogo?: string | IconNode;
  backgroundColor?: string;

  badge?: string;
  badgeColor?: string;
  badgeSize?: string;

  waitlistName?: string;
  waitlistColor?: string;
  waitlistSize?: string;

  header?: string;
  headerColor?: string;
  headerSize?: string;

  subHeader?: string;
  subHeaderColor?:string;
  subHeaderSize?:string;

  buttonPlaceholder?:string;
  buttonBackground?:string;
  
  testimonials?: React.ReactNode;
  video?: string;
};





