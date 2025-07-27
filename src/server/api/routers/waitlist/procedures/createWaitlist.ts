import { protectedProcedure } from "~/server/api/trpc";
import z from "zod";
import { TRPCError } from "@trpc/server";
import { Status } from "@prisma/client";

const payload = z.object({
    templateId: z.number(),
    href: z.string(),
    waitlistLogo: z.string().optional(),
    backgroundColor: z.string().optional(),

    badge: z.string().optional(),
    badgeColor: z.string().optional(),
    badgeSize: z.string().optional(),

    waitlistName: z.string().optional(),
    waitlistColor: z.string().optional(),
    waitlistSize: z.string().optional(),

    header: z.string().optional(),
    headerColor: z.string().optional(),
    headerSize: z.string().optional(),

    subHeader: z.string().optional(),
    subHeaderColor: z.string().optional(),
    subHeaderSize: z.string().optional(),

    buttonPlaceholder: z.string().optional(),
    buttonBackground: z.string().optional(),

    video: z.string().optional(),
});

export const createWaitlist = protectedProcedure
  .input(payload)
  .mutation(async ({ ctx, input }) => {
    try {
      const waitlist = await ctx.db.waitlist.upsert({
        where: {
          waitlistName: input.waitlistName
        },
        update: {
          href: input.href,
          waitlistLogo: input.waitlistLogo,
          backgroundColor: input.backgroundColor,
          templateId: input.templateId,

          badge: input.badge,
          badgeColor: input.badgeColor,
          badgeSize: input.badgeSize,

          waitlistName: input.waitlistName,
          waitlistColor: input.waitlistColor,
          waitlistSize: input.waitlistSize,

          header: input.header,
          headerColor: input.headerColor,
          headerSize: input.headerSize,

          subHeader: input.subHeader,
          subHeaderColor: input.subHeaderColor,
          subHeaderSize: input.subHeaderSize,

          buttonPlaceholder: input.buttonPlaceholder,
          buttonBackground: input.buttonBackground,

          video: input.video,

          userId: ctx.session.user.id,
        },
        create: {
          templateId: input.templateId,
          href: input.href,
          waitlistLogo: input.waitlistLogo,
          backgroundColor: input.backgroundColor,

          badge: input.badge,
          badgeColor: input.badgeColor,
          badgeSize: input.badgeSize,

          waitlistName: input.waitlistName,
          waitlistColor: input.waitlistColor,
          waitlistSize: input.waitlistSize,

          header: input.header,
          headerColor: input.headerColor,
          headerSize: input.headerSize,

          subHeader: input.subHeader,
          subHeaderColor: input.subHeaderColor,
          subHeaderSize: input.subHeaderSize,

          buttonPlaceholder: input.buttonPlaceholder,
          buttonBackground: input.buttonBackground,

          video: input.video,
          status: Status.Active,
          userId: ctx.session.user.id,
        },
      });

      return waitlist;
    } catch (error) {
      console.error("[CREATE_WAITLIST_ERROR]", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Unable to create or update waitlist",
      });
    }
  });

