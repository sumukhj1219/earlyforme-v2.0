import { createTRPCRouter } from "../../trpc";
import { createJoinee } from "./procedures/createJoinee";
import { getMonthlyStats } from "./procedures/getMonthlyStats";
import { getStats } from "./procedures/getStats";
import { totalJoinees } from "./procedures/totalJoinees";

export const joineeRouter = createTRPCRouter({
    createJoinee,
    totalJoinees,
    getStats,
    getMonthlyStats
})