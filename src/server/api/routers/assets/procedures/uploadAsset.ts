import { TRPCError } from "@trpc/server";
import z from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const uploadAsset = protectedProcedure.input(z.object({
    url:z.string().url()
})).mutation(async({ctx, input})=>{
    try {
        await ctx.db.assets.create({
            data:{
                userId:ctx.session.user.id,
                url:input.url
            }
        })
    } catch (error) {
        throw new TRPCError({
            message:"Cannot create an asset",
            code:"INTERNAL_SERVER_ERROR"
        })
    }
})