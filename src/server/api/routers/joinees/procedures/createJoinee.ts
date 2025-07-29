import { TRPCError } from "@trpc/server";
import z from "zod";
import { publicProcedure } from "~/server/api/trpc";

export const createJoinee = publicProcedure.input(z.object({
    email:z.string().email(),
    waitlistName: z.string()
})).mutation(async({ctx, input})=>{
    try {
        const waitlist = await ctx.db.waitlist.findUnique({
            where:{
                waitlistName: input.waitlistName
            }
        })

        if(!waitlist){
            throw new TRPCError({
                message:"No waitlist exists with this name",
                code:"NOT_FOUND"
            })
        }

        const exists = await ctx.db.joinees.findUnique({
            where:{
                email:input.email
            }
        })

        if(exists){
            throw new TRPCError({
                message:"Email already exists",
                code:"CONFLICT"
            })
        }
        
        await ctx.db.joinees.create({
            data:{
                email:input.email,
                waitlistId:waitlist.id
            }
        })
    } catch (error) {
        throw new TRPCError({
            message:"Unable to join waitlist",
            code:"INTERNAL_SERVER_ERROR"
        })
    }
})