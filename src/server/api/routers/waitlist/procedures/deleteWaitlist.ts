import { TRPCError } from "@trpc/server";
import z from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const deleteWaitlist = protectedProcedure.input(z.object({
    waitlistId:z.string()
})).mutation((async({ctx, input})=>{
    try {
        await ctx.db.waitlist.delete({
            where:{
                id:input.waitlistId,
                userId:ctx.session.user.id
            }
        })
    } catch (error) {
        throw new TRPCError({
            message:"Cannot delete waitlist",
            code:"INTERNAL_SERVER_ERROR"
        })
    }
}))