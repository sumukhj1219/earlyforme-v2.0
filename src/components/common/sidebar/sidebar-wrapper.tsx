"use client"
import { AppSidebar } from "./app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
import { Separator } from "~/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "~/components/ui/sidebar"
import { ThemeToggle } from "~/components/ui/theme-toggle"
import { usePage } from "~/hooks/use-page"
import { TitleChecker } from "~/utils/title-checker"
import { instrument_serif } from "../fonts/fonts"
import { TogglePreview } from "../tooglePreview/toggle-preview"
import { useState } from "react"
import type { ViewMode } from "~/types/viewMode"
import { Button } from "~/components/ui/button"
import { GlobeIcon, Layers } from "lucide-react"
import TemplateTrigger from "~/components/template/TemplateTrigger"
import Publish from "../publish/publish"

type Props = {
    children: React.ReactNode,
    viewMode: ViewMode,
    setViewMode: (mode: ViewMode) => void
}

export default function SidebarWrapper({ children, viewMode, setViewMode }: Props) {
    const title = usePage()
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />

                    <Breadcrumb className="flex-1">
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className={`md:text-2xl flex items-center justify-center gap-x-2 font-semibold text-xl ${instrument_serif.className}`}>
                                    <TitleChecker title={title} />
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="ml-auto">
                        <ThemeToggle />
                    </div>
                </header>

                <div className="flex flex-1 flex-col gap-4 ">
                    <div className="p-2 border-b flex items-start justify-between">
                        <Publish />
                        <div className="flex items-center justify-center gap-x-2">
                            <TogglePreview viewMode={viewMode} setViewMode={setViewMode} />
                            <TemplateTrigger />
                        </div>
                    </div>
                    <div className="grid auto-rows-min ">
                        <div className={`${viewMode === "Both" ? "grid md:grid-cols-2 gap-x-2" : "flex flex-col"}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
