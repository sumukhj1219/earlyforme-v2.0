import { createTRPCRouter } from "../../trpc";
import { checkName } from "./procedures/checkName";
import { checkParams } from "./procedures/checkParams";
import { createWaitlist } from "./procedures/createWaitlist";
import { deleteWaitlist } from "./procedures/deleteWaitlist";
import { getWaitlists } from "./procedures/getWaitlist";
import { getWaitlistById } from "./procedures/getWaitlistById";
import { updateStatus } from "./procedures/updateStatus";

export const waitlistRouter = createTRPCRouter({
    createWaitlist,
    checkName,
    getWaitlists,
    deleteWaitlist,
    checkParams,
    getWaitlistById,
    updateStatus
})