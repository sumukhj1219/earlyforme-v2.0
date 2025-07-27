import type { Template } from "~/types/template";
import Template1 from "~/components/template/template1"

export const templates:Template[] = [
    {
        id:'1',
        href:'/templates/template1.png',
        component: Template1,
        backgroundColor:'bg-neutral-900',
        waitlistLogo: "",
        badge: 'Available in early 2025',
        badgeSize:'text-xs',
        header:'Get early access',
        headerColor:'text-neutral-50',
        headerSize:'text-5xl',
        subHeader:'Be amongst the first to experience Wait and launch a viral waitlist. Sign up to be notified when we launch !',
        subHeaderSize:'text-sm',
        buttonPlaceholder:'Join Now',
        buttonBackground:'bg-lime-500',
        video:'https://www.youtube.com/watch?v=Lqdc1lpqzAA',
        userId:""
    }
]

