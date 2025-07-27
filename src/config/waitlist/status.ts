import { Ban, CircleAlertIcon, CircleCheck } from 'lucide-react';

export const Status = {
    Active:{
        label:"Active",
        icon: CircleCheck,
        bg:"bg-green-500/20",
        stroke:"green",
        text:"text-green-500"
    },
    Inactive:{
        label:"Inactive",
        icon: CircleAlertIcon,
        bg:"bg-yellow-500/20",
        stroke:"yellow",
        text:"text-yellow-500"
    },
    Deleted:{
        label:"Deleted",
        icon: Ban,
        bg:"bg-red-500/20",
        stroke:"red",
        text:"text-red-500"
    }
}