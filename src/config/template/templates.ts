import type { Template } from "~/types/template";
import Template1 from "~/components/template/template1"
import { Status } from "@prisma/client";
import Template2 from "~/components/template/template2";

export const templates:Template[] = [
    {
        templateId:1,
        href:'/templates/template1.png',
        component: Template1,
        backgroundColor:'bg-neutral-900',
        waitlistLogo: "",
        waitlistIcon: "",
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
        // badge: 'Available in early 2025',
        // badgeSize:'text-xs',
        // badgeColor:'text-neutral-50',
        header:'Get early access',
        headerColor:'',
        headerSize:'text-5xl',
        subHeader:'Be amongst the first to experience Wait and launch a viral waitlist.Sign up to be notified when we launch ',
        subHeaderSize:'text-sm',
        subHeaderColor:'text-neutral-50',
        buttonPlaceholder:'Join Waitlist',
        buttonBackground:'bg-neutral-50',
        // video:'https://www.youtube.com/watch?v=Lqdc1lpqzAA',
        userId:"",
        status:Status.Active
    }
]

