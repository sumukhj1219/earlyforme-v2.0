"use client"

import { type LucideIcon } from "lucide-react"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar"
import { usePage } from "~/hooks/use-page"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      icon?: LucideIcon
      title: string
      url: string
    }[]
  }[]
}) {
  const title = usePage()
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <div key={item.title}>
            <SidebarMenuItem>
              <a href={item.url} className="w-full">
                <SidebarMenuButton className="w-full text-xs font-semibold text-secondary/30">
                  {item.title}
                </SidebarMenuButton>
              </a>
            </SidebarMenuItem>

            {item.items?.map((subItem) => (
              <SidebarMenuItem key={subItem.title} className="ml-6">
                <a href={subItem.url} className="w-full">
                  <SidebarMenuButton className={`w-full text-xs hover:text-primary ${subItem.url.split('/')[1] === title.toLowerCase() ? 'bg-background text-primary':""} transition flex items-center gap-2`}>
                    {subItem.icon && (
                      <subItem.icon
                        className="w-6 h-6 rounded-sm p-0.5 bg-secondary/10 transition bg-gradient-to-br from-primary to-primary/50"
                        stroke="white"
                      />
                    )}
                    {subItem.title}
                  </SidebarMenuButton>
                </a>
              </SidebarMenuItem>
            ))}

          </div>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
