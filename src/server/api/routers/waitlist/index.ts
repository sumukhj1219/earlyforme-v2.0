import { createTRPCRouter } from "../../trpc";
import { createWaitlist } from "./procedures/createWaitlist";

export const waitlistRouter = createTRPCRouter({
    createWaitlist
})