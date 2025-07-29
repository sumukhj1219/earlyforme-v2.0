import { TRPCError } from "@trpc/server";
import z from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const totalJoinees = protectedProcedure.input(z.object({
    waitlistId:z.string()
})).query(async({ctx, input})=>{
    try {
        const joinees =await ctx.db.joinees.findMany({
            where:{
                waitlistId:input.waitlistId
            }
        })
        return joinees
    } catch (error) {
        throw new TRPCError({
            message:"Cannot get joinees",
            code:"INTERNAL_SERVER_ERROR"
        })
    }
})