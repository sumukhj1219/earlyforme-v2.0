import { TRPCError } from "@trpc/server";
import z from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const checkParams = protectedProcedure.input(z.object({
    waitlistId:z.string()
})).query((async({ctx, input})=>{
    try {
        const res = await ctx.db.waitlist.findUnique({
            where:{
                id:input.waitlistId
            }
        })
        if(res)
            return true;
        return false;
    } catch (error) {
        throw new TRPCError({
            message:"Cannot fetch url",
            code:"BAD_GATEWAY"
        })
    }
}))