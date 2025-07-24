import { TRPCError } from "@trpc/server";
import z from "zod";
import { publicProcedure } from "~/server/api/trpc";

export const checkName = publicProcedure.input(z.object({
    waitlistName: z.string()
})).query(async ({ ctx, input }) => {
    try {
        const exist = await ctx.db.waitlist.findUnique({
            where: {
                waitlistName: input.waitlistName
            }
        })

        return {status:exist !== null, data:exist}
    } catch (error) {
        throw new TRPCError({
            message: "Internal server error in name checking",
            code: "INTERNAL_SERVER_ERROR"
        })
    }
})