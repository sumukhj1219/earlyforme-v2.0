import { TRPCError } from "@trpc/server";
import z from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const getWaitlistById = protectedProcedure.input(
    z.object({
        waitlistId:z.string()
    })
).query((async({ctx, input})=>{
    try {
        const waitlist = await ctx.db.waitlist.findUnique({
            where:{
                id:input.waitlistId
            }
        })

        return waitlist
    } catch (error) {
        throw new TRPCError({
            message:"Cannot find waitlist by this id",
            code:"INTERNAL_SERVER_ERROR"
        })
    }
}))