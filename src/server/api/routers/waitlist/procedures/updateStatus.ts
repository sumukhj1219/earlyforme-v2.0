import { Status } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import z from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const updateStatus = protectedProcedure
  .input(
    z.object({
      waitlistId: z.string(),
      newStatus: z.nativeEnum(Status), 
    })
  )
  .mutation(async ({ ctx, input }) => {
    try {
      await ctx.db.waitlist.update({
        where: {
          id: input.waitlistId,
          userId: ctx.session.user.id,
        },
        data: {
          status: input.newStatus,
        },
      });
    } catch (error) {
      throw new TRPCError({
        message: "Unable to update status",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  });
