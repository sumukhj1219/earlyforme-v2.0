import { createTRPCRouter } from "../../trpc";
import { createJoinee } from "./procedures/createJoinee";
import { totalJoinees } from "./procedures/totalJoinees";

export const joineeRouter = createTRPCRouter({
    createJoinee,
    totalJoinees
})