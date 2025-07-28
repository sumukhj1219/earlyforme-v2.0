import type { Status } from "@prisma/client";
import type { IconNode } from "lucide-react";

export type WaitlistDetails = {
  waitlistLogo?: string;
  backgroundColor?: string;
  templateId?: number;
  badge?: string;
  badgeColor?: string;
  badgeSize?: string;

  waitlistName?: string;

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
  status: Status;
  userId?: string;
};





