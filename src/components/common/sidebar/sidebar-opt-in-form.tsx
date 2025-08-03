"use client";

import { Button } from "~/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { instrument_serif } from "../fonts/fonts";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export function SidebarOptInForm() {
    const { data: session, status } = useSession();

    if (status === "loading") return null;

    if (status === "unauthenticated") {
        return (
            <Card className="gap-2 py-4 shadow-none border-none">
                <CardHeader className="px-4">
                    <CardTitle className={`text-sm md:text-xl tracking-wider ${instrument_serif.className}`}>
                        Login to earlyfor.me
                    </CardTitle>
                    <CardDescription>
                        Login to your account to save your data and access your data anywhere
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-4">
                    <form>
                        <div className="grid gap-2.5">
                            <Link href="/login">
                                <Button
                                    className="bg-sidebar-primary border-t-2 border-purple-300 text-sidebar-primary-foreground w-full shadow-none"
                                    size="sm"
                                >
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="flex flex-col gap-y-2">
            <div className="w-full p-2 bg-background flex items-center rounded-lg justify-center gap-x-5">
                <span className="rounded-full p-4 bg-gradient-to-br from-sky-400 to-fuchsia-400 via-sky-600"></span>
                <div className="flex flex-col items-start justify-center">
                    <span className="text-sm">{session?.user.name}</span>
                    <span className="text-xs">{session?.user.email}</span>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Button variant={'destructive'} className="w-full" onClick={()=>signOut()}>
                    Logout
                </Button>
            </div>
        </div>

    )
}
