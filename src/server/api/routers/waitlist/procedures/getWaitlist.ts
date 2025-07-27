import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "~/server/api/trpc";

export const getWaitlists = protectedProcedure.query(async ({ ctx }) => {
  try {
    const waitlists = await ctx.db.waitlist.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });

    return waitlists.map((waitlist) => ({
      id: waitlist.id,
      waitlistName: waitlist.waitlistName,
      waitlistLogo: waitlist.waitlistLogo,
      templateId: waitlist.templateId,
    }));
  } catch (error) {
    throw new TRPCError({
      message: "Unable to get waitlists",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});
