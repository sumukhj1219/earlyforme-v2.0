import type { Template } from "~/types/template";
import Template1 from "~/components/template/template1"
import { Status } from "@prisma/client";
import Template2 from "~/components/template/template2";
import Template3 from "~/components/template/template3";

export const templates:Template[] = [
    {
        templateId:1,
        href:'/templates/template1.png',
        component: Template1,
        backgroundColor:'bg-neutral-900',
        waitlistLogo: "",
        waitlistIcon: "",
        launchDate:new Date(),
        iconStroke:"white",
        badge: 'Available in early 2025',
        badgeSize:'text-xs',
        badgeColor:'text-neutral-50',
        header:'Get early access',
        headerColor:'text-neutral-50',
        headerSize:'text-5xl',
        subHeader:'Be amongst the first to experience Wait and launch a viral waitlist. Sign up to be notified when we launch !',
        subHeaderSize:'text-sm',
        subHeaderColor:'text-neutral-50',
        buttonPlaceholder:'Join Now',
        buttonBackground:'bg-lime-500',
        video:'https://www.youtube.com/watch?v=Lqdc1lpqzAA',
        userId:"",
        status:Status.Active
    },
    {
        templateId:2,
        href:'/templates/template2.png',
        component: Template2,
        backgroundColor:'bg-neutral-950',
        waitlistLogo: "",
        waitlistIcon: "",
        iconStroke:"white",
        launchDate:new Date(),
        header:'Get early access',
        headerColor:'',
        headerSize:'text-5xl',
        subHeader:'Be amongst the first to experience Wait and launch a viral waitlist.Sign up to be notified when we launch ',
        subHeaderSize:'text-sm',
        subHeaderColor:'text-neutral-50',
        buttonPlaceholder:'Join Waitlist',
        buttonBackground:'bg-neutral-50',
        userId:"",
        status:Status.Active
    },
    {
        templateId:3,
        href:'/templates/template3.png',
        component: Template3,
        backgroundColor:'bg-neutral-900',
        waitlistLogo: "",
        waitlistIcon: "",
        launchDate:new Date(),
        iconStroke:"white",
        badge: 'earlyfor.me',
        badgeSize:'text-xs',
        badgeColor:'text-neutral-50',
        header:'Be the First to Know',
        headerColor:'text-neutral-50',
        headerSize:'text-5xl',
        subHeader:'Join our early access list and get exclusive updates.',
        subHeaderSize:'text-sm',
        subHeaderColor:'text-neutral-50',
        buttonPlaceholder:'Join Now',
        buttonBackground:'bg-neutral-800',
        userId:"",
        status:Status.Active
    },
]

