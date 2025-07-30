import { TRPCError } from "@trpc/server";
import z from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const getStats = protectedProcedure.input(z.object({
    waitlistId:z.string()
})).query(async({ctx, input})=>{
    try {
        const now = new Date()

        const previousMonthStart = new Date(now.getFullYear(), now.getMonth()-1, 1)
        const previousMonthEnd = new Date(now.getFullYear(), now.getMonth() , 0, 23, 59, 59, 999)

        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999)

        const previousMonthJoinees = await ctx.db.joinees.findMany({
            where:{
                waitlistId:input.waitlistId,
                joinedOn:{
                    gte:previousMonthStart,
                    lte:previousMonthEnd
                }
            }
        })

        const totalJoinnesCurrentMonth = await ctx.db.joinees.findMany({
            where:{
                waitlistId:input.waitlistId,
                joinedOn:{
                    gte:startOfMonth,
                    lte:endOfMonth
                }
            }
        })

        return{
            currentMonth:totalJoinnesCurrentMonth.length,
            currentData:totalJoinnesCurrentMonth,
            previousMonth:previousMonthJoinees.length,
            previousData:previousMonthJoinees,
        }
    } catch (error) {
        throw new TRPCError({
            message:"Cannot get stats",
            code:"INTERNAL_SERVER_ERROR"
        })
    }
})

