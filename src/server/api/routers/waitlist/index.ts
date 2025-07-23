import { createTRPCRouter } from "../../trpc";
import { checkName } from "./procedures/checkName";
import { createWaitlist } from "./procedures/createWaitlist";

export const waitlistRouter = createTRPCRouter({
    createWaitlist,
    checkName
})