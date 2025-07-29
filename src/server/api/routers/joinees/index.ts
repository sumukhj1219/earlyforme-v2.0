import { createTRPCRouter } from "../../trpc";
import { createJoinee } from "./procedures/createJoinee";

export const joineeRouter = createTRPCRouter({
    createJoinee
})