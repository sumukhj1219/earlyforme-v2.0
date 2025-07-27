import { createTRPCRouter } from "../../trpc";
import { checkName } from "./procedures/checkName";
import { createWaitlist } from "./procedures/createWaitlist";
import { getWaitlists } from "./procedures/getWaitlist";

export const waitlistRouter = createTRPCRouter({
    createWaitlist,
    checkName,
    getWaitlists
})