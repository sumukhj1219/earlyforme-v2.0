import { protectedProcedure } from "~/server/api/trpc";
import z from "zod";
import { TRPCError } from "@trpc/server";
import { Status } from "@prisma/client";

const payload = z.object({
    templateId: z.number(),
    href: z.string(),
    waitlistLogo: z.string().optional(),
    waitlistIcon: z.string().optional(),
    iconStroke: z.string().optional(),

    backgroundColor: z.string().optional(),

    badge: z.string().optional(),
    badgeColor: z.string().optional(),
    badgeSize: z.string().optional(),
    badgeFont: z.string().optional(),

    waitlistName: z.string(),

    header: z.string().optional(),
    headerColor: z.string().optional(),
    headerSize: z.string().optional(),
    headerFont: z.string().optional(),

    subHeader: z.string().optional(),
    subHeaderColor: z.string().optional(),
    subHeaderSize: z.string().optional(),
    subHeaderFont: z.string().optional(),

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
          waitlistIcon: input.waitlistIcon,
          iconStroke: input.iconStroke,

          backgroundColor: input.backgroundColor,
          templateId: input.templateId,

          badge: input.badge,
          badgeColor: input.badgeColor,
          badgeSize: input.badgeSize,
          badgeFont: input.badgeFont,

          waitlistName: input.waitlistName,

          header: input.header,
          headerColor: input.headerColor,
          headerSize: input.headerSize,
          headerFont: input.headerFont,

          subHeader: input.subHeader,
          subHeaderColor: input.subHeaderColor,
          subHeaderSize: input.subHeaderSize,
          subHeaderFont: input.subHeaderFont,

          buttonPlaceholder: input.buttonPlaceholder,
          buttonBackground: input.buttonBackground,

          video: input.video,

          userId: ctx.session.user.id,
        },
        create: {
          templateId: input.templateId,
          href: input.href,
          waitlistLogo: input.waitlistLogo,
          waitlistIcon: input.waitlistIcon,
          iconStroke: input.iconStroke,

          backgroundColor: input.backgroundColor,

          badge: input.badge,
          badgeColor: input.badgeColor,
          badgeSize: input.badgeSize,
          badgeFont: input.badgeFont,

          waitlistName: input.waitlistName,

          header: input.header,
          headerColor: input.headerColor,
          headerSize: input.headerSize,
          headerFont: input.headerFont,

          subHeader: input.subHeader,
          subHeaderColor: input.subHeaderColor,
          subHeaderSize: input.subHeaderSize,
          subHeaderFont: input.subHeaderFont,

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

