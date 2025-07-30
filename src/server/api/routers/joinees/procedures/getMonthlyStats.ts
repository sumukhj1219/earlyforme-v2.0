import { eachMonthOfInterval, format } from "date-fns";
import z from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const getMonthlyStats = protectedProcedure
  .input(z.object({ waitlistId: z.string() }))
  .query(async ({ ctx, input }) => {
    const now = new Date();
    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);

    const months = eachMonthOfInterval({
      start: sixMonthsAgo,
      end: now,
    });

    const data = await Promise.all(
      months.map(async (monthDate) => {
        const start = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
        const end = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0, 23, 59, 59, 999);

        const count = await ctx.db.joinees.count({
          where: {
            waitlistId: input.waitlistId,
            joinedOn: {
              gte: start,
              lte: end,
            },
          },
        });

        return {
          month: format(monthDate, "MMMM"),
          count,
        };
      })
    );

    return data;
  });
