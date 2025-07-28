import { TRPCError } from "@trpc/server";
import z from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const deleteAsset = protectedProcedure.input(z.object({
    assetId:z.string()
})).mutation(async({ctx, input})=>{
    try {
        await ctx.db.assets.delete({
            where:{
                id:input.assetId
            }
        })
    } catch (error) {
        throw new TRPCError({
            message:"Unable to delete asset",
            code:"INTERNAL_SERVER_ERROR"
        })
    }
})