import * as React from "react"
import { Building2, GalleryVerticalEnd, ListTreeIcon, ScrollText } from "lucide-react"
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { NavMain } from "./nav-main"
import { SidebarOptInForm } from "./sidebar-opt-in-form"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "~/components/ui/sidebar"
import { instrument_serif } from "../fonts/fonts"

const data = {
  navMain: [
    {
      title: "Navigation",
      url: "#",
      items: [
        {
          title: "Waitlists",
          url: "/waitlists",
          icon: ListTreeIcon
        },
        {
          title: "Manage Assets",
          url: "/assets",
          icon: Building2
        },
      ],
    },
    {
      title: "Create",
      url: "#",
      items: [
        {
          title: "New Waitlist",
          url: "/create",
          icon:ScrollText
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="border-none shadow-none">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-gradient-to-br from-primary to-primary/50 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <BsFileEarmarkSpreadsheet className="size-5 " stroke="white" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className={`font-medium md:text-4xl text-2xl ${instrument_serif.className}`}>
                    Earlyfor.me
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <SidebarOptInForm />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
