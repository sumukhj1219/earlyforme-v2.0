import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "~/server/api/trpc";

export const getAssets = protectedProcedure.query(async({ctx, input})=>{
    try {
        const assets = await ctx.db.assets.findMany({
            where:{
                userId:ctx.session.user.id
            }
        })

        return assets
    } catch (error) {
        throw new TRPCError({
            message:"Unable to fetch assets",
            code:"INTERNAL_SERVER_ERROR"
        })
    }
})